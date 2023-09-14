import React from 'react';
// import Auth from './components/Auth';
import Navsbar from './components/Navbars';
import Home from './components/Home';
// import IdeaInfo from './components/IdeaInfo';
import './App.css';
// import IdeaDisplay from './components/IdeaDisplay';

function App() {

  const mockIdeas = [
    {
      id: 1,
      title: "Idea Voting Platform:",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 1,
      title: "Real Estate Listing Website",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 1,
      title: "Loyalty Points Viewer",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 1,
      title: "Web3 Healt Connect App",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 2,
      title: "Simple Marketplace",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 2,
      title: "Social Media Application",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 2,
      title: "Task Management System",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 2,
      title: "Recipe Sharing Website",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 3,
      title: "Event Management System",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    {
      id: 3,
      title: "Job Board Platform",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    {
      id: 3,
      title: "Idea Voting Platform:",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    {
      id: 3,
      title: "Idea Voting Platform:",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    // Add more ideas with categories as needed
  ];

  return (
    <div className="App">
    
      {/* <Auth /> */}
      <Navsbar />
      <Home ideasData={mockIdeas}/>
     
    </div>
  );
}

export default App;
