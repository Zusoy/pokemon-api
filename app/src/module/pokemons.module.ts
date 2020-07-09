import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../entity/pokemon.entity';
import { PokemonController } from '../controller/pokemon.controller';
import { PokemonsService } from '../service/pokemons.service';
import { Human } from 'src/entity/human.entity';
import { Box } from 'src/entity/box.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Human, Box])],
  providers: [PokemonsService],
  controllers: [PokemonController],
})
export class PokemonsModule {}
