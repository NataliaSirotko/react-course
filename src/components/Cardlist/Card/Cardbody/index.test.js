import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import CardBody from './index';

configure({adapter: new Adapter()});

describe('<CardBody />', () => {

    let wrapper;
    let mockHandler = jest.fn();
    let props = {
        text: 'pp',
        edit: true,
        handler: mockHandler
    }
    beforeEach(() => {
        wrapper = shallow(<CardBody {...props} />);
    });

    it('should contain element', () => {
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should contain element', () => {
        wrapper.setProps({edit: false});
        expect(wrapper.find('p')).toHaveLength(1);
    });
    it('should simulate onChange handler', () => {
        wrapper.find('textarea').simulate('change');
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
});
