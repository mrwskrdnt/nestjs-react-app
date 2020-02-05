import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import register from '@react-ssr/nestjs-express/register';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
import { config } from './common/config'
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // register `.tsx` as a view template engine
  await register(app);

  app.use(
    session({
      // TODO: Move to config
      secret: config.secrets.session || '',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  await app.listen(config.server.port || 3000);
}

bootstrap();
