import { HttpException } from "@nestjs/common";

export class MaxTypeInBoxException extends HttpException {
    constructor(){
        super("Maximum type of pokemon reached", 542)
    }
}