import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { InsertUserInfoDto } from './dto';
import { GetUser } from 'src/auth';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Get('/all')
  getUserInfo(@Param('userId') userId: string){
    return this.userInfoService.getUserInfo(userId)
  }

  @Post('/create')
  createUserinfo(@GetUser() user: User, @Body() dto: InsertUserInfoDto){
    return this.userInfoService.fillInfoUser(user.id, dto )
  }

  @Patch('/update')
  updateUserInfo(@GetUser() user: User, @Body() dto: InsertUserInfoDto){
    return this.userInfoService.updateUserInfo(user.id, dto)
  }

  @Delete('/delete')
  deleteUserInfo(@GetUser() user: User){
    return this.userInfoService.deleteUserInfo(user.id)
  }
}
