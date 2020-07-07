import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Human } from '../entity/human.entity';
import { CreateHumanDto } from '../dto/create-human.dto';
import { UpdateHumanDto } from '../dto/update-human.dto';

@Injectable()
export class HumansService {
    constructor(
        @InjectRepository(Human)
        private humansRepository: Repository<Human>,
    ) { }

    findAll(): Promise<Human[]> {
        return this.humansRepository.find({ relations: ["boxes"] });
    }

    async findOne(id: string): Promise<Human> {
        let resp = await this.humansRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        return resp;
    }

    createNew(createHumanDto: CreateHumanDto): Promise<Human> {
        return this.humansRepository.save(createHumanDto);
    }

    async updateOne(id: number, updateHumanDto: UpdateHumanDto): Promise<Human> {

        let resp = await this.humansRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }

        await this.humansRepository.update(
            { id: id },
            updateHumanDto,
        )
        return await this.humansRepository.findOne(id);
    }

    async deleteOne(id: string): Promise<void> {
        let resp = await this.humansRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        await this.humansRepository.delete(id);
    }
}
