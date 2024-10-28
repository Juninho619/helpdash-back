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
    } | {
        error: any;
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
    } | {
        error: any;
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
    } | {
        error: any;
    }>;
    deleteUserInfo(userId: string): Promise<{
        id: string;
        userId: string;
        billingEmail: string;
        IBAN: string;
        businessName: string;
        address: string;
        city: string;
        country: string;
    } | {
        error: any;
    }>;
}
