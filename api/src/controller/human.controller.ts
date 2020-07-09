import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HumansService } from '../service/humans.service'
import { CreateHumanDto } from 'src/dto/create-human.dto';
import { UpdateHumanDto } from 'src/dto/update-human.dto';

@Controller('humans')
@ApiTags('humans')
export class HumanController {

    public constructor(private humansService: HumansService) {}

    @Get()
    public getHumans() {
        return this.humansService.findAll()
    }

    @Post()
    async createHuman(@Body() createHumanDto: CreateHumanDto) {
        return this.humansService.createNew(createHumanDto);
    }

    @Put(":id")
    async updateHuman(@Param() params, @Body() updateHumanDto: UpdateHumanDto) {
        return this.humansService.updateOne(params.id, updateHumanDto);
    }

    @Get(':id')
    findOneHuman(@Param() params) {
        return this.humansService.findOne(params.id);
    }

    @Delete(':id')
    DeleteOneHuman(@Param() params) {
        return this.humansService.deleteOne(params.id);
    }
}
