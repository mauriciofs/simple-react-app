import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './Articles';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Content from '../Content.json';
import sinon from 'sinon';

it('Should render without crashing', () => {
  shallow(<Articles/>);
});

it('Should render Articles', () => {
  let wrapper = shallow(<Articles articles={Content.response.results.result}/>);
  expect(wrapper.find(Col).exists()).to.be.true;
  expect(wrapper.find(FormGroup).exists()).to.be.true;
  expect(wrapper.find(ControlLabel).exists()).to.be.true;
  expect(wrapper.find(FormControl).exists()).to.be.true;
});

it('Simulates change event', () => {
  let callback = sinon.spy();
  let wrapper = shallow(<Articles articles={Content.response.results.result} onChange={callback}/>);
  wrapper.find(FormControl).simulate('change', {target: {value: 'Display Title'}});
  expect(callback.calledOnce).to.be.true;
});