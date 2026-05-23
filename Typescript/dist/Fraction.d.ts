/**
 * 分数系统
 */
export declare class Fraction {
    numerator: number;
    denominator: number;
    /**
     * 根的精度，默认为10000，即小数点后4位
     */
    static root_precision: number;
    /**
     * @param numerator 分子
     * @param denominator 分母
     * @param isReduce 是否约分，默认为true
     */
    constructor(numerator: number, denominator: number, isReduce?: boolean);
    private gcd;
    /**
     * 约分
     */
    reduce(): void;
    /**
     * 加法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    add(other: Fraction | number): Fraction;
    /**
     * 减法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    sub(other: Fraction | number): Fraction;
    /**
     * 乘法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    div(other: Fraction | number): Fraction;
    /**
     * 除法
     * @param {Fraction} other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    mul(other: Fraction | number): Fraction;
    /**
     * 幂
     * @param {number} exponent - 指数
     * @returns @type {Fraction}
     */
    pow(exponent: number): Fraction;
    /**
     * 求根
     * @param {number} root - 根的次数
     * @returns @type {Fraction}
     */
    root(root: number): Fraction;
    /**
     * 求余
     * @param other - 另一个分数/数字
     * @returns @type {Fraction}
     */
    mod(other: Fraction | number): Fraction;
    toNumber(): number;
    toString(): string;
}
