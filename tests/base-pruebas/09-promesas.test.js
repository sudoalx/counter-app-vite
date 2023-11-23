import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Prueba en 09-promesas', () => {
    // En Jest se puede usar el argumento "done" (como convencion) para las funciones async
    test('should return a hero', (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done() // Espera hasta que termine de ejecutar el then
            })
    })
    test('should return an error if hero does not exist', (done) => {
        const id = 100
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy()
                done()
            })
            .catch(error => {
                expect(error).toBe(`No se puedo encontrar el hero con ID: ${id}`)
                console.log(error);
                done()
            })
    })
})