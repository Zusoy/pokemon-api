import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './module/pokemons.module';
import { BoxesModule } from './module/boxes.module';
import { HumansModule } from './module/humans.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    PokemonsModule,
    BoxesModule,
    HumansModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule
{

}
