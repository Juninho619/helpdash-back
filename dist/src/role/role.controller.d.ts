import { RoleDto } from './dto';
import { RoleService } from './role.service';
import { User } from '@prisma/client';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    getAllRoles(user: User): Promise<{
        name: string;
        id: string;
    }[]>;
    createRole(dto: RoleDto, user: User): Promise<{
        name: string;
        id: string;
    }>;
    editRoleById(roleId: string, dto: RoleDto, user: User): Promise<{
        name: string;
        id: string;
    }>;
    deleteRoleById(roleId: string, user: User): Promise<void>;
}
