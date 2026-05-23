/**
 * 分数系统
 */
export class Fraction
{
    /**
     * 根的精度，默认为10000，即小数点后4位
     */
    static root_precision = 10000
    /**
     * @param numerator 分子
     * @param denominator 分母
     * @param isReduce 是否约分，默认为true
     */
    constructor(public numerator: number, public denominator: number ,isReduce: boolean = true)
    {
        if(denominator == 0) 
            throw new Error('Denominator cannot be zero');
        if(isReduce)
            this.reduce()
    }

    private gcd(a: number, b: number): number
    {
        //console.log(`Calculating gcd of ${a} and ${b}`)
        if(b == 0)
        {
            return a
        }
        else
            return this.gcd(b,a%b)
    }

    /**
     * 约分
     */
    reduce()
    {
        const gcd = this.gcd(Math.abs(this.numerator),Math.abs(this.denominator))
        this.numerator /= gcd
        this.denominator /= gcd
    }

    /**
     * 加法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    add(other: Fraction|number): Fraction
    {
        if(typeof other === 'number')
            other = new Fraction(other,1)
        const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    /**
     * 减法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    sub(other: Fraction|number): Fraction
    {
        if(typeof other === 'number')
            other = new Fraction(other,1)
        const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    /**
     * 乘法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    div(other: Fraction|number): Fraction
    {
        if(typeof other === 'number')
            other = new Fraction(other,1)
        const newNumerator = this.numerator * other.denominator
        const newDenominator = this.denominator * other.numerator
        return new Fraction(newNumerator, newDenominator)
    }

    /**
     * 除法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    mul(other: Fraction|number): Fraction
    {
        if(typeof other === 'number')
            other = new Fraction(other,1)
        const newNumerator = this.numerator * other.numerator
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    /**
     * 幂
     * @param {number} exponent - 指数
     * @returns @type {Fraction}
     */

    pow(exponent:number): Fraction
    {
        if(exponent%1 !== 0)
            throw new Error("Exponent must be an integer.")
        return new Fraction(this.numerator**exponent, this.denominator**exponent)
    }

    /**
     * 求根
     * @param {number} root - 根的次数
     * @returns @type {Fraction}
     */
    root(root:number): Fraction
    {
        if(root%1 !== 0)
        {
            throw new Error("Exponent must be an integer.")
        }
        return new Fraction(Math.floor(this.toNumber()**(1/root)*Fraction.root_precision),Fraction.root_precision)
    }

    /**
     * 求余
     * @param other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    mod(other: Fraction|number): Fraction
    {
        if(typeof other === 'number')
            other = new Fraction(other,1)
        const newNumerator = (this.numerator * other.denominator) % (other.numerator * this.denominator)
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    toNumber(): number
    {
        return this.numerator / this.denominator
    }

    toString():string
    {
        return `${this.numerator}/${this.denominator}`
    }
}