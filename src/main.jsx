import ReactDom from 'react-dom';
import React from 'react';
import Loaders from './Loaders.jsx';

document.body.style.background = "#ed5565";
ReactDom.render(<Loaders color="#F5F5F5"/>,document.getElementById('app'))