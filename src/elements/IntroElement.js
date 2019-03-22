// Import Components
import React from 'react';
import {Grid, Card, Image, Icon} from 'semantic-ui-react';
// Import Assets
import portrait from '../images/me.png';

/**
 * Create a card holding my portrait, name, and job title
 * 
 * @returns {Element} JSX element Card containing information
 */
const DrawPortrait = () => (
    <Card fluid centered>
        <Image src={portrait} bordered />
        <Card.Content>
            <Card.Header>
                <h1>Anthony Powell</h1>
            </Card.Header>
            <Card.Description>
                <h4>Full Stack Software Developer</h4>
            </Card.Description>
            <Card.Meta>Ambyint</Card.Meta>
        </Card.Content>
    </Card>
)

/**
 * Create a descriptive Card containing some information
 * 
 * @returns {Element} JSX element Card
 */
const DrawDescription = () => {
    const desc = (
        <div>
            <h4>Hey, thanks for stopping by my portfolio!</h4>
            <p>My name is Anthony but most people call me Tony.</p>
            <p>
                While working on a Computer Science degree at Michigan Tech University,
                I have engaged in full time software engineering, multiple internships, and personal projects. 
            </p>
            <p>
                Most of my working time is spent with web technologies but I'm involved
                in a diverse set of tech disciplines.
            </p>
            <p>Feel free to reach out to me at any of the links below!</p>
        </div>
    );
    
    return (
        <Card fluid centered>
            <Card.Content header='About Me' />
            <Card.Content description={desc} />
        </Card>
    )
}

/**
 * Create a Card containing a Grid of links to relevant social media
 * 
 * @returns {Element} JSX element Card containing Grid
 */
const DrawLinks = () => {
    const desc = (
        <Grid columns={3} stretched divided>
            <Grid.Column textAlign={"center"}>
                <a href="https://github.com/cephalization/">
                    <Icon name="github" />
                    GitHub
                </a>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
                <a href="https://linkedin.com/in/anthony-powell-05788696">
                    <Icon name="linkedin" />
                    LinkedIn
                </a>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
                <a href="https://twitter.com/Cephalization">
                    <Icon name="twitter" />
                    Twitter
                </a>                
            </Grid.Column>
        </Grid>
    )

    return (
        <Card fluid centered>
            <Card.Content header='Links' />
            <Card.Content description={desc} />
        </Card>
    )
}

/**
 * Create a Grid containing Cards of descriptive information about me
 * 
 * @returns {Element} JSX element containing a Grid of cards
 */
const IntroElement = () => (
    <Grid stackable stretched>
        <Grid.Row stretched>
            <Grid.Column stretched mobile={16} tablet={6} computer={4}>
                <Card.Group>
                    {DrawPortrait()}                        
                </Card.Group>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={12}>
                <Card.Group stackable>
                    {DrawDescription()}
                    {DrawLinks()}
                </Card.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default IntroElement;
