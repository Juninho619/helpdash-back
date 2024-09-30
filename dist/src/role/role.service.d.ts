import { PrismaService } from '../../prisma/prisma.service';
import { RoleDto } from './dto';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    getRolesAdmin(userId: string): Promise<{
        name: string;
        id: string;
    }[]>;
    createRole(userId: string, dto: RoleDto): Promise<{
        name: string;
        id: string;
    }>;
    editRoleById(userId: string, roleId: string, dto: RoleDto): Promise<{
        name: string;
        id: string;
    }>;
    deleteRoleById(userId: string, id: string): Promise<void>;
}
