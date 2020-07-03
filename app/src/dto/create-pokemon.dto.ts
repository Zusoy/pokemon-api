import { ApiProperty } from "@nestjs/swagger";
import { PokemonType } from "../entity/pokemon.type.enum";

export class CreatePokemonDto {
    @ApiProperty({description: 'The name of the Pokemon'})
    name: string;

    @ApiProperty({description: 'The Type of the Pokemon', enum: PokemonType})
    type: string;
}
