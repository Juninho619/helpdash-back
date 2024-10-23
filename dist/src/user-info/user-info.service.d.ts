import { PrismaService } from 'prisma/prisma.service';
import { InsertUserInfoDto } from './dto/insert.user.info.dto';
export declare class UserInfoService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserInfo(userId: string): Promise<{
        id: string;
        userId: string;
        billingEmail: string;
        IBAN: string;
        businessName: string;
        address: string;
        city: string;
        country: string;
    }>;
    fillInfoUser(userId: string, dto: InsertUserInfoDto): Promise<{
        id: string;
        userId: string;
        billingEmail: string;
        IBAN: string;
        businessName: string;
        address: string;
        city: string;
        country: string;
    }>;
    updateUserInfo(userId: string, dto: InsertUserInfoDto): Promise<{
        id: string;
        userId: string;
        billingEmail: string;
        IBAN: string;
        businessName: string;
        address: string;
        city: string;
        country: string;
    }>;
    deleteUserInfo(userId: string, id: string): Promise<{
        id: string;
        userId: string;
        billingEmail: string;
        IBAN: string;
        businessName: string;
        address: string;
        city: string;
        country: string;
    }>;
}
