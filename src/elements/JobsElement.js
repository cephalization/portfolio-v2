// Import Components
import React from "react";
import {Item, List, Card} from "semantic-ui-react";

/**
 * Object representation of a Job
 * 
 * @param {String} company Company name to display
 * @param {String} title Job title to display
 * @param {Element} description JSX element(s) with a formatted job description
 * 
 * @returns {Object} Job with properties representing information about a job
 */
const DefineJob = (company, title, description, timeframe) => {
  const job = {
    company: company,
    title: title,
    description: description,
    timeframe: timeframe
  };

  return job;
};

/**
 * Statically defined array of job objects
 * 
 * @returns {Array} Job objects
 */
const JobDescriptions = () => {
  const jobs = [
    DefineJob(
      "Ambyint",
      "Full Stack Software Developer (Remote)",
      <div>
        <List bulleted>
          <List.Item>Modern ES5/ES6/ESX Javascript (Ecmascript) development</List.Item>
          <List.Item>React.js, Redux, RxJS observables, frontend development</List.Item>
          <List.Item>Node.js back-end API and service development within a CQRS microservice driven architecture</List.Item>
          <List.Item>Contemporary cloud based collaboration tools used to collaborate remotely and drive features from vision to completion</List.Item>
        </List>
        <p>
          Responsible for turning sketch mockups and user driven workflows into tangible features
          through development on the entire tech stack. 
        </p>
      </div>,
      "November 2018 - Present"
    ),
    DefineJob(
      "Arbor Networks",
      "Software Engineer (Remote)",
      <div>
        <List bulleted>
          <List.Item>React.js development using Redux, React-Redux, ES6/7, and Karma/Enzyme/Jasmine.</List.Item>
          <List.Item>RESTful API and backend development using Python, Flask, Marshmallow schemas. </List.Item>
          <List.Item>UI/UX development using PHP, TWIG, JS, and HTML/CSS.</List.Item>
        </List>
        <p>
          Primarily implementing feature work while participating in agile
          methodologies, regular code review processes, and cross-team communications.
        </p>
      </div>,
      "August 2017 - November 2018"
    ),
    DefineJob(
      "Arbor Networks",
      "Software Engineering Intern (Ann Arbor, MI)",
      <div>
        <List bulleted>
          <List.Item>
            UI/UX development using PHP, TWIG, JS, and HTML/CSS.
          </List.Item>
          <List.Item>RESTful API development using Python.</List.Item>
          <List.Item>React.js development.</List.Item>
        </List>
        <p>
          Primarily implementing feature work while participating in agile
          methodologies.
        </p>
      </div>,
      "May 2017 - August 2017"
    ),
    DefineJob(
      "Center for Technology & Training",
      "Software Engineering Intern (Houghton, MI)",
      <div>
        <List bulleted>
          <List.Item>.NET Stack: Visual Studio, C#, ASP.NET</List.Item>
          <List.Item>AngularJS 1.x, JS, HTML/CSS</List.Item>
          <List.Item>
            Create and implement HTTP endpoints, design web pages, and wire
            UI/UX functionality.
          </List.Item>
        </List>
        <p>
            Engaged in agile methodologies and meetings to optimize work plan and
            solve problems cooperatively.
        </p>
      </div>,
      "May 2016 - Apr 2017"
    ),
    DefineJob(
      "Center for Technology & Training",
      "Student IT Administrator (Houghton, MI)",
      <div>
        <List bulleted>
          <List.Item>Writing windows batch scripts, linux shell scripts</List.Item>
          <List.Item>Purchasing/setup/maintenance of computer hardware</List.Item>
          <List.Item>Implementation and validation of established backup procedures</List.Item>
        </List>
        <p>
            Communication was vital in order to clearly define needs and expectations.
            Collaborative work was organized using an online ticketing system.
        </p>
      </div>,
      "Sep 2014 - May 2016"
    )
  ];

  return jobs;
};

/**
 * Create an Item element with job descriptors
 * 
 * @param {Object} Job object containing job information
 * @returns {Element} JSX element Item containing a Job
 */
const BuildJob = (job, key) =>
  <Item key={key}>
    <Item.Content>
      <Item.Header>
        {job.company}
      </Item.Header>
      <Item.Meta>
        {job.title}
      </Item.Meta>
      <Item.Description>
        {job.description}
      </Item.Description>
      <Item.Extra>
          {job.timeframe}
      </Item.Extra>
    </Item.Content>
  </Item>;

/**
 * Build Item elements from Job objects and return them as an array
 * 
 * @returns {Array} Items containing job information
 */
const LoadJobs = () => {
  const jobData = [],
    jobs = JobDescriptions();

  for (let job in jobs) {
    if (jobs.hasOwnProperty(job)) jobData.push(BuildJob(jobs[job], job));
  }

  return jobData;
};

/**
 * Create an Item.Group containing information about my jobs
 * 
 * @returns {Element} Item.Group containing job history
 */
const JobsElement = () => (
  <Card fluid>
    <Card.Content header='Professional Experience' />
    <Card.Content>
      <Item.Group divided relaxed unstackable>
        {LoadJobs()}
      </Item.Group>
    </Card.Content>
  </Card>
);

export default JobsElement;
