import { IsDate } from "class-validator"

export class CreateInvoicedto{
    serviceDescription: string
    
    @IsDate()
    startedAt: Date

    @IsDate()
    endDate: Date
}