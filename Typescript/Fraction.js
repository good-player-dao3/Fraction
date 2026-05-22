/**
 * 分数系统
 */
export class Fraction {
    numerator;
    denominator;
    /**
     * @param numerator 分子
     * @param denominator 分母
     * @param isReduce 是否约分，默认为true
     */
    constructor(numerator, denominator, isReduce = true) {
        this.numerator = numerator;
        this.denominator = denominator;
        if (denominator == 0)
            throw new Error('Denominator cannot be zero');
        if (isReduce)
            this.reduce();
    }
    gcd(a, b) {
        //console.log(`Calculating gcd of ${a} and ${b}`)
        if (b == 0) {
            return a;
        }
        else
            return this.gcd(b, a % b);
    }
    /**
     * 约分
     */
    reduce() {
        const gcd = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
        this.numerator /= gcd;
        this.denominator /= gcd;
    }
    /**
     * 加法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    add(other) {
        if (typeof other === 'number')
            other = new Fraction(other, 1);
        const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }
    /**
     * 减法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    sub(other) {
        if (typeof other === 'number')
            other = new Fraction(other, 1);
        const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }
    /**
     * 乘法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    div(other) {
        if (typeof other === 'number')
            other = new Fraction(other, 1);
        const newNumerator = this.numerator * other.denominator;
        const newDenominator = this.denominator * other.numerator;
        return new Fraction(newNumerator, newDenominator);
    }
    /**
     * 除法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    mul(other) {
        if (typeof other === 'number')
            other = new Fraction(other, 1);
        const newNumerator = this.numerator * other.numerator;
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }
    /**
     * 幂
     * @param {number} exponent - 指数
     * @returns @type {Fraction}
     */
    square(exponent) {
        if (exponent % 1 !== 0)
            throw new Error("Exponent must be an integer.");
        return new Fraction(this.numerator ** exponent, this.denominator ** exponent);
    }
    /**
     * 求根
     * @param {number} root - 根的次数
     * @returns @type {Fraction}
     */
    root(root) {
        if (root % 1 !== 0) {
            throw new Error("Exponent must be an integer.");
        }
        return new Fraction(Math.floor(this.toNumber() ** (1 / root) * 10000), 10000);
    }
    /**
     * 求余
     * @param other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    mod(other) {
        if (typeof other === 'number')
            other = new Fraction(other, 1);
        const newNumerator = (this.numerator * other.denominator) % (other.numerator * this.denominator);
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }
    toNumber() {
        return this.numerator / this.denominator;
    }
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}
// console.log(new Fraction(1, 2).add(3).toString()) // "5/6"
// console.log(new Fraction(1, 2).sub(new Fraction(1, 3)).toString()) // "1/6"
// console.log(new Fraction(1, 2).mul(new Fraction(1, 3)).toString()) // "1/6"
// console.log(new Fraction(1, 2).div(new Fraction(1, 3)).toString()) // "3/2"
// console.log(new Fraction(1, 2).square(2).toString()) // "1/4"
// console.log(new Fraction(2,1).root(2).toString()) // "1/2"
