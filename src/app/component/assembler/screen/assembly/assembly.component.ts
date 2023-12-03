import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { AssemblerService } from 'src/app/service/assembler.service';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html'
})
export class AssemblyComponent implements OnInit {

    totalProductCount : number = 0;
    totalProductAssembled : number = 0;

    @Input() order !: Order | undefined;

    constructor(private assemblerService: AssemblerService) {}

    addOneProduct() : void {
        this.totalProductAssembled += 1;
    }

    assembledClicked() : void {
        if(this.order && this.order){
            this.assemblerService.makeAssembled(this.order);
        }
    }

    rejectOrder() : void {
        if(this.order?.id) {
            this.assemblerService.rejectOrder(this.order.id)
        }
    }

    ngOnInit() : void {
        if(this.order){
            this.order.items?.forEach((el) => {
                if(el.count){
                    this.totalProductCount += el.count
                }
            });
        }
    }
}
