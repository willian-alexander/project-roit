import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './application/app.application';
import ibgeService from './service/IbgeService';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [ibgeService],
})
export class AppModule {}
