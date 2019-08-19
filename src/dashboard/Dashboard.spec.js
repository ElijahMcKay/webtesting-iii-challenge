import React from 'react';
// Test away
//import react-test-renderer as --dev dependency and then import...
import renderer from 'react-test-renderer'; 

import Dashboard from './Dashboard'; //importing component we are testing

describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON(); 

        expect(tree).toMatchSnapshot(); 
    })
})



