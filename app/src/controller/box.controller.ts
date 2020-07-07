import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BoxesService } from '../service/boxes.service'
import { CreateBoxDto } from 'src/dto/create-box.dto';
import { UpdateBoxDto } from 'src/dto/update-box.dto';

@Controller('boxes')
@ApiTags('boxes')
export class BoxController {

    public constructor(private boxesService: BoxesService) {}

    @Get()
    public getBoxes() {
        return this.boxesService.findAll()
    }

    @Post()
    async createBox(@Body() createBoxDto: CreateBoxDto) {
        return this.boxesService.createNew(createBoxDto);
    }

    @Put(":id")
    async updateBox(@Param() params, @Body() updateBoxDto: UpdateBoxDto) {
        return this.boxesService.updateOne(params.id, updateBoxDto);
    }

    @Get(':id')
    findOneBox(@Param() params) {
        return this.boxesService.findOne(params.id);
    }

    @Delete(':id')
    DeleteOneBox(@Param() params) {
        return this.boxesService.deleteOne(params.id);
    }
}
