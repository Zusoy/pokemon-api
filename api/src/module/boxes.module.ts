import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Box } from 'src/entity/box.entity';
import { BoxesService } from 'src/service/boxes.service';
import { BoxController } from 'src/controller/box.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Box])],
  providers: [BoxesService],
  controllers: [BoxController],
})
export class BoxesModule {}
