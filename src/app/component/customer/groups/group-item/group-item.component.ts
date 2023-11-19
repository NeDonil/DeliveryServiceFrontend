import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from 'src/app/model/Group';

@Component({
    selector: 'app-group-item',
    templateUrl: './group-item.component.html',
})
export class GroupItemComponent {
    @Input() group !: Group;

    @Output() groupSelected = new EventEmitter();

    onGroupSelected(): void{
        this.groupSelected.emit(this.group);
    }
}
