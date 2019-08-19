// Test away!
import React from 'react';
// Test away
//import react-test-renderer as --dev dependency and then import...
import renderer from 'react-test-renderer'; 
import render from 'react-testing-library'; 
import Controls from './Controls'; 

describe('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON(); 

        expect(tree).toMatchSnapshot(); 
    })
    it('displays defaults as unlocked and closed', () => {
        const tree = render(<Controls />); 
    })
})