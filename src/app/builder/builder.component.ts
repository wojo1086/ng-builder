import {Component, OnInit} from '@angular/core';
import {faSquare} from '@fortawesome/free-regular-svg-icons/faSquare';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faInputPipe} from '@fortawesome/pro-regular-svg-icons/faInputPipe';


export interface IComponent {
    name: string;
    icon?: any;
}

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.sass']
})
export class BuilderComponent implements OnInit {
    components: IComponent[] = [
        {
            name: 'Card',
            icon: faSquare
        },
        {
            name: 'List',
            icon: faList
        },
        {
            name: 'Input',
            icon: faInputPipe
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
