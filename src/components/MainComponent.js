// Import Components
import React from 'react';
import {Grid, Message} from 'semantic-ui-react';
// Import Elements
import IntroElement from '../elements/IntroElement';
import JobsElement from '../elements/JobsElement';
import ProjectsElement from '../elements/ProjectsElement';

/**
 * Create a vertically divided grid for all of the main content components
 * @param {Array} rowContent Contains elements that render portfolio content sections
 * 
 * @returns {Element} JSX element containing all of the rendered content sections
 */
const ContentGrid = ({ children }) => (
  /**
   * Setup rows of content rendered by the elements in rowContent
   * 
   * @returns {Element} pre-rendered Grids of content sections
   */
  <Grid container columns={16} >
    {children.map(
      (row, i) => (
        <Grid.Row key={i + 1} stretched>
          {row}
        </Grid.Row>
      )
    )}
  </Grid>
);

class MainComponent extends React.Component {
  // Render all of the 'Elements' or 'Sections' of the page
  render = () => (
    <ContentGrid>
      <IntroElement />
      <JobsElement />
      <ProjectsElement />
    </ContentGrid>
  );
}

export default MainComponent;
