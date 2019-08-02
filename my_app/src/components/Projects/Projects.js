import React from 'react';

import {

  Link,
  Route // for later
} from 'react-router-dom'


import './Card.css'


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
      <div className='projects-container'>
        <h1>Projects</h1> 
        <ul className='card-container'>
          {projects.map(({ name, id, description }) => (
            <li className='card' key={id}>
              <div className='card__copy'>
                <Link to={`${match.url}/${id}`}>{name}</Link>
                <hr />
                <h2>{description}</h2>
              </div>
            </li>
          ))}
        </ul>
  
        <hr />
  
        <Route path={`${match.path}/:topicId`} component={Project} />
      </div>
    )
  }

  export default Projects;