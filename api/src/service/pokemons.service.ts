import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entity/pokemon.entity';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { Box } from 'src/entity/box.entity';
import { MaxTypeInBoxException } from 'src/exeption/maxTypeInBoxException.exception';
import { maxPokemonLengthInBox } from 'src/exeption/maxPokemonLengthInBox.exception';

@Injectable()
export class PokemonsService {
    constructor(
        @InjectRepository(Pokemon)
        private pokemonsRepository: Repository<Pokemon>,
        
        @InjectRepository(Box)
        private boxesRepository: Repository<Box>,
    ) { }

    findAll(): Promise<Pokemon[]> {
        return this.pokemonsRepository.find({ relations: ["box"] });
    }

    async findOne(id: string): Promise<Pokemon> {
        let resp = await this.pokemonsRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }
        return resp;
    }

    async createNew(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
        let box = await this.boxesRepository.findOne(createPokemonDto.box, { relations: ["pokemons"] })
        console.log(box)
        let types = box.pokemons.map(pokemon => pokemon.type)

        types = [...new Set(types)];
        console.log(types)

        // check if pokemon length of box is less than 24
        if(box.pokemons.length >= 24){
            throw new maxPokemonLengthInBox
        }

        else if(box.pokemons.length <= 2 || types.includes(createPokemonDto.type) && types.length <= 2){
            return this.pokemonsRepository.save(createPokemonDto);
        }

        else {
            throw new MaxTypeInBoxException
        } 
        
    }

    async updateOne(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {

        let resp = await this.pokemonsRepository.findOne(id);

        // not found in database
        if (!resp) {
            throw new NotFoundException()
        }


        // check pokemon type count in box
        let box = await this.boxesRepository.findOne(updatePokemonDto.box)
        let types = box.pokemons.map(pokemon => pokemon.type)

        types = [...new Set(types)];

        if(types.includes(updatePokemonDto.type) && types.length <= 2){
            await this.pokemonsRepository.update(
                { id: id },
                updatePokemonDto,
            )
            return await this.pokemonsRepository.findOne(id);
        }
        else {
            throw new MaxTypeInBoxException
        } 

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
