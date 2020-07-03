import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Pokemon } from "./pokemon.entity";

@Entity()
export class Box
{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Pokemon, pokemon => pokemon.box)
    pokemons: Pokemon[];
}
