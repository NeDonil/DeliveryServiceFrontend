import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-employee-comment',
  templateUrl: 'employee-comment.component.html'
})
export class EmployeeCommentComponent {
    @Input() comment : string | undefined;
}
