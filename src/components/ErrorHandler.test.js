import React from 'react';
import ReactDOM from 'react-dom';
import ErrorHandler from './ErrorHandler';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {Jumbotron} from 'react-bootstrap';


it('Should render without crashing', () => {
    shallow(<ErrorHandler/>);
});

it('Should render component', () => {
    let wrapper = shallow(<ErrorHandler/>);
    expect(wrapper.find(Jumbotron).exists()).to.be.true;
});