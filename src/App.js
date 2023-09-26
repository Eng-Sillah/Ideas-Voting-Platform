import React, { useState  } from 'react';
import { Routes, Route } from 'react-router-dom';
import IdeaInfo from './components/IdeaInfo';
import Login from './components/Login';
import Auth from './components/Auth';
import Navsbar from './components/Navbars';
import Home from './components/Home';
import SubmitIdea from './components/SubmitIdea';
import axios from 'axios';
import  ideaVotingImg from "./img/idea-voting.jpeg";
import  realEstateImg from "./img/real Estate.jpg";
import  LoyaltyImg from "./img/loyalty.jpg";
import  healthImg from "./img/health.jpg";
import  simpleMarketImg from "./img/simplemarket.jpg";
// import IdeaInfo from './components/IdeaInfo';
import './App.css';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mockIdeas, setMockIdeas] = useState([
    {
      id: 1,
      firstName: '',
      lastName: '',
      title: "Idea Voting Platform:",
      request: 'Feature Request',
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
      image: ideaVotingImg,
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Sierra Leone",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 2,
      firstName: '',
      lastName: '',
      title: "Real Estate Listing Website",
      request: 'Feature Request',
      description: "A real estate listing website is an excellent project idea that allows you to showcase your skills in creating platforms for property search and listing. With the MERN stack, you can build a comprehensive website where users can browse, search, and filter properties based on various criteria such as location, price range, property type, and more. Implementing features like property listings with detailed information, high-quality images, interactive maps, and contact forms can enhance the user experience and demonstrate your ability to handle complex data management and user interactions.",
      votes: 10,
      category: "Pending",
      image: realEstateImg,
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Guinea",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 3,
      firstName: '',
      lastName: '',
      title: "Loyalty Points Viewer",
      request: 'Feature Request',
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
      image: LoyaltyImg,
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 4,
      firstName: '',
      lastName: '',
      title: "Web3 Health Connect App",
      request: 'Feature Request',
      description: "This is the first idea.",
      votes: 10,
      category: "Pending",
      image: healthImg,
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Sierra Leone",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 5,
      firstName: '',
      lastName: '',
      title: "Simple Marketplace",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: simpleMarketImg,
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 6,
      firstName: '',
      lastName: '',
      title: "Social Media Application",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Guinea",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 7,
      firstName: '',
      lastName: '',
      title: "Task Management System",
      request: 'Feature Request',
      description: "This is the second idea.",
      votes: 5,
      category: "On Going",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 8,
      firstName: '',
      lastName: '',
      title: "Event Management System",
      request: 'Feature Request',
      description: "An event management system is a practical and challenging project idea that allows you to demonstrate your ability to build complex applications using the MERN stack. With this project, you can create a platform that enables users to organize and manage events efficiently. Users can create event listings, manage registrations, send notifications, and track attendance.Implementing features such as event calendars, ticketing systems, attendee management, and venue selection can enhance the functionality of your event management system. Additionally, consider incorporating real-time updates or chat functionalities to facilitate communication between event organizers and attendees.To further enhance your project, you can integrate with external services such as payment gateways for ticket sales, social media APIs for event promotion, or even location-based APIs to provide directions and nearby amenities. These integrations will not only demonstrate your ability to work with third-party services but also add value to the overall event management experience.",
      votes: 5,
      category: "On Going",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 9,
      firstName: '',
      lastName: '',
      title: "Event Management System",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 10,
      firstName: '',
      lastName: '',
      title: "Job Board Platform",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 11,
      firstName: '',
      lastName: '',
      title: "Idea Voting Avenue:",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    {
      id: 12,
      firstName: '',
      lastName: '',
      title: "Idea Voting Platform:",
      request: 'Feature Request',
      description: "This is the third idea.",
      votes: 8,
      category: "Done",
      image: "",
      teamName: 'Team Name',
      teams: [
        {
          name: "Sillah",
          photo: ""
        },
        {
          name: "Johnethan",
          photo: ""
        }
      ],
      country: [
        {
          name: "Ghana",
          flag: 'Country flag',
        }
      ], 
      problemIdentify: "This is the problem identify",
      ideaToSolveTheProblem: "This is the idea to solev the problem",
      problemSolution: "This is the solution towards the problem",
      walletAddress: 'your wallet Address',
      votersId: [],
      comments: [
        {
          userPhoto: '',
          message: 'This is the message',
          timeStamp: 'this is the time stamp'
        }
      ]
    },
    // Add more ideas with categories as needed
  ]);

  const fetchCountryFlag = async (countryName) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      if (response.data && response.data[0] && response.data[0].flags) {
        return response.data[0].flags.png;
      } else {
        return '';
      }
    } catch (error) {
      console.error('Error fetching country flag:', error);
      return ''; // Return an empty string if there's an error
    }
  };

  const updateCountryFlags = async () => {
    const updatedIdeas = await Promise.all(
      mockIdeas.map(async (ideaItem) => {
        const countryName = ideaItem.country[0].name; // Assuming each idea has one country
        const flag = await fetchCountryFlag(countryName);
        ideaItem.country[0].flag = flag;
        return ideaItem;
      })
    );
  
    console.log(updatedIdeas);
  };
  
  updateCountryFlags();

  function SavedNewIdeasData(enteredNewIdea) {
    const newIdeaData = {
      ...enteredNewIdea
    }
    setMockIdeas(((previousIdea) => [...previousIdea, newIdeaData]))
    console.log(newIdeaData)
  }

  const updateVotes = (updatedIdeas) => {
    setMockIdeas(updatedIdeas);
  };

  const updateComment = (ideaId, newComment) => {
    const updatedIdeas = mockIdeas.map((idea) => {
      if (idea.id === ideaId) {
        // Clone the idea and update its comments array
        const updatedIdea = { ...idea };
        updatedIdea.comments.push(newComment);
        return updatedIdea;
      }
      return idea;
    });

    setMockIdeas(updatedIdeas);
  };

  const handleSearch = (query) => {
    // Update the search query state
    setSearchQuery(query);
  };

  // Filter ideas based on the search query
  const filteredIdeas = mockIdeas.filter((idea) =>
    idea.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="App">
  
    
        {/* <Auth /> */}
        <Navsbar onSearch={handleSearch} />
        {/* <Auth /> */}
        <Routes>
          <Route path="/" element={<Home ideasData={filteredIdeas} />} />
          <Route path="/ideainfo/:id" element={<IdeaInfo ideasData={mockIdeas} onUpdateVotes={updateVotes} onUpdateComment={updateComment}/>} /> 
          <Route path="/signUp" element={<Auth />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/submitIdea" element={<SubmitIdea ideasData={mockIdeas} onSavedNewIdeasData={SavedNewIdeasData}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
