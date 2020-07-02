import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from 'src/entity/pokemon.entity';
import { PokemonController } from 'src/controller/pokemon.controller';
import { PokemonsService } from 'src/service/pokemons.service';


@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonsService],
  controllers: [PokemonController],
})
export class PokemonsModule {}