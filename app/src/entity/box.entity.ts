import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Pokemon } from "./pokemon.entity";
import { Human } from "./human.entity";

@Entity()
export class Box
{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Pokemon, pokemon => pokemon.box)
    pokemons: Pokemon[];

    @ManyToOne(type => Human, human => human.boxes)
    owner: Human
}
