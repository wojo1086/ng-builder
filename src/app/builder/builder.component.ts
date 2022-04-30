import {Component, OnInit} from '@angular/core';

export interface IComponent {
    name: string;
}

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.sass']
})
export class BuilderComponent implements OnInit {
    components: IComponent[] = [
        {
            name: 'Card'
        },
        {
            name: 'List'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
