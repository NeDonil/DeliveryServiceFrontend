

export class EmployeeCreate{
    fio !: string;
    email !: string;
    password !: string;
}

export enum EmployeeType{
    COURIER,
    ASSEMBLER
}
