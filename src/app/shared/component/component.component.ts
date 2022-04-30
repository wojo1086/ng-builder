import {Component, Input, OnInit} from '@angular/core';
import {IComponent} from '../../builder/builder.component';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.sass']
})
export class ComponentComponent implements OnInit {
    @Input() data!: IComponent;

    constructor() {
    }

    ngOnInit(): void {
    }

}
