import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { AssemblerService } from 'src/app/service/assembler.service';

@Component({
  selector: 'app-assembler',
  templateUrl: './assembler.component.html' 
})
export class AssemblerComponent implements OnInit, OnDestroy{

    currentOrder : Order | undefined;
    currentOrderSubscription = new Subscription;

    currentState: number = 1;
    currentStateSubscription = new Subscription;

    constructor(private assemblerService: AssemblerService){}

    ngOnInit() : void {
        this.currentOrderSubscription = this.assemblerService
            .getCurrentOrder()
            .subscribe( (data) => this.currentOrder = data);
        
        this.currentStateSubscription = this.assemblerService
            .getCurrentState()
            .subscribe( (data) => this.currentState = data);
    }

    ngOnDestroy(): void {
        if(this.currentOrderSubscription){
            this.currentOrderSubscription.unsubscribe();
        }

        if(this.currentState){
            this.currentStateSubscription.unsubscribe();
        }
    }
}
