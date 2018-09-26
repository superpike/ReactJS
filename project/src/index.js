import React from 'react';
import ReactDOM from 'react-dom';
let authorModule =  require('./moduleAuthor');

let author1 = new authorModule.Author("Igor Paklin");

ReactDOM.render(author1.render(), document.getElementById('copyright'));
