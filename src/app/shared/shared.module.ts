import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { FlexModule } from '@angular/flex-layout';
import { NbIconModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        ComponentComponent
    ],
    exports: [
        ComponentComponent
    ],
    imports: [
        CommonModule,
        FlexModule,
        NbIconModule,
        FontAwesomeModule
    ]
})
export class SharedModule {
}
