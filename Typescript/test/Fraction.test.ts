import { describe,expect,it } from '@jest/globals'
import { Fraction } from '../src/Fraction'

describe("Fraction 基本功能",() =>
{
    it("1/2 + 1/2 应该等于 1",() =>
    {
        const a = new Fraction(1,2)
        const b = new Fraction(1,2)
        expect(a.add(b).toNumber()).toBe(1)
    })

    it("1/2 * 2 应该等于 1",() =>
    {
        const a = new Fraction(1,2)
        const b = new Fraction(2,1)
        expect(a.mul(b).toNumber()).toBe(1)
    })

    it("0.5 * 0.25 应该等于 0.125",() =>
    {
        const a = Fraction.fromNumber(0.5)
        const b = 0.25
        expect(a.mul(b).toNumber()).toBe(0.125)
    })
})
