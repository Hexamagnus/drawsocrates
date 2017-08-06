import React, { Component } from 'react';
import { render } from 'react-dom';
import MindMap from 'react-mindmap';
import { nodes, connections } from './my-map.json';

class Example extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    
    );
  }
}

render(
  <Example nodes={nodes} connections={connections} />,
  document.getElementById('target')
);