import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import App, { Title } from './App'

configure({
  adapter: new Adapter()
})

describe('APP component test', () => {
  
  test('APP test ', () => {
      const wrapper = shallow(<App />)
      
      console.log(wrapper.html());

      // expect(wrapper.html()).toBe("<div><h1>Introduccion a Unit Testing</h1></div>")
      // expect(wrapper.find('h1').html()).toBe("<h1>Introduccion a Unit Testing</h1>")
      // expect(wrapper.find('h1')).toHaveLength(1)
  })


  test('APP test select node', () => {
    const wrapper = shallow(<App />)

    // html() only work just with one node
    // length when is more than two nodes
    // e.g wrapper.find('div ~ p').lenght()

   // console.log(wrapper.find('h1))
   // console.log(wrapper.find('div ~ p).length)
   // console.log(wrapper.find('[type="checkbox"]).html())
   // console.log(wrapper.find(Title).html())
})


});
