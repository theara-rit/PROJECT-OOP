enum OrderStatus{
    TODO,
    INPROGRESS,
    DONE,
}

export class Order{
    constructor(private orderId : number) {}
}