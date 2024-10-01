import { IsDate } from "class-validator"

export class UpdateInvoiceDto{
    serviceDescription?: string
    
    @IsDate()
    startedAt?: Date

    @IsDate()
    endDate?: Date
}