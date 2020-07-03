import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IsEnum } from 'class-validator';
import { PokemonType } from "./pokemon.type.enum";
import { Box } from "./box.entity";

@Entity()
export class Pokemon
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    @IsEnum(PokemonType)
    type: string;

    @ManyToOne(type => Box, box => box.pokemons)
    box: Box
}
