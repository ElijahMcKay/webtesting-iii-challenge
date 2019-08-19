// Test away!
import React from 'react';
// Test away
//import react-test-renderer as --dev dependency and then import...
import renderer from 'react-test-renderer'; 
import { render } from '@testing-library/react'; //import this for access to "render", instead of "render.create" for snapshots
import Controls from './Controls'; //importing component we're testing

describe('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON(); 

        expect(tree).toMatchSnapshot(); //asserting that the component matches the latest snapshot
    })
    it('button should lock when clicked', () => {
        const { getByText } = render(<Controls locked={ true } closed={ false }/>);
        expect(getByText(/lock gate/i));
        expect(getByText(/close gate/i));
      });
    
})