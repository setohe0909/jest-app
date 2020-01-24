const getValue = (exp) => {
  switch (exp) {
    case 'definido':
      return {};
    case 'indefinido':
      return undefined;
    case 'verdadero':
      return true;
    case 'falso':
      return false;
    default:
      return null
  }
}

describe('undefined, bool, null test', () => {
  
  test('Validate exist the value or is defined ', () => {
    expect(getValue('definido')).toBeDefined()
  })

  test('Validate is null ', () => {
    expect(getValue()).toBeNull()
  })
  
  test('Validate is true ', () => {
    expect(getValue('verdadero')).toBeTruthy()
  })

  test('Validate is false ', () => {
    expect(getValue('falso')).toBeFalsy()
  })

  test('Validate is NaN ', () => {
    expect(NaN).toBeNaN()
  })

});
