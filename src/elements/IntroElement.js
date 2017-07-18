// Import Components
import React from 'react';
import {Grid, Card, Image} from 'semantic-ui-react';

const DrawPortrait = () => (
    <Card centered>
        <Image src='/images/me.png' />
        <Card.Content>
            <Card.Header>
                Anthony Powell
            </Card.Header>
            <Card.Description>
                Software Developer
            </Card.Description>
        </Card.Content>
    </Card>
)

const DrawDescription = () => {
    const desc = 'Anthony is cool';
    
    return (
        <Card fluid>
            <Card.Content header='About Anthony' />
            <Card.Content description={desc} />
        </Card>
    )
}

const IntroElement = () => {
    const element = (
        <Grid container stackable>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={6} computer={4}>
                    <Card.Group>
                        {DrawPortrait()}                        
                    </Card.Group>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={10} computer={12}>
                    <Card.Group stackable>
                        {DrawDescription()}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );

    return element;
}

export default IntroElement;
