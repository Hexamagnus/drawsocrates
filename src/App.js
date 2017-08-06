import React, { Component } from 'react';
import { render } from 'react-dom';
import MindMap from 'react-mindmap';
import { nodes, connections } from './my-map.json';

class Example extends Component {
  render() {
    return (
      <MindMap
        nodes={this.props.nodes}
        connections={this.props.connections}
        editable={true}
      />
    );
  }
}

render(
  <Example nodes={nodes} connections={connections} />,
  document.getElementById('target')
);