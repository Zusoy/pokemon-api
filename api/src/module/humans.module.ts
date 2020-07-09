import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumanController } from 'src/controller/human.controller';
import { HumansService } from 'src/service/humans.service';
import { Human } from 'src/entity/human.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  providers: [HumansService],
  controllers: [HumanController],
})
export class HumansModule {}
