import { Controller, Get, Post, Body, Scope, Injectable } from "@nestjs/common";
import IbgeService from "../service/IbgeService";
import { PessoaDTO } from "../model/PessoaDTO";

@Injectable()
@Controller({
    path: 'locale',
    scope: Scope.REQUEST
})
export class AppController {
    constructor(
        private readonly ibgeService: IbgeService,
        ) {}

    @Get()
    getHello(): string {
        return 'Hello World!';
    }

    @Get('district')
    async findCities() {
        return await this.ibgeService.findCities()
    }

    @Post('calculate')
    async bringIbgeCode(@Body() body: PessoaDTO) {
        const name = body.name
        const cpf = body.cpf
        const calculate = await this.ibgeService.bringIbgeCode(name, cpf)       

        return calculate
    }
}