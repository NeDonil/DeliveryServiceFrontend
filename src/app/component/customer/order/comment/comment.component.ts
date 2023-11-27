import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {

    @Input() comment : string | undefined;

    constructor(private orderService: OrderService){}

    isOpen: boolean = false;
    commentForm = new FormControl('');

    ngOnInit() : void {
        if(this.comment){
            this.commentForm.patchValue(this.comment);
            debugger;
        }
    }

    onSaveClicked() : void {
        if(this.commentForm.value){
            this.orderService.setComment(this.commentForm.value);
            this.commentForm.reset();
        }
        this.isOpen = false;
    }

    onCancelClicked() : void {
        this.commentForm.setValue( this.comment ? this.comment : "");
        this.isOpen = false;
    }
}
