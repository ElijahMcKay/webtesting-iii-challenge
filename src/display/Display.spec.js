
import React from 'react';
// Test away
//import react-test-renderer as --dev dependency and then import...
import renderer from 'react-test-renderer'; 
import { render } from '@testing-library/react'; //import this for access to "render", instead of "render.create" for snapshots
import Display from './Display'; //importing component we're testing

describe('<Display />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Display />).toJSON(); 

        expect(tree).toMatchSnapshot(); //asserting that the component matches the latest snapshot
    })
    
})