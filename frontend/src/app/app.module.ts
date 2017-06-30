import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { PersonModule } from './person/person.module';
import {
    SharedModule,
    HeaderComponent,
    HeaderService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        NgbModule,
        Angular2FontawesomeModule,
        rootRouting,
        SharedModule,
        PersonModule,
    ],
    providers: [
        HeaderService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
