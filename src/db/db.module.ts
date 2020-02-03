import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from '../common/config'

@Module({
  imports: [
    MongooseModule.forRoot(
      `${config.db.host}${config.db.name}`,
      { useNewUrlParser: true }),
  ],
})
export class DbModule {}
