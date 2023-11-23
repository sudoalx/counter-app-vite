import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses', () => {
    test('usContext debe retornar un objeto con nombreClave igual a Iron Man y anios igual a 35', () => {
        const person = {
            name: 'Tony Stark',
            age: 35,
            codename: 'Iron Man'
        }
        const context = usContext({ clave: person.codename, edad: person.age })
        expect(context).toEqual({
            nombreClave: person.codename,
            anios: person.age,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})