import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'
import Backdrop from './components/Backdrop/Backdrop'
import projects from './topics'

// const projects = [
//   {
//     name: 'React Router',
//     id: 'react-router',
//     description: 'Declarative, component based routing for React',
//     resources: [
//       {
//         name: 'URL Parameters',
//         id: 'url-parameters',
//         description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
//         url: 'https://tylermcginnis.com/react-router-url-parameters/'
//       },
//       {
//         name: 'Programmatically navigate',
//         id: 'programmatically-navigate',
//         description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
//         url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
//       }
//     ]
//   },
//   {
//     name: 'React.js',
//     id: 'reactjs',
//     description: 'A JavaScript library for building user interfaces',
//     resources: [
//       {
//         name: 'React Lifecycle Events',
//         id: 'react-lifecycle',
//         description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
//         url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
//       },
//       {
//         name: 'React AHA Moments',
//         id: 'react-aha',
//         description: "A collection of 'Aha' moments while learning React.",
//         url: 'https://tylermcginnis.com/react-aha-moments/'
//       }
//     ]
//   },
//   {
//     name: 'Functional Programming',
//     id: 'functional-programming',
//     description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
//     resources: [
//       {
//         name: 'Imperative vs Declarative programming',
//         id: 'imperative-declarative',
//         description: 'A guide to understanding the difference between Imperative and Declarative programming.',
//         url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
//       },
//       {
//         name: 'Building User Interfaces with Pure Functions and Function Composition',
//         id: 'fn-composition',
//         description: 'A guide to building UI with pure functions and function composition in React',
//         url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
//       }
//     ]
//   }
// ]

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
function Home () {
  
  return (
    <h1>
      HOME
    </h1>
  )
}

function Topics ({match}) {
  return (
    <div>
      <h1>Topics</h1>
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

class App extends Component {
  state = {
    sidePanelOpen: false,
  };
  
  sidePanelClickHandler = () => {
    this.setState((prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({sidePanelOpen: false});
  }

  render(){

    let backdrop;
    
    if (this.state.sidePanelOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar sidePanelClickHandler={this.sidePanelClickHandler} />
          <SidePanel show={this.state.sidePanelOpen} click={this.backdropClickHandler}/>
          {backdrop}
          <main style={{ marginTop: '64px' }}>      
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Topics} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

