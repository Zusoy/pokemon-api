import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonsService } from '../service/pokemons.service'
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';

@Controller('pokemons')
@ApiTags('pokemons')
export class PokemonController {

    public constructor(private pokemonsService: PokemonsService) {}

    @Get()
    public getPokemons() {
        return this.pokemonsService.findAll()
    }

    @Post()
    async createPokemon(@Body() createPokemonDto: CreatePokemonDto) {
        return this.pokemonsService.createNew(createPokemonDto);
    }

    @Put(":id")
    async updatePokemon(@Param() params, @Body() updatePokemonDto: UpdatePokemonDto) {
        return this.pokemonsService.updateOne(params.id, updatePokemonDto);
    }

    @Get(':id')
    findOnePokemon(@Param() params) {
        return this.pokemonsService.findOne(params.id);
    }

    @Delete(':id')
    DeleteOnePokemon(@Param() params) {
        return this.pokemonsService.deleteOne(params.id);
    }
}
