import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TicketModule } from './ticket/ticket.module';
import { InvoiceModule } from './invoice/invoice.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true,
    }),
     PrismaModule,
     AuthModule,
     TicketModule,
     InvoiceModule,
     RoleModule],
})
export class AppModule {}
