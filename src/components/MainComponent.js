// Import Components
import React from 'react';
import {Grid, Message} from 'semantic-ui-react';
// Import Elements
import IntroElement from '../elements/IntroElement';
import JobsElement from '../elements/JobsElement';
import ProjectsElement from '../elements/ProjectsElement';

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
      return (
      <Grid container columns={16} >
        {
          [
            <Grid.Row key={0} centered>
              <Message warning>
                <Message.Header>This Page is a Work in Progress!</Message.Header>
                <p>I am in the process of re-writing my portfolio in React.</p>
                <p>Follow its development <a href="https://github.com/cephalization/portfolio-v2">here</a></p>
              </Message>
            </Grid.Row>
          ]
          .concat(
            rowContent.map(
              (row, i) => (
                <Grid.Row key={i + 1} stretched>
                  {row()}
                </Grid.Row>
              )
            )
          )
        }
      </Grid>)
  }

  // Render all of the 'Elements' or 'Sections' of the page
  render() {
    const sections = [
      IntroElement,
      JobsElement,
      ProjectsElement
    ]

    return (
      <div>        
        {this.contentGrid(sections)}
      </div>
    )
  }
}

export default MainComponent;
