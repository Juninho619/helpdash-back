import { isDate } from "class-validator"

export class CreateInvoicedto{
    serviceDescription: string
    
    startedAt: Date

    endDate: Date
}