import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/common";
import cpfTreat from '../utils/cpfTreat';
import calculateIbge from "src/utils/calculateIbge";


@Injectable()
export default class IbgeService {

    constructor(
        private readonly http: HttpService,
    ) {}

    async findCities(): Promise<any> {     
        return await this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos`)
        .toPromise()
        .then(res => res.data)
    }

    async bringIbgeCode(name: string, cpf: string): Promise<any> {

        const findIbge = await this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos`).toPromise().then(res => res.data)
        let nameCity, codIbge, formIbge, calcIbge
        const result = []


        if (name != undefined && cpf != undefined) {
            const lastNumberCpf = cpfTreat(cpf)
            const idCodIbge = findIbge.map(cod => cod)
            
            for (let i = 10495; i < idCodIbge.length; i++) {
                const element = idCodIbge[i]
                nameCity = element.nome
                codIbge = element.id
                calcIbge = calculateIbge(codIbge, lastNumberCpf)
                
                formIbge = codIbge + ' ' + '*' + ' ' + lastNumberCpf

                result.push({ name, cpf, nameCity, codIbge, calcIbge, formIbge })
            }
        }                
        return result
    }
}