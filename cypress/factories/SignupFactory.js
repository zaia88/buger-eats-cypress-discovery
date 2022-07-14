var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`, //criar nome fake
            cpf: cpf.generate(),
            email: faker.internet.email(firstName), //criar email fake
            whatsapp: '44999999999',
            address: {
                postalcode: '87202132',
                street: 'Rua Leonardo Augusto Moreira Bergamasco',
                number: '777',
                details: 'Casa',
                district: 'Jardim Botânico',
                city_state: 'Cianorte/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}