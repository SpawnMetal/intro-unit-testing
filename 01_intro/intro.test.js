const {sum, nativeNull} = require('./intro')

describe('Sum function', () => // Объединяет тест кейсы
{
    test('Should return sum of two values', () =>
    {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    })

    test('Should return value correctly comparing to other values', () =>
    {
        expect(sum(2, 3)).toBeGreaterThan(4) // Больше
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5) // Больше или равен
        expect(sum(2, 3)).toBeLessThan(10) // Меньше
        expect(sum(2, 3)).toBeLessThanOrEqual(5) // Меньше или равен
    })

    test('Should sum 2 float values correctly', () =>
    {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3) // Близок
    })
})

describe('Native null function', () =>
{
    test('Should return false value null', () =>
    {
        expect(nativeNull()).toBe(null) // Не null
        expect(nativeNull()).toBeNull() // Не null
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, '' (значения, не проходящие в if)
        expect(nativeNull()).toBeDefined() // Не falsy
        expect(nativeNull()).not.toBeTruthy() // Не истинные
        expect(nativeNull()).not.toBeUndefined() // Не undefined
    })
})