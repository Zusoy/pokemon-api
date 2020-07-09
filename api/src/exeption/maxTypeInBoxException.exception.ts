import { HttpException } from "@nestjs/common";

export class MaxTypeInBoxException extends HttpException {
    constructor(){
        super("Maximum pokemon reached", 542)
    }
}