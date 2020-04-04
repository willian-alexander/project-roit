import cpfTreat from '../src/utils/cpfTreat'
import calculateIbge from '../src/utils/calculateIbge'

describe('Treat Cpf', () => {

  it('get the last two numbers from the cpf', async () => {
    const cpf = "02241556106"
    const result = await cpfTreat(cpf)

    expect(result).toHaveLength(2);
  })
})

describe('Ibge calculation', () => {

  it('Calculate the last two numbers of the cpf with the ibge code', async () => {
    const codIbge = 530010805
    const lastNumberCpf = "06"
    const result = calculateIbge(codIbge, lastNumberCpf)

    expect(result).toBe(3180064830);
  })
})