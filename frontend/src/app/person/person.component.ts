import { NgModule, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

import { HeaderService } from '../shared';

@Component({
    selector: 'person-page',
    templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
    users;

    customerForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    username: FormControl;
    password: FormControl;

    constructor(
        private headerService: HeaderService,
        private http: Http,
    ) {
        // get initial users
        http.get('http://localhost:3000/users').subscribe(res => this.users = res.json());

        // check every second for updates
        IntervalObservable.create(3000).subscribe(() => {
            http.get('http://localhost:3000/users').subscribe(res => this.users = res.json());
        })
    }

    ngOnInit() {
        this.headerService.setHeaderTitle('People');

        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.required);
        this.username = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
    }

    createForm() {
        this.customerForm = new FormGroup({
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
        });
    }

    onSubmit() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:3000/users', JSON.stringify(this.customerForm.value), { headers: headers }).subscribe((data) => {
            if (data.json()) {
                this.users.push(data.json());

                this.customerForm.reset();
            } else {
                console.log('Error');
            }
        });
    }
}
