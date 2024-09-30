import { AuthService } from './auth.service';
import { AuthLoginDto, AuthRegisterDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(dto: AuthRegisterDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthLoginDto): Promise<{
        access_token: string;
    }>;
}
