import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

import projects from './topics'

function Resource ( {match} ) {
    const topic = projects.find(({ id}) => id === match.params.topicId)
    .resources.find(({id}) => id === match.params.subId)
  
    return (
      <div>
        <h3>
          {topic.name}
        </h3>
        <p>{topic.description}</p>
        <a href ={topic.url}> More Info</a>
      </div>
    )
  }

function Project ( {match}) {
    const topic = projects.find(( {id}) => id === match.params.topicId)
    
    return (
      <div>
        <h2>{topic.name}</h2>
        <p>{topic.description}</p>
          <ul>
            {topic.resources.map((sub) => ( 
              <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>
                {sub.name}
                </Link>
              </li>
            ))}
          </ul>
  
          <hr />
          <Route path={`{${match.path}/}:subId`} component={Resource} />
      </div>
    )
  }

function Projects ({match}) {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
  
        <hr />
  
        <Route path={`${match.path}/:topicId`} component={Project} />
      </div>
    )
  }

  export default Projects;