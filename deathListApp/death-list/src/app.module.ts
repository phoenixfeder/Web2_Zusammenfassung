import { Module } from '@nestjs/common';
import { DeathlistModule } from './deathlist/deathlist.module';

@Module({
  imports: [DeathlistModule],
})
export class AppModule {}
