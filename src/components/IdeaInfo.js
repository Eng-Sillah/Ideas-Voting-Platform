import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../components/config/firebase-config';
import "./IdeaInfo.css";

function IdeaInfo(props) {
    const navigate = useNavigate(); // Initialize useNavigate
  const { ideasData } = props;
  const { id } = useParams();
  const ideaId = parseInt(id); // Convert the id from the URL to a number
  const idea = ideasData.find((idea) => idea.id === ideaId);

  const [hasVoted, setHasVoted] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(idea.comments);
  const user = auth.currentUser; // Use auth.currentUser to get the user

  // Function to handle voting
  const handleVote = () => {
    if (user) {
       // Check if the user's ID is in the votersId array
       if (!idea.votersId.includes(user.uid)) {
         // User has not voted yet, add their ID to the array
         idea.votersId.push(user.uid);
      if (!hasVoted) {
        // Increment the vote count for the idea
        const updatedIdeas = ideasData.map((ideaItem) => {
          if (ideaItem.id === ideaId) {
            return { ...ideaItem, votes: ideaItem.votes + 1 };
          }
          return ideaItem;
        });

        // Update the state with the new vote count
        props.onUpdateVotes(updatedIdeas);

        // Set hasVoted to true to prevent multiple votes
        setHasVoted(true);
        alert('You have successfully voted.');
      }} else {
        alert('You have already voted for this idea.');
      }
    } else {
        navigate("/login")
      // Redirect the user to the login page if not logged in
      // You can use your preferred routing mechanism here
      // For example, using react-router's history or navigate function
      // Here, we'll log a message to the console for demonstration
      console.log('User is not logged in. Redirect to login page.');
    }
  };

  useEffect(() => {
    // Check if the user has already voted for this idea
    // You can use local storage or any other method to keep track of user votes
    // For simplicity, we'll just use local state (hasVoted)
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (user) {
      // Create a new comment object
      const newComment = {
        userPhoto: user.photoURL, // You can customize this based on your user data
        message: comment,
        timeStamp: new Date().toISOString(),
      };

      // Update the comments state with the new comment
      setComments([...comments, newComment]);

        // Call the updateComment function to update comments in App.js
        props.onUpdateComment(ideaId, newComment);
      // Clear the comment input field
      setComment('');
    } else {
      navigate('/login');
    }
  };

  if (!idea) {
    return <div> Idea not found.</div>;
  }

  return (
    <div className='idea-info-container'>
        <div className='ideaDisplay-title'>
        <h2>{idea.title}</h2>
        <div className='vote-container'>
        <button onClick={handleVote} disabled={hasVoted}>
            {hasVoted ? 'Voted' : 'Vote'}
          </button>
            <h3>{idea.votes}</h3>
        </div>
        </div>
        <div className='idea-image'>
            <img src={idea.image} alt={`${idea.title}-Img`}/>
        </div>

        <div className='idea-info'>
            <div className='idea-description'>
                <h2>Problem Identify</h2>
                <p>{idea.description}</p>
                <h2>Ideas To Solve The Problem</h2>
                <p>Take care of Dolly the Doll from changing her dress to giving her some food. To brush her hair, click on the brush on the bottom right corner. To change her dress, click on the Change Dress button. To chat with Dolly, click on her.</p>
                <h2>Problem Solution</h2>
                <p>This is the where the solution to the problem goes</p>
            </div>
            <div className='idea-owners'>
                <h3>About the team</h3>
                <div className='about-team'>
                    <div className='country-logo'>
                        <img src={idea.country[0].flag} alt={idea.country[0].name}/>
                    </div>
                    <p>{idea.country[0].name}</p>
                </div>
                <h3>Team Members</h3>
                {idea.teams.map((team, key) => {
                    return (
                    <div className='about-team' key={key}>
                        <div className='member-logo'></div>
                        <p>{team.name}</p>
                    </div>
                    )
                })}
                {/* <div className='about-team'>
                    <div className='member-logo'></div>
                    <p>Member Name</p>
                </div>
                <div className='about-team'>
                    <div className='member-logo'></div>
                    <p>Member Name</p>
                </div> */}
            </div>
        </div>
        <div className='idea-info-coment'>
            <div className='idea-description'>
                <h2>TEAM COMMENTS</h2>
                <p>Take care of Dolly the Doll from changing her dress to giving her some food. To brush her hair, click on the brush on the bottom right corner. To change her dress, click on the Change Dress button. To chat with Dolly, click on her.</p>
                <h2>Project Description</h2>
                <p>Take care of Dolly the Doll from changing her dress to giving her some food. To brush her hair, click on the brush on the bottom right corner. To change her dress, click on the Change Dress button. To chat with Dolly, click on her.</p>
            </div>
            
            <div className='idea-owners'>
                <h3>About the team</h3>
                <div className='about-team'>
                    <div className='country-logo'></div>
                    <h4>{idea.country[0].name}</h4>
                </div>
                <h3>Team Members</h3>
                <div className='about-team'>
                    {idea.teams.map((team, key) => {
                       return (
                        <div key={key}>
                        <div className='member-logo'></div>
                        <h4>{team.name}</h4>
                        </div>
                       )
                    })}
                    
                    
                </div>
            </div>
        </div>

      {/* Display Comments */}
      <div className="comment-section">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <img src={comment.userPhoto} />
              <div className='message'>
                <h5>{comment.message}</h5>
                <p>{comment.timeStamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

        <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          rows="4"
          cols="50"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>


        
      {/* <div className="idea-info">
        <h3>{idea.title}</h3>
        <p>{idea.description}</p>
        <p>Votes: {idea.votes}</p>
      </div> */}
    </div>
  );
}

export default IdeaInfo;
