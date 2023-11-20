import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItem } from 'src/app/model/OrderItem';

@Component({
  selector: 'app-assembly-item',
  templateUrl: './assembly-item.component.html'
})
export class AssemblyItemComponent {
    currentCount : number = 0;

    @Input() item !: OrderItem;
    @Output() itemClick = new EventEmitter();

    onItemClick() : void {
        if(this.item.count && this.item.count > this.currentCount){
            this.currentCount += 1;
            this.itemClick.emit();
        }
    }
}
