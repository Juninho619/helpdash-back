import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { InsertUserInfoDto } from './dto';

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Get('/all')
  getUserInfo(@Param('userId') userId: string){
    return this.userInfoService.getUserInfo(userId)
  }

  @Post('/create')
  createUserinfo(@Param('userId') userId: string, @Body() dto: InsertUserInfoDto){
    return this.userInfoService.fillInfoUser(userId, dto )
  }

  @Patch('/update')
  updateUserInfo(@Param('userId') userId: string, @Body() dto: InsertUserInfoDto){
    return this.userInfoService.updateUserInfo(userId, dto)
  }

  @Delete('/delete')
  deleteUserInfo(@Param('id') id: string){
    return this.userInfoService.deleteUserInfo(id)
  }
}
