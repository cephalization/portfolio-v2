// Import Components
import React from 'react';
import {Card, Image, List, Icon} from 'semantic-ui-react';
// Import Assets
import valet_1 from '../images/Valet-login.png';

/**
 * Object representation of a Project
 * 
 * @param {Image} image header image to show off project
 * @param {String} title project title to display
 * @param {Element} description project description to display
 * @param {String} link link to project location
 * @param {String} github link to project's GitHub location
 * 
 * @returns {Object} Project with properties representing information about it
 */
const DefineProject = (image, title, description, link, github) => {
    const projectInfo = {
        image: image,
        title: title,
        description: description,
        link: link,
        github: github
    }

    return projectInfo;
}

/**
 * Statically defined array of project objects
 * 
 * @returns {Array} Project objects
 */
const ProjectDescriptions = () => {
    const projects = [
        DefineProject(
            null,
            'Spotlight: Meta Music Tool',
            <div>
                <h4>
                    Spotlight is a React app that will allow
                    users to keep track of, and view meta information
                    on, their favorite music artists.
                </h4>
                <p>
                    This project is in development but demonstrates sane
                    architecure, modern development practices, and 'clean'
                    design philosphies.
                </p>
                <List>
                    <List.Item>
                        <List.Header>Built Using:</List.Header>
                        <List>
                            <List.Item>React.js</List.Item>
                            <List.Item>Semantic UI React</List.Item>
                            <List.Item>CENTOS Digital Ocean Droplet</List.Item>
                            <List.Item>Node w/ Express</List.Item>
                        </List>
                    </List.Item>
                    
                </List>
            </div>,
            'https://spotlight.now.sh/',
            'https://github.com/cephalization/spotlight/'
        ),
        DefineProject(
            null,
            'Kijenzi 3D Printing Tools',
            <div>
                <h4>
                    Volunteered with a research group of PHDs and
                    students to make 3D printing accessible to
                    developing regions (targeting Africa).
                </h4>
                <p>
                    Responsible for designing, developing, and
                    hosting a react application to allow a user
                    to create dynamic forms for downloadable and
                    parameterizable 3D printable componenents.
                </p>
                <p>
                    Forms, their components, and file meta
                    information are posted to a Node/Express/Firebase
                    REST API with endpoint design and documentation
                    led by myself and implemented with cross-country
                    team collaboration. Information was further
                    consumed by an android app built by another team.
                </p>
                <List>
                    <List.Item>
                        <List.Header>Built Using:</List.Header>
                        <List>
                            <List.Item>React.js</List.Item>
                            <List.Item>Semantic UI React</List.Item>
                            <List.Item>Node w/ Express</List.Item>
                            <List.Item>Firebase</List.Item>
                        </List>
                    </List.Item>
                    
                </List>
            </div>,
            null,
            null
        ),
        DefineProject(
            valet_1,
            'Valet',
            <div>
                <h4>
                    Retrieve a list of your Spotify playlists and cast their
                    music videos (from YouTube) to your chromecast enabled devices.
                </h4>
                <List>
                    <List.Item>
                        <List.Header>Built Using:</List.Header>
                        <List>
                            <List.Item>AngularJS 1.x</List.Item>
                            <List.Item>Bootstrap</List.Item>
                            <List.Item>HTML / CSS</List.Item>
                            <List.Item>Spotify REST API</List.Item>
                            <List.Item>YouTube REST API</List.Item>
                        </List>
                    </List.Item>
                    
                </List>
            </div>,
            'http://anthonypowell.me/valet/',
            'https://github.com/cephalization/valet/'
        )
    ];

    return projects;
}

/**
 * Render a card that displays project information
 * 
 * @returns {Element} card containing project details
 */
const DrawProject = (projectInfo, key) => {
    const project = (
        <Card key={key} link>
            <Image src={projectInfo.image} />
            <Card.Content>
                <Card.Header>{projectInfo.title}</Card.Header>
                <Card.Description>{projectInfo.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={projectInfo.link}><Icon disabled={projectInfo.link == null} name='globe' link size={'large'} /></a>
                <a href={projectInfo.github}><Icon disabled={projectInfo.link == null} name='github' link size={'large'} /></a>
            </Card.Content>
        </Card>
    );

    return project;
}

/**
 * Build Card elements from Project objects and return them as an array
 * 
 * @returns {Array} Items containing job information
 */
const LoadProjects = () => {
  const projectData = [],
    projects = ProjectDescriptions();

  for (let project in projects) {
    if (projects.hasOwnProperty(project)) projectData.push(DrawProject(projects[project], project));
  }

  return projectData;
};

/**
 * Create a Card containing information about my Projects.
 * 
 * @returns {Element} Card containing projects
 */
const ProjectsElement = () => (
    <Card fluid>
        <Card.Content header='Projects'/>
        <Card.Content>
            <Card.Group itemsPerRow={3} stackable>
                {LoadProjects()}
            </Card.Group>
        </Card.Content>
    </Card>
);

export default ProjectsElement;
