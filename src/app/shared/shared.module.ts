import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';



@NgModule({
    declarations: [
        ComponentComponent
    ],
    exports: [
        ComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
