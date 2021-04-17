const {map} = require('./mock')

describe('Map function', () =>
{
    let array
    let fn

    beforeEach(() =>
    {
        array = [1, 2, 3, 5]
        fn = jest.fn(x => x ** 2) // Создадим псевдо функцию с помощью jest, callback с функционалом jest
        map(array, fn)
    })

    test('Should call callback', () =>
    {
        expect(fn).toBeCalled()
    })

    test('Should call callback 4 times', () =>
    {
        expect(fn).toBeCalledTimes(4) // Сколько раз функция должна была вызываться
        expect(fn.mock.calls.length).toBe(4) // То же самое
    })

    test('Should pow 2 each element', () =>
    {
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)
    })

    test('Should fn work', () =>
    {
        fn
        .mockReturnValueOnce(100) // При первом вызове должна вернуть 100
        .mockReturnValueOnce(200) // При втором 200
        .mockReturnValue('42') // При остальных вызовах

        // Сами вызовы, результат которых должен быть равен описанному выше
        expect(fn()).toBe(100)
        expect(fn()).toEqual(200)
        expect(fn()).toEqual('42')
        expect(fn()).toEqual('42')
    })
})