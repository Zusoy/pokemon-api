import { Module } from '@nestjs/common';
import { PokemonController } from './controller/pokemon.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot()
  ],
  controllers: [PokemonController],
  providers: [],
})
export class AppModule
{

}
