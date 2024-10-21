import { UserInfoService } from './user-info.service';
import { InsertUserInfoDto } from './dto';
export declare class UserInfoController {
    private readonly userInfoService;
    constructor(userInfoService: UserInfoService);
    getUserInfo(userId: string): Promise<{
        id: string;
        userId: string;
        businessName: string;
        billingEmail: string;
        address: string;
        city: string;
        country: string;
        IBAN: string;
    }>;
    createUserinfo(userId: string, dto: InsertUserInfoDto): Promise<{
        id: string;
        userId: string;
        businessName: string;
        billingEmail: string;
        address: string;
        city: string;
        country: string;
        IBAN: string;
    }>;
    updateUserInfo(userId: string, dto: InsertUserInfoDto): Promise<{
        id: string;
        userId: string;
        businessName: string;
        billingEmail: string;
        address: string;
        city: string;
        country: string;
        IBAN: string;
    }>;
    deleteUserInfo(id: string): Promise<{
        id: string;
        userId: string;
        businessName: string;
        billingEmail: string;
        address: string;
        city: string;
        country: string;
        IBAN: string;
    }>;
}
