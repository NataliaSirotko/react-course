import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardHeader from './index';

configure({adapter: new Adapter()});

describe('<CardHeader />', () => {
    let wrapper;
    let mockHandler = jest.fn();
    let props = {
        edit: true,
        handler: mockHandler
    };
    beforeEach(() => {
        wrapper = shallow(<CardHeader {...props} />);
    });

    it('should contain elem', () => {
        wrapper.setProps({edit: false});
        expect(wrapper.find('span')).toHaveLength(1);
    });

    it('should contain elem', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should simulate onChange handler', () => {
        wrapper.find('input').simulate('change');
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    it('should contain textContent', () => {
        wrapper.setProps({edit: false, caption: 'kk'});
        expect(wrapper.find('span').text()).toEqual('kk');
    });
});
