import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEnum } from 'class-validator';
import { PokemonType } from "./pokemon.type.enum";

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
}
