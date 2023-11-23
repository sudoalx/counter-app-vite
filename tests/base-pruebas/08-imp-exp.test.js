import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {
    /*
        Pruebas unitarias: pruebas a getHeroeById
        1. Debe de retornar un objeto del heroe con el id enviado
        2. Debe de retornar undefined si el heroe no existe
    */
    test('should return a hero by ID', () => {
        const id = 1
        const hero = getHeroeById(id)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })
    test('should return undefined if the ID does not exist', () => {
        const id = 200
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()
    })

    /* 
        Tarea: getHeroesByOwner
        1. Debe de retornar un arreglo con los heroes de DC con length = 3
        2. Debe de retornar un arreglo con los heroes de Marvel con length = 2
    */
    // DC
    test('should return heroes by owner: 3 de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
    // Marvel
    test('should return heroes by owner: 2 de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
})