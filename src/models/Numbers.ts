export default class Numbers {
  public average(numbers: number[]): number {
    const qtdNums = numbers.length

    const totalSum = this.sum(numbers)

    const average = (totalSum / qtdNums).toFixed(5)

    return Number(average)
  }

  private sum(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0)
  }
}