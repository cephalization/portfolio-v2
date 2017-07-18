// Import Components
import React from 'react';
import {Container, Grid} from 'semantic-ui-react';
// Import Elements
import IntroElement from '../elements/IntroElement';

class MainComponent extends React.Component {
  constructor() {
    super();
    this.contentGrid = this.contentGrid.bind(this);
  }

  /**
   * Create a vertically divided grid for all of the main content components
   * @param {Array} rowContent Contains elements that render portfolio content sections
   */
  contentGrid(rowContent) {

    // Setup rows of content rendered by the elements in rowContent
    let rows = () => {
      let content = [];
      for (let i = 0, len = rowContent.length; i < len; i++) {
        content.push(
          <Grid.Row key={i}>
            {rowContent[i]()}
          </Grid.Row>
        )
      }

      return content;
    }

    return (
      <Grid centered divided='vertically'>
        {rows()}
      </Grid>
    )
  }

  render() {
    return (
      <div>
        {this.contentGrid([IntroElement])}
      </div>
    )
  }
}

export default MainComponent;
