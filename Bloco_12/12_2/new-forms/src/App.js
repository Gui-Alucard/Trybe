import React from 'react';
import Forms from './components/Forms';
import FormsResult from './components/FormsResults';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Forms />
        <FormsResult />
      </div>
    );
  }
}

export default App;
