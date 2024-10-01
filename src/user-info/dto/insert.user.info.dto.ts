import { IsEmail, isEmail, IsIBAN } from "class-validator"

export class InsertUserInfoDto{
    businessname: string

    @IsEmail()
    billingEmail: string

    address: string

    city: string

    country: string

    @IsIBAN()
    IBAN: string
}