import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('should return the url of a GIF', async () => {
        const url = await getImagen()
        expect(typeof url).toBe('string')
    })
})