import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Component
import List from './list';

configure({
  adapter: new Adapter()
})

describe('List test', () => {
  
  test('node validation ', () => {
    const fruits = [
      { name: 'manzana', id: 1 }, 
      { name: 'fresa', id: 2 },
      { name: 'mango', id: 3 },
      { name: 'naranja', id: 4 }
    ];

    const warpper = shallow(<List title="frutas" list={fruits} />)

    // validate if exist a node
    expect(warpper.find('h1').exists()).toBe(true)

    // validar class css
    expect(warpper.find('h1').hasClass('big')).toBe(true)

    // quantity validation
    expect(warpper.find('ul').children().length).toBe(fruits.length)

    // validate content text
    // expect(warpper.find('li').first())
    // expect(warpper.find('li').last())
    expect(warpper.find('ul').childAt(1).text()).toBe('fresa')

    // validate type/element
    expect(warpper.find('ul').childAt(1).type()).toBe('li')

    // HTML Validate
    expect(warpper.find('ul').childAt(1).html()).toBe('<li>fresa</li>')

  })

  test('updates in props ', () => {
    const fruits = [
      { name: 'manzana', id: 1 }, 
      { name: 'fresa', id: 2 },
      { name: 'mango', id: 3 },
      { name: 'naranja', id: 4 }
    ];

    const warpper = shallow(<List title="frutas" list={fruits} />)

    // validate lenght of elements
    expect(warpper.find('li').length).toBe(fruits.length)

    warpper.setProps( {
      // list: [
      //   {name: 'kiwi', id: 5}
      // ]
      title: 'Super Frutas'
    })

    expect(warpper.find('.big').text()).toBe('Super Frutas')

  })

  test('validate snapshot ', () => {
    const fruits = [
      { name: 'manzana', id: 1 }, 
      { name: 'fresa', id: 2 },
      { name: 'mango', id: 3 },
      { name: 'naranja', id: 4 }
    ];

    const warpper = shallow(<List title="frutas" list={fruits} />)

    expect(toJson(warpper)).toMatchSnapshot();
  })
  
  
});
