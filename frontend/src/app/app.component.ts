import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderService } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private headerService: HeaderService,
    ) {}

    ngOnInit() {
        this.headerService.setHeaderTitle("Dashboard");
    }
}
