import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SubmitIdea.css";

function SubmitIdea(props) {
  const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [countryFlag, setCountryFlag] = useState('');
    const [submittedIdeas, setSubmittedIdeas] = useState([]);
    const [confirmation, setConfirmation] = useState(false);
    // const [formSubmitted, setFormSubmitted] = useState(false);
    const [idea, setIdea] = useState({
      title: '',
      request: 'Feature Request',
      description: '',
      category: 'Pending',
      image: null,
      teamName: '',
      teams: [{ name: '', photo: null }],
      country: "",
      // Add more fields here
      firstName: '',
      lastName: '',
      ideaTitle: '',
      problemDescription: '',
      walletAddress: '',
      defineSolution: '',
      ideaCategory: 'Pending',
    });
  




    useEffect(() => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          const countryNames = response.data.map((country) => country.name.common);
          const sortedCountries = countryNames.sort((a, b) => a.localeCompare(b));
          setCountries(sortedCountries);
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
        });
    }, []);
  
    useEffect(() => {
      if (idea.country) {
        axios
          .get(`https://restcountries.com/v3.1/name/${idea.country}`)
          .then((response) => {
            if (response.data && response.data[0] && response.data[0].flags) {
              setCountryFlag(response.data[0].flags.png);
            } else {
              setCountryFlag('');
            }
          })
          .catch((error) => {
            console.error("Error fetching country flag:", error);
            setCountryFlag('');
          });
      } else {
        setCountryFlag('');
      }
    }, [idea.country]);
  
    const handleCountryChange = (event) => {
      const selectedCountry = event.target.value;
      setIdea((prevIdea) => ({
        ...prevIdea,
        country: selectedCountry,
      }));
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setIdea((prevIdea) => ({
        ...prevIdea,
        [name]: value,
      }));
    };
  
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setIdea((prevIdea) => ({
          ...prevIdea,
          image: file,
        }));
      };


  
    const handleTeamInputChange = (index, e) => {
      const { name, value } = e.target;
      setIdea((prevIdea) => ({
        ...prevIdea,
        teams: prevIdea.teams.map((team, i) =>
          i === index ? { ...team, [name]: value } : team
        ),
      }));
    };
  
    const handleAddTeamMember = () => {
      setIdea((prevIdea) => ({
        ...prevIdea,
        teams: [...prevIdea.teams, { name: '', photo: '' }],
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const submittedIdea = {
        id: props.ideasData.length + 1,
        title: idea.title,
        request: idea.request,
        description: idea.description,
        votes: 0,
        category: idea.category,
        image: idea.image,
        teamName: idea.teamName,
        teams: idea.teams,
        country: [
          {
            name: idea.country,
            flag: countryFlag,
          }
        ],
        // Add more fields here
        firstName: idea.firstName,
        lastName: idea.lastName,
        ideaTitle: idea.ideaTitle,
        problemDescription: idea.problemDescription,
        defineSolution: idea.defineSolution,
        walletAddress: idea.walletAddress,
        ideaCategory: idea.ideaCategory,
        votersId: [],
        comments: [
          {
            userPhoto: '',
            message: 'This is the message',
            timeStamp: 'this is the time stamp'
          }
        ]
      };
  
       // Simulate a submission delay for demonstration purposes
    setTimeout(() => {
      // Your submission logic here
      // For now, let's assume the submission was successful
      setConfirmation(true);
    }, 1000);


      setSubmittedIdeas([...submittedIdeas, submittedIdea]);
  
      setIdea({
        title: '',
        request: 'Feature Request',
        description: '',
        category: 'Pending',
        image: null,
        teamName: '',
        teams: [{ name: '', photo: null }],
        country: "",
        firstName: '',
        lastName: '',
        ideaTitle: '',
        problemDescription: '',
        walletAddress: '',
        defineSolution: '',
        ideaCategory: 'Pending',
      });
  
      setCountryFlag('');
      // setFormSubmitted(true);
  
      // Log the submitted idea
    //   console.log(submittedIdea);

      props.onSavedNewIdeasData(submittedIdea)
    };

    const handleContinue = () => {
      // Redirect to the Home page or any other desired page
      navigate('/');
    };


    return (
      <div className="submit-idea-container">
        {confirmation ? ( // Display confirmation message if confirmation is true
          <div className="confirmation-message">
            <p>Your idea has been submitted successfully!</p>
            <button onClick={handleContinue}>Continue</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Submit Your Idea</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={idea.firstName}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={idea.lastName}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Team Name */}
            <div className="form-group">
              <label htmlFor="teamName">Team Name</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={idea.teamName}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Country */}
            <div className="country-container">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={idea.country}
                  onChange={handleCountryChange}
                >
                  <option value="" disabled>
                    Select your country...
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="country-flag">
                {countryFlag && (
                  <img src={countryFlag} alt={`${idea.country} flag`} />
                )}
              </div>
            </div>
  
            {/* Idea Title */}
            <div className="form-group">
              <label htmlFor="ideaTitle">Idea Title</label>
              <input
                type="text"
                id="ideaTitle"
                name="title"
                value={idea.title}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Identify the Problem */}
            <div className="form-group">
              <label htmlFor="problemDescription">Identify the Problem</label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                rows="4"
                cols="50"
                value={idea.problemDescription}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Idea to Solve the Problem */}
            <div className="form-group">
              <label htmlFor="description">Idea to Solve the Problem</label>
              <textarea
                id="dec"
                name="description"
                rows="4"
                cols="50"
                value={idea.description}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Define the Solution */}
            <div className="form-group">
              <label htmlFor="defineSolution">Define the Solution</label>
              <textarea
                id="defineSolution"
                name="defineSolution"
                rows="4"
                cols="50"
                value={idea.defineSolution}
                onChange={handleInputChange}
              />
            </div>
  
            {/* Idea Image */}
            <div className="form-group">
              <label htmlFor="ideaImage">Idea Image</label>
              <input
                type="file"
                id="ideaImage"
                name="image"
                onChange={handleImageChange}
              />
              {idea.image && typeof idea.image === 'object' && (
                <img src={URL.createObjectURL(idea.image)} alt={idea.id} />
              )}
            </div>
  
            {/* Idea Category */}
            <div className="form-group">
              <label htmlFor="ideaCategory">Idea Category</label>
              <select
                id="ideaCategory"
                name="category"
                value={idea.category}
                onChange={handleInputChange}
              >
                <option value="Pending">Pending</option>
                <option value="On Going">On Going</option>
                <option value="Done">Done</option>
              </select>
            </div>
            {/* Wallet Address */}
            <div className="form-group">
              <label htmlFor="ideaCategory">Your Crypto Wallet Address</label>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                onChange={handleInputChange}
              />
            </div>
  
            {/* Team Members */}
            <div className="form-group">
              <label>Team Members</label>
              {idea.teams.map((team, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Team Member Name"
                    value={team.name}
                    onChange={(e) => handleTeamInputChange(index, e)}
                  />
                  <input
                    type="file" // Use file input for photo
                    accept="image/*" // Allow only image files
                    name="photo"
                    onChange={handleImageChange} // Handle image change
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddTeamMember} id="add-member">
                + Add Team Member
              </button>
            </div>
  
            {/* Submit Button */}
            <button type="submit">Submit Idea</button>
          </form>
        )}
      </div>
    );
}

export default SubmitIdea;
