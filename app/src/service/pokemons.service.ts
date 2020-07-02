import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from 'src/entity/pokemon.entity';
import { CreatePokemonDto } from 'src/dto/create-pokemon.dto';
import { UpdatePokemonDto } from 'src/dto/update-pokemon.dto';

@Injectable()
export class PokemonsService {
    constructor(
        @InjectRepository(Pokemon)
        private pokemonsRepository: Repository<Pokemon>,
    ) { }

    findAll(): Promise<Pokemon[]> {
        return this.pokemonsRepository.find();
    }

    async findOne(id: string): Promise<Pokemon> {
        let resp = await this.pokemonsRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        return resp;
    }

    createNew(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
        return this.pokemonsRepository.save(createPokemonDto);
    }

    async updateOne(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {

        let resp = await this.pokemonsRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }

        await this.pokemonsRepository.update(
            { id: id },
            updatePokemonDto,
        )
        return await this.pokemonsRepository.findOne(id);
    }
    async deleteOne(id: string): Promise<void> {
        let resp = await this.pokemonsRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        await this.pokemonsRepository.delete(id);
    }
}