import React from "react";
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './index';
import CardHeader from './Cardheader';
import { IoIosSave } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import * as redux from 'react-redux';

configure({adapter: new Adapter()});

// jest
//     .spyOn(redux, 'useSelector')
//     .mockReturnValueOnce('first call');

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

let setState = jest.fn();
let mockSelector = jest.spyOn(redux, 'useSelector');

describe('<Card />', () => {

    let wrapper;
    let props = {
        data: {
            edited: false
        }
    };

    beforeEach(() => {
        wrapper = shallow(<Card {...props} />);
        const user = {
            id: 1,
            name: 'User',
          };

        const state = { user };

        const useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementation(init => [init, setState]);

        // const mockedDispatch = jest.fn();
    // useDispatch.mockReturnValue(mockedDispatch);
        mockSelector.mockImplementation((selectorFn) => selectorFn(state));

    });

    it('should', () => {
        expect(setState).toHaveBeenCalledTimes(1);
    });

    it('loads data on init', () => {
        expect(mockSelector).toHaveBeenCalledTimes(1);
    });

    it('loads data on init', () => {
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it('should render <CardHeader /> element', () => {
        expect(wrapper.find(CardHeader)).toHaveLength(1);
    });

    it('should render <AiOutlineEdit /> element if edited is false', () => {
        expect(wrapper.find(AiOutlineEdit)).toHaveLength(1);
    });

    it('should render <IoIosSave /> element if edited', () => {
        props = {
            data: {
                edited: true
            }
        };
        //wrapper.setProps({edited: true});
        expect(wrapper.find(IoIosSave)).toHaveLength(1);
    });

});
