import { Component, Input, OnInit } from '@angular/core';

import { HeaderService } from '../services';

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    header: string;

    constructor(
        private headerService: HeaderService,
    ){}

    ngOnInit() {
        this.headerService.headerTitle.subscribe((val: string) => {
            this.header = val;
        });
    }
}
