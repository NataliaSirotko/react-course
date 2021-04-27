import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardBody from './index';

configure({adapter: new Adapter()});

describe('<CardBody />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardBody text='pp' />);
    });

    it('should contain element', () => {
        wrapper.setProps({edit: true});
        expect(wrapper.find('textarea')).toHaveLength(1);
    });
    it('should contain element', () => {
        //wrapper.setProps({edit: false});
        //expect(wrapper.contains(<p>pp</p>)).toEqual(true);
        expect(wrapper.find('p')).toHaveLength(1);
    });
});
