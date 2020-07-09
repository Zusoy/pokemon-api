import { ApiProperty } from "@nestjs/swagger";
import { Human } from "src/entity/human.entity";
import { Pokemon } from "src/entity/pokemon.entity";

export class CreateBoxDto {
    @ApiProperty({description: 'The box owner'})
    owner: Human;

    @ApiProperty({description: 'Pokemons in the box'})
    pokemons: Pokemon[];
}