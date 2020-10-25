import React from 'react';
import Component from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Andrew Nijmeh",
      headerLinks: [
        { title: 'Home', path: '/home'},
        { title: 'About Me', path: '/about'},
        { title: 'Contact', path: '/contact' },
        { title: 'Projects', path:'/projects' }
      ],
      home: {
        title: "Andrew Nijmeh"
      }
    }
  }

  return() {
    return (
      <div>Hello</div>
    );
  }
}

export default App;
