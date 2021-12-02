import { Vendor } from "../vendor/vendor.class";


export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0.00;
    unit: string = "";
    photoPath?: string = "";
    vendorName: string = "";

    vendorId: number = 0;
    vendor?: Vendor;
    
    constructor() {}
}
