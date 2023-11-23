import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uuid: 'ABC123',
            username: 'sudoalex'
        }
        const user = getUser();

        expect(testUser).toStrictEqual(user)
    })
    test('getUsuarioActivo debe retornar un objeto', () => {
        const username = "sudoalex"
        const activeUser = getUsuarioActivo(username)
        expect(activeUser.username).toBe(username)
    })
})