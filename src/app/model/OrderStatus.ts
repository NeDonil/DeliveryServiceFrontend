export enum ORDER_STATUS {
    MAKING = 'MAKING',
    PLACED = 'PLACED',
    ASSEMBLING = 'ASSEMBLING',
    ASSEMBLED = 'ASSEMBLED',
    DELIVERING = 'DELIVERING',
    DELIVERED = 'DELIVERED',
    REJECTED = 'REJECTED'
}

export const ORDER_STATUS_MAPPER : {[char: string]: string} = {
    [ORDER_STATUS.MAKING]: 'Делается',
    [ORDER_STATUS.PLACED]: 'Скоро начнем собирать!',
    [ORDER_STATUS.ASSEMBLING]: 'Собираем заказ!',
    [ORDER_STATUS.ASSEMBLED]: 'Ждем курьера!',
    [ORDER_STATUS.DELIVERING]: 'Курьер уже в пути!',
    [ORDER_STATUS.DELIVERED]: `Доставлен`,
    [ORDER_STATUS.REJECTED]: 'Отменен',
}
