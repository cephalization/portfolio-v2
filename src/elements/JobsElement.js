// Import Components
import React from "react";
import {Item, List} from "semantic-ui-react";

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
      "Arbor Networks",
      "Software Engineering Intern",
      <div>
        <List bulleted>
          <List.Item>
            UI/UX development using PHP, TWIG, JS, and HTML/CSS.
          </List.Item>
          <List.Item>RESTful API development using Python.</List.Item>
          <List.Item>Some React development done.</List.Item>
        </List>
        <p>
          Primarily implementing feature work while participating in agile
          methodologies.
        </p>
      </div>,
      "May 2017 - Present"
    ),
    DefineJob(
      "Center for Technology & Training",
      "Software Engineering Intern",
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
const JobsElement = () => {
  const jobs = LoadJobs();

  const element = (
    <Item.Group divided relaxed unstackable>
      {jobs}
    </Item.Group>
  );

  return element;
};

export default JobsElement;
