import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../entity/pokemon.entity';
import { PokemonController } from '../controller/pokemon.controller';
import { PokemonsService } from '../service/pokemons.service';
import { Box } from 'src/entity/box.entity';
import { Human } from 'src/entity/human.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Box, Human])],
  providers: [PokemonsService],
  controllers: [PokemonController],
})
export class PokemonsModule {}
