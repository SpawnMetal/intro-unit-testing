const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () =>
{
    const _ = new Lodash()
    let array = [false, 42, 0, '', true, null, 'hello'] // Тест кейсы должны быть чистыми функциями, которые не взаимодействуют с глобальной областью, т. к. некоторые тесты могут изменять содержимое проверяемых значений. Но если это сделано, то переменные должны заново переопределяться, например в beforeEach

    beforeEach(() => // Срабатывает перед каждым тестом
    {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    afterAll(() =>
    {
        _ = new Lodash()
    })

    test('Should be defined', () =>
    {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined() // Не обязательно, просто как пример
    })

    test('Should working array be editable', () => //Например здесь array меняется, поэтому важно переопределять его в beforeEach
    {
        array.push(...['one', 'two'])

        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('Should remove falsy from array', () =>
    {
        const result = [42, true, 'hello']

        // expect(_.compact(array)).toBe(result) // Будет ошибка, т. к. toBe предназначен для простых типов
        expect(_.compact(array)).toEqual(result)
    })

    test('Should NOT contail falsy values', () =>
    {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })
})

describe('Lodash groupBy', () =>
{
    test('Should be defined', () =>
    {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined() // Не обязательно, просто как пример
    })

    test('Should group array items by Math.floor', () =>
    {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result =
        {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('Should group array items by length', () =>
    {
        const array = ['one', 'two', 'three']
        const result =
        {
            5: ['three'],
            3: ['one', 'two']
        }

        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('Should NOT return array', () =>
    {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})