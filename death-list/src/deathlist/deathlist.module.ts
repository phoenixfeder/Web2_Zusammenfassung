import { Module } from '@nestjs/common';
import { DeathlistController } from './deathlist.controller';
import { DeathlistService } from './deathlist.service';

@Module({
  controllers: [DeathlistController],
  providers: [DeathlistService]
})
export class DeathlistModule {}
