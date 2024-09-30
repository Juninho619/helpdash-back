import { isEmail, IsIBAN } from "class-validator"

export class InsertUserInfoDto{
    businessname: string

    @isEmail()
    billingEmail: string

    address: string

    city: string

    country: string

    @IsIBAN()
    IBAN: string
}