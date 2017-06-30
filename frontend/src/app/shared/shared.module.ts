import { CommonModule } from '@angular/common';
import { NgModule, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        RouterModule,
    ]
})
export class SharedModule {
    @Input() header: string;
}
