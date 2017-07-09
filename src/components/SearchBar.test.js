import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Content from '../Content.json';
import sinon from 'sinon';

it('Should render without crashing', () => {
    shallow(<SearchBar/>);
});
