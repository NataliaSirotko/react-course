import React, { useState } from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './index';
import CardHeader from './Cardheader';
import { IoIosSave } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import Aux from '../../../hoc/Auxiliary';

configure({adapter: new Adapter()});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
   useSelector: jest.fn(),
   useDispatch: () => mockDispatch
}));

const mockSetState = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn()
    })
}));

describe('<Card />', () => {
    let wrapper;
    let props = {
        data: {
            edited: true,
            checked: false
        }
    };
    const mockAppState = jest.fn();

    beforeEach(() => {
        const mockedDispatch = jest.fn();
        useSelector.mockImplementation(callback => callback(mockAppState));
        mockDispatch.mockReturnValue(mockedDispatch);
        //useDispatch.mockReturnValue(mockedDispatch);
        wrapper = shallow(<Card {...props} />);
        //wrapper.classList.add('card');
        useState.mockImplementation(initial => [initial, mockSetState]);
    });

    it('renders', () => {
        expect(mockSetState).toHaveBeenCalledTimes(1);
    });

    it('should render', () => {
        //expect(wrapper.find(CardHeader)).toHaveLength(1);
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
                edited: true,
                checked: false
            }
        };
        //wrapper.setProps({edited: true});
        expect(wrapper.find(IoIosSave)).toHaveLength(1);
    });

    afterEach(() => {
        useSelector.mockClear();
    });
});
