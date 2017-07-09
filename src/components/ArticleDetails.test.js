import React from 'react';
import ReactDOM from 'react-dom';
import ArticleDetails from './ArticleDetails';
import {shallow, mount} from 'enzyme';

it('Should render without crashing', () => {
    shallow(<ArticleDetails/>);
});
