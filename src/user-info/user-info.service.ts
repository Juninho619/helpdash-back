import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { InsertUserInfoDto } from './dto/insert.user.info.dto';

@Injectable()
export class UserInfoService {
    constructor(private prisma: PrismaService) {}

    async getUserInfo(userId: string){
        // add authorization if good user, admin or user himself. 
        return this.prisma.userInfo.findFirst({
            where:{
                id: userId
            },
            select:{
                id: true,
                userId: true,
                businessName: true,
                billingEmail: true,
                address: true,
                city: true,
                country: true,
                IBAN: true
            }
        })
    }

    async fillInfoUser(userId: string, dto: InsertUserInfoDto){
        const userExists = await this.prisma.user.findFirst({
            where :{
                id: userId
            }
        })

        if (!userExists){
            throw new ForbiddenException('User does not exist')
        }

        return this.prisma.userInfo.create({
            data:{
                userId: userId,
                businessName: dto.businessname,
                billingEmail: dto.billingEmail,
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN
            }
        })

    }

    async updateUserInfo(userId: string, dto: InsertUserInfoDto){
        const userExists = await this.prisma.user.findFirst({
            where :{
                id: userId
            }
        })

        if (!userExists){
            throw new ForbiddenException('User does not exist')
        }

        return this.prisma.userInfo.update({
            where:{
                userId: userId
            },
            data:{
                userId: userId,
                businessName: dto.businessname,
                billingEmail: dto.billingEmail,
                address: dto.address,
                city: dto.city,
                country: dto.country,
                IBAN: dto.IBAN
            }
        })

    }

    async deleteUserInfo(id: string){
        const userInfoExists = await this.prisma.userInfo.findFirst({
            where:{
                id: id
            }
            
        })

        if(!userInfoExists){
            throw new ForbiddenException('No user infor with this id')
        }

        return this.prisma.userInfo.delete({
            where:{
                id: id
            }
        })
    }
}