# Fraction Tool 分数工具库

一个支持多种分数运算的 TypeScript/JavaScript 工具库，支持加、减、乘、除、幂、开方、取余等操作，自动约分，支持与整数混合运算，适合数学、教育等场景。

A simple TypeScript/JavaScript library for fraction operations: addition, subtraction, multiplication, division, exponentiation, root extraction, modulo, auto reduction, and mixed operations with integers.

---

## 特性 Features

- 支持分数的加、减、乘、除、幂、开方、取余
- 自动约分
- 支持与数字混合运算
- TypeScript 类型声明

---

## 安装 Installation

```bash
npm install fraction-tool
```

---

## 快速上手 Quick Start

```typescript
import { Fraction } from 'fraction-tool';

const a = new Fraction(1, 2); // 1/2
const b = new Fraction(1, 3); // 1/3

const sum = a.add(b); // 5/6
const diff = a.sub(b); // 1/6
const prod = a.mul(b); // 1/6
const quot = a.div(b); // 3/2
const pow = a.pow(2); // 1/4
const root = a.root(2); // sqrt(1/2)
const mod = a.mod(b); // 1/6

console.log(sum.toString()); // "5/6"
console.log(sum.toNumber()); // 0.8333...
```

---

## API 说明 API Reference


### 构造函数 Constructor  <span id="sym:fromNumber">#sym:fromNumber</span>

```typescript
new Fraction(numerator: number, denominator: number, isReduce: boolean = true) // #sym:fromNumber
```
- `numerator`：分子 Numerator
- `denominator`：分母 Denominator（不能为0, cannot be zero）
- `isReduce`：是否自动约分 Whether to reduce automatically (default: true)

### 静态方法 Static Method <span id="sym:fromNumber">#sym:fromNumber</span>

```typescript
Fraction.fromNumber(num: number, precision?: number): Fraction // #sym:fromNumber
```
- `num`：要转换的数字 The number to convert
- `precision`：转换精度（可选，默认10000）Precision (optional, default 10000)

### 方法 Methods

- `add(other: Fraction | number): Fraction` 加法 Addition
- `sub(other: Fraction | number): Fraction` 减法 Subtraction
- `mul(other: Fraction | number): Fraction` 乘法 Multiplication
- `div(other: Fraction | number): Fraction` 除法 Division
- `pow(exponent: number): Fraction` 幂 Exponentiation (exponent must be integer)
- `root(root: number): Fraction` 开方 Root extraction (root must be integer)
- `mod(other: Fraction | number): Fraction` 取余 Modulo
- `reduce(): void` 约分 Reduce fraction
- `toNumber(): number` 转为小数 Convert to number
- `toString(): string` 字符串表示 String representation

---

## 构建与测试 Build & Test

```bash
# 构建 Build
npm run build

# 测试 Test
npm run test
```

---

## github

[To Github](https://github.com/good-player-dao3/Fraction)

## 许可证 License

MIT
