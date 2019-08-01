import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'
import Backdrop from './components/Backdrop/Backdrop'
import projects from './components/Projects/topics'

import Projects from './components/Projects/Projects'


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
// function Project ( {match}) {
//   const topic = projects.find(( {id}) => id === match.params.topicId)
  
//   return (
//     <div>
//       <h2>{topic.name}</h2>
//       <p>{topic.description}</p>
//         <ul>
//           {topic.resources.map((sub) => ( 
//             <li key={sub.id}>
//               <Link to={`${match.url}/${sub.id}`}>
//               {sub.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <hr />
//         <Route path={`{${match.path}/}:subId`} component={Resource} />
//     </div>
//   )
// }
function Home () {
  
  return (
    <h1>
      HOME
    </h1>
  )
}

// function Projects ({match}) {
//   return (
//     <div>
//       <h1>Projects</h1>
//       <ul>
//         {projects.map(({ name, id }) => (
//           <li key={id}>
//             <Link to={`${match.url}/${id}`}>{name}</Link>
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <Route path={`${match.path}/:topicId`} component={Project} />
//     </div>
//   )
// }

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
            <Route path='/projects' component={Projects} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

