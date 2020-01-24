import { saluda, getId, despide } from './strings' 

describe('Strings test', () => {

  const saludo = saluda('Gerardo');
  const id = getId();
  //const saludoDespide = despide();
  
  test('say hello function test ', () => {
    expect(saludo).toMatch('Hola soy');
  })

  test('function getId test ', () => {
    expect(id).toMatch(/\d{2}-\d{3}/);
  })

  test('function despide test ', () => {
    //expect(saludoDespide).not.toMatch('Bye')
  })
  
  
  
});
