import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { InsertUserInfoDto } from './dto/insert.user.info.dto';
import { checkUserHasAccount } from 'src/utils/checkUser';
import { User } from '@prisma/client';

@Injectable()
export class UserInfoService {
    constructor(private prisma: PrismaService) {}

    async getUserInfo(userId: string){
        await checkUserHasAccount(userId)

        try{
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
    }catch(e){
        console.log(e);
        return({'error': e})
        
    }
    }

    async fillInfoUser(userId: string, dto: InsertUserInfoDto){
        checkUserHasAccount(userId)

        const userExists = await this.prisma.user.findFirst({
            where :{
                id: userId
            }
        })

        if (!userExists){
            throw new ForbiddenException('User does not exist')
        }

        try{
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
        }catch(e){
            console.log(e);
            return({'error': e})
        }

    }

    async updateUserInfo(userId: string, dto: InsertUserInfoDto){
        checkUserHasAccount(userId) 
        const userExists = await this.prisma.user.findFirst({
            where :{
                id: userId
            }
        })

        if (!userExists){
            throw new ForbiddenException('User does not exist')
        }

        try{
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
    }catch(e){
        console.log(e);
        return({'error': e})
    }

    }

    async deleteUserInfo(userId: string){
        await checkUserHasAccount(userId)
        const userInfoExists = await this.prisma.userInfo.findFirst({
            where:{
                id: userId
            }
            
        })

        if(!userInfoExists){
            throw new ForbiddenException('No user info with this id')
        }

        try{
        return this.prisma.userInfo.delete({
            where:{
                id: userId
            }
        })
    }catch(e){
        console.log(e);
        return({'error': e})
    }
    }
}
