import React from 'react';
const projects = [
  {
    id: 1,
    name: "halfway-there",
     
  },
  {
    id: 2,
    name: "password-generator",
  
  },
  {
    id: 3,
    name: "workday-planner",
    
  },
  {
    id: 4,
    name: "team-profile-generator",
    
  },
  {
    id: 5,
    name: "melp",
    
  },

];

function Project() {
  return (
    return <List projects={projects} />;
  );
}

function List(props) {
  return (
    <ul className="list-group">
      
      {props.projects.map(proj => (
        <li className="list-group-item" key={proj.id}>
          {proj.name}
        </li>
      ))}
    </ul>
  );
}

export default Project;
