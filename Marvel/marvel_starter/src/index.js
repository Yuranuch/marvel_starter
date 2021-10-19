import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';
import MarvelService from "./services/MarvelService";

const marvelService =new MarvelService;
marvelService.getAllCharacters().then(res=> console.log(1, res))
// marvelService.getCharacter('1010903').then(res=> console.log(res.data.results[0].name))


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

