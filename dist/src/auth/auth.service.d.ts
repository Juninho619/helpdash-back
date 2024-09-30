import { PrismaService } from '../../prisma/prisma.service';
import { AuthLoginDto, AuthRegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthRegisterDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthLoginDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: string): Promise<{
        access_token: string;
    }>;
}
