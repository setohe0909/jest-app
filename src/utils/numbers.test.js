import { suma, resta, division, multiplicacion, getRandomNum } from './numbers';

describe('match function test', () => {
  
  test('suma test ', () => {
    expect(suma(5,5)).toBe(10)
  })

  test('resta test ', () => {
    expect(resta(5, 5)).toBe(0)
  })

  test('multiplicacion test ', () => {
    expect(multiplicacion(5, 5)).toBe(25)
  })

  test('division test ', () => {
    expect(division(5, 5)).toBe(1)
  })

  test('getRandomNum test ', () => {
    expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5)
    expect(getRandomNum(5, 10)).toBeLessThanOrEqual(10)
  })
  
  
  
});
