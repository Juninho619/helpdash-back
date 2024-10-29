import { UserInfoService } from './user-info.service';
import { InsertUserInfoDto } from './dto';
import { User } from '@prisma/client';
export declare class UserInfoController {
    private readonly userInfoService;
    constructor(userInfoService: UserInfoService);
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
    createUserinfo(user: User, dto: InsertUserInfoDto): Promise<{
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
    updateUserInfo(user: User, dto: InsertUserInfoDto): Promise<{
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
    deleteUserInfo(user: User): Promise<{
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
