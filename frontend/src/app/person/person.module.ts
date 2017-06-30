import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { PersonComponent } from './person.component';

const personRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'person',
        component: PersonComponent
    }
]);

@NgModule({
    imports: [
        personRouting,
        BrowserModule,
        Angular2FontawesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PersonComponent,
    ],
    providers: []
})
export class PersonModule {}
