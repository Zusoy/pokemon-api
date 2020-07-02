import { ApiProperty } from "@nestjs/swagger";
import { PokemonType } from "src/entity/pokemon.type.enum";

export class UpdatePokemonDto {
    @ApiProperty({description: 'The name of the Pokemon'})
    name: string;

    @ApiProperty({description: 'The Type of the Pokemon', enum: PokemonType})
    type: string;
}
