import {Component} from '@angular/core';
import {AdminService} from "../../../../service/admin.service";
import {ADMIN_STATE} from "../../admin.state";
import {EmployeeCreate, EmployeeType} from "../../../../model/EmployeeCreate";

@Component({
  selector: 'admin-add-courier-screen',
  templateUrl: 'add-courier.component.html'
})
export class AddCourierComponent {

    employee = new EmployeeCreate();
    success !: boolean;
    constructor(private adminService: AdminService) {
    }
    onBackClick() : void {
        this.adminService.setCurrentState(ADMIN_STATE.MAIN);
    }

    onEmployeeCreate() : void {
        this.adminService.createCourier(this.employee)
            .subscribe( (res) => {
                this.success = true;
            }, (e) =>{
                this.success = false;
            });

        this.employee = new EmployeeCreate();
    }

    protected readonly EmployeeType = EmployeeType;
}
