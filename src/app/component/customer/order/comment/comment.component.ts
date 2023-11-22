import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html' 
})
export class CommentComponent implements OnInit {

    @Input() comment : string | undefined;

    constructor(private orderService: OrderService){}

    isOpen: boolean = false;
    public commentForm = new FormControl('');

    ngOnInit() : void {
        if(this.comment){
            this.commentForm.setValue(this.comment);
        }
    }

    onSaveClicked() : void {
        if(this.commentForm.value){
            this.orderService.setComment(this.commentForm.value);
        }
        this.isOpen = false;
    }

    onCancelClicked() : void {
        this.isOpen = false;
    }
}
