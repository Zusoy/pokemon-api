import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Box } from '../entity/box.entity';
import { CreateBoxDto } from '../dto/create-box.dto';
import { UpdateBoxDto } from '../dto/update-box.dto';

@Injectable()
export class BoxesService {
    constructor(
        @InjectRepository(Box)
        private boxesRepository: Repository<Box>,
    ) { }

    findAll(): Promise<Box[]> {
        return this.boxesRepository.find({ relations: ["owner"] });
    }

    async findOne(id: string): Promise<Box> {
        let resp = await this.boxesRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        return resp;
    }

    createNew(createBoxDto: CreateBoxDto): Promise<Box> {
        return this.boxesRepository.save(createBoxDto);
    }

    async updateOne(id: number, updateBoxDto: UpdateBoxDto): Promise<Box> {

        let resp = await this.boxesRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }

        await this.boxesRepository.update(
            { id: id },
            updateBoxDto,
        )
        return await this.boxesRepository.findOne(id);
    }

    async deleteOne(id: string): Promise<void> {
        let resp = await this.boxesRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        await this.boxesRepository.delete(id);
    }
}
