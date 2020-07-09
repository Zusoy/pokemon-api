import { HttpException } from "@nestjs/common";

export class maxPokemonLengthInBox extends HttpException {
    constructor(){
        super("Maximum pokemon in box", 543)
    }
}