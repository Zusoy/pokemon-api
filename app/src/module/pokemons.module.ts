import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../entity/pokemon.entity';
import { PokemonController } from '../controller/pokemon.controller';
import { PokemonsService } from '../service/pokemons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonsService],
  controllers: [PokemonController],
})
export class PokemonsModule {}
