export enum ROLE {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER',
    ASSEMBLER = 'ASSEMBLER',
    COURIER = 'COURIER'
}

export const ROLE_MAPPER : {[char: string]: string} = {
    [ROLE.ADMIN]: 'ADMIN',
    [ROLE.CUSTOMER]: 'CUSTOMER',
    [ROLE.ASSEMBLER]: 'ASSEMBLER',
    [ROLE.COURIER]: 'COURIER'
}