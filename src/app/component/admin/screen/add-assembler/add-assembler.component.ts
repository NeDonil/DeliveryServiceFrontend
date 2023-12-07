import {Component} from '@angular/core';
import {AdminService} from "../../../../service/admin.service";
import {ADMIN_STATE} from "../../admin.state";
import {EmployeeCreate, EmployeeType} from "../../../../model/EmployeeCreate";

@Component({
  selector: 'admin-add-assembler-screen',
  templateUrl: 'add-assembler.component.html'
})
export class AddAssemblerComponent {

    assembler = new EmployeeCreate();
    success !: boolean;
    constructor(private adminService: AdminService) {
    }
    onBackClick() : void {
        this.adminService.setCurrentState(ADMIN_STATE.MAIN);
    }

    onAssemblerCreate() : void {
        this.adminService.createAssembler(this.assembler)
            .subscribe( (res) => {
                this.success = true;
            }, (e) =>{
                this.success = false;
            });

        this.assembler = new EmployeeCreate();
    }
}
