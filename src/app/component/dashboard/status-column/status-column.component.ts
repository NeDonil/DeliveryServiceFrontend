import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-column',
  templateUrl: './status-column.component.html'
})
export class StatusColumnComponent {
    @Input() title !: string;
    @Input() legend !: string;
}
