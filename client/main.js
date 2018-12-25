import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return <div>Hullo World</div>;
  }
}

const mainContainer = document.getElementById('main');
ReactDOM.render(<App />, mainContainer);
