import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-assembler-order',
  templateUrl: './assembler-order.component.html' 
})
export class AssemblerOrderComponent implements OnInit {
    @Input() order !: Order;
    @Output() takeOrder = new EventEmitter();

    itemsCount : number = 0;
    timeDiff : number = 0;
    selected : boolean = false;

    ngOnInit(): void {
        if(this.order){
            this.order.items?.forEach( (e) => {
                if(e.count){
                    this.itemsCount += e.count;
                }
            });
        }
    }

    onTakePressed(){
        
        if(this.order){
            this.takeOrder.emit(this.order);
        }
    }
}
