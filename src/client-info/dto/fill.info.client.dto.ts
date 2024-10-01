import { IsEmail, IsIBAN } from "class-validator"

export class FillInfoClientDto{
    address: string

    city: string

    country: string

    @IsIBAN()
    IBAN: string

    @IsEmail()
    emailAddress: string
}