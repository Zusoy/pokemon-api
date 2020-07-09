import { ApiProperty } from "@nestjs/swagger";
import { Box } from "src/entity/box.entity";

export class UpdateHumanDto {
    @ApiProperty({description: 'The name of the Human'})
    name: string;

    @ApiProperty({description: 'Boxes of the Human'})
    boxes: Box[];
    
}
