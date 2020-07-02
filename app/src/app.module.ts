import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './module/pokemons.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    PokemonsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule
{

}
