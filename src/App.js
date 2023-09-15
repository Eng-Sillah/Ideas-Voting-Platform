import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IdeaInfo from './components/IdeaInfo';
import Auth from './components/Auth';
import Navsbar from './components/Navbars';
import Home from './components/Home';
import  ideaVotingImg from "./img/idea-voting.jpeg";
import  realEstateImg from "./img/real Estate.jpg";
import  LoyaltyImg from "./img/loyalty.jpg";
import  healthImg from "./img/health.jpg";
import  simpleMarketImg from "./img/simplemarket.jpg";
// import IdeaInfo from './components/IdeaInfo';
import './App.css';


function App() {

  const mockIdeas = [
    {
      id: 1,
      title: "Idea Voting Platform:",
      request: 'Feature Request',
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
      image: ideaVotingImg,
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ]
    },
    {
      id: 2,
      title: "Real Estate Listing Website",
      request: 'Feature Request',
      description: "A real estate listing website is an excellent project idea that allows you to showcase your skills in creating platforms for property search and listing. With the MERN stack, you can build a comprehensive website where users can browse, search, and filter properties based on various criteria such as location, price range, property type, and more. Implementing features like property listings with detailed information, high-quality images, interactive maps, and contact forms can enhance the user experience and demonstrate your ability to handle complex data management and user interactions.",
      votes: 10,
      category: "Pending",
      image: realEstateImg,
      teams: [
        {
          name: "Eugen",
          photo: ""
        }
      ]
    },
    {
      id: 3,
      title: "Loyalty Points Viewer",
      request: 'Feature Request',
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
      image: LoyaltyImg,
      teams: [
        {
          name: "John",
          photo: ""
        },
        {
          name: "Mohamed",
          photo: ""
        },
        {
          name: "Musa",
          photo: ""
        }
      ]
    },
    {
      id: 4,
      title: "Web3 Health Connect App",
      request: 'Feature Request',
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
      image: healthImg,
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 5,
      title: "Simple Marketplace",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: simpleMarketImg,
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 6,
      title: "Social Media Application",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 7,
      title: "Task Management System",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 8,
      title: "Recipe Sharing Website",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 9,
      title: "Event Management System",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 10,
      title: "Job Board Platform",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 11,
      title: "Idea Voting Platform:",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    {
      id: 12,
      title: "Idea Voting Platform:",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Sebastian",
          photo: ""
        }
      ]
    },
    // Add more ideas with categories as needed
  ];

  return (
    <div className="App">
  
    
        <Auth />
        <Navsbar />
        {/* <Auth /> */}
        <Routes>
          <Route path="/" element={<Home ideasData={mockIdeas} />} />
          <Route path="/ideainfo/:id" element={<IdeaInfo ideasData={mockIdeas} />} />
      </Routes>
      
    </div>
  );
}

export default App;
