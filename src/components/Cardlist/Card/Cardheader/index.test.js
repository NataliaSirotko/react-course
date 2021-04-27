import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardHeader from './index';

configure({adapter: new Adapter()});

describe('<CardHeader />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardHeader />);
    });

    it('should contain elem', () => {
       expect(wrapper.find('span')).toHaveLength(1);
    });

    it('should contain elem', () => {
        wrapper.setProps({edit: true});
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should contain textContent', () => {
        wrapper.setProps({caption: 'kk'});
        expect(wrapper.find('span').text()).toEqual('kk');
    });
});
