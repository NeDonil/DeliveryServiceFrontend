export enum ORDER_STATUS {
    MAKING = 'MAKING',
    PLACED = 'PLACED',
    DELIVERED = 'DELIVERED',
    REJECTED = 'REJECTED'
}

export const ORDER_STATUS_MAPPER : {[char: string]: string} = {
    [ORDER_STATUS.MAKING]: 'Делается',
    [ORDER_STATUS.PLACED]: 'Скоро начнем собирать',
    [ORDER_STATUS.DELIVERED]: 'Доставлен',
    [ORDER_STATUS.REJECTED]: 'Отменен',
}
