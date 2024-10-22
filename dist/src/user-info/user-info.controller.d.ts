import { UserInfoService } from './user-info.service';
import { InsertUserInfoDto } from './dto';
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
    }>;
    createUserinfo(userId: string, dto: InsertUserInfoDto): Promise<{
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
    deleteUserInfo(id: string, userId: string): Promise<{
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
