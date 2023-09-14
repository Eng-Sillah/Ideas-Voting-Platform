import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IdeaInfo from './components/IdeaInfo';
// import Auth from './components/Auth';
import Navsbar from './components/Navbars';
import Home from './components/Home';
// import IdeaInfo from './components/IdeaInfo';
import './App.css';


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
      id: 2,
      title: "Real Estate Listing Website",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 3,
      title: "Loyalty Points Viewer",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 4,
      title: "Web3 Healt Connect App",
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
    },
    {
      id: 5,
      title: "Simple Marketplace",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 6,
      title: "Social Media Application",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 7,
      title: "Task Management System",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 8,
      title: "Recipe Sharing Website",
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
    },
    {
      id: 9,
      title: "Event Management System",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    {
      id: 10,
      title: "Job Board Platform",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    {
      id: 11,
      title: "Idea Voting Platform:",
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
    },
    {
      id: 12,
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
        <Routes>
          <Route path="/" element={<Home ideasData={mockIdeas} />} />
          <Route path="/ideainfo/:id" element={<IdeaInfo ideasData={mockIdeas} />} />
      </Routes>
      
    </div>
  );
}

export default App;
