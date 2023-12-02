import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-column-item',
  templateUrl: 'column-item.component.html'
})
export class ColumnItemComponent {
    @Input() address !: string;
    @Input() items !: number;
    @Input() time !: string;
    @Input() fio !: string;
}
