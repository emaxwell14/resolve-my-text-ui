import React from 'react';
import ReactDOM from 'react-dom';
import ConverterContainer from './components/ConverterContainer';
import ConverterProvider from './context/ConverterProvider';

ReactDOM.render(
  <ConverterProvider>
    <ConverterContainer />
  </ConverterProvider>,
  document.getElementById('index')
);
