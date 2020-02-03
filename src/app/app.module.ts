import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { PetsModule } from '../pets/pets.module';
import { DbModule } from '../db/db.module';
import { RolesGuard } from '../common/guards/roles/roles.guard';

@Module({
  imports: [
    DbModule,
    AuthModule,
    UsersModule,
    PetsModule,
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
  controllers: [AppController],
})
export class AppModule {}
