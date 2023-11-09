import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent {
    @Input()
    text !: string;

    @Input()
    url !: string;
}
