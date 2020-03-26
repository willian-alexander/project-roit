import { Controller, Get, Post, Body, Scope } from "@nestjs/common";
import IbgeService from "src/service/IbgeService";
import { PessoaDTO } from "src/model/PessoaDTO";


@Controller({
    path: 'locale',
    scope: Scope.REQUEST
})
export class AppController {
    constructor(
        private readonly IbgeService: IbgeService,
        ) {}

    @Get('district')
    async findCities() {
        return await this.IbgeService.findCities()
    }

    @Post('calculate')
    async calculateIbge(@Body() body: PessoaDTO) {
        const name = body.name
        const cpf = body.cpf
        const calculate = await this.IbgeService.calculateIbge(name, cpf)       

        return calculate
    }
}