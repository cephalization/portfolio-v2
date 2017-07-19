// Import Components
import React from 'react';
import {Grid} from 'semantic-ui-react';
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
   * 
   * @returns {Element} JSX element containing all of the rendered content sections
   */
  contentGrid(rowContent) {

    /**
     * Setup rows of content rendered by the elements in rowContent
     * 
     * @returns {Array} pre-rendered Grids of content sections
     */
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

  // Render all of the 'Elements' or 'Sections' of the page
  render() {
    const sections = [
      IntroElement
    ]

    return (
      <div>
        {this.contentGrid(sections)}
      </div>
    )
  }
}

export default MainComponent;
