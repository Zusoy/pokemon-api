import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('pokemons')
@ApiTags('pokemons')
export class PokemonController
{
    @Get()
    public getPokemons()
    {

    }
}
