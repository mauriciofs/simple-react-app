import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {PageHeader} from 'react-bootstrap';

it('Should render without crashing', () => {
  shallow(<App/>);
});

it('Should render <App/>', () => {
    let wrapper = shallow(<App/>);
    expect(wrapper.find(PageHeader).exists()).to.be.true;
})