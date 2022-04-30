import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './builder.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCardModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from '../shared/shared.module';
import { FlexModule } from '@angular/flex-layout';

const routes: Routes = [
    {
        path: '',
        component: BuilderComponent
    }
];

@NgModule({
    declarations: [
        BuilderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NbLayoutModule,
        NbEvaIconsModule,
        NbSidebarModule,
        NbCardModule,
        SharedModule,
        FlexModule,
    ],
    providers: [NbSidebarService]
})
export class BuilderModule {
}
