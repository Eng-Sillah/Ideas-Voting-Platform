// IdeaInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';
import gumbotronImg from "../img/gumbotron.jpg";
import "./IdeaInfo.css";

function IdeaInfo(props) {
  const { ideasData } = props;
  const { id } = useParams();
  const ideaId = parseInt(id); // Convert the id from the URL to a number
  const idea = ideasData.find((idea) => idea.id === ideaId);

  if (!idea) {
    return <div> Idea not found.</div>;
  }

  return (
    <div className='idea-info-container'>
        <div className='idea-title'>
        <h2>{idea.title}</h2>
        </div>
        <div className='idea-image'>
            <img src={gumbotronImg} alt='idea image'/>
        </div>

        <div className='idea-info'>
            <div className='idea-description'>
                <h2>PROJECT DESCRIPTION</h2>
                <p>Take care of Dolly the Doll from changing her dress to giving her some food. To brush her hair, click on the brush on the bottom right corner. To change her dress, click on the Change Dress button. To chat with Dolly, click on her.</p>
                <h2>Project Description</h2>
                <p>Take care of Dolly the Doll from changing her dress to giving her some food. To brush her hair, click on the brush on the bottom right corner. To change her dress, click on the Change Dress button. To chat with Dolly, click on her.</p>
            </div>
            <div className='idea-owners'>
                <h3>About the team</h3>
                <div className='about-team'>
                    <div className='country-logo'></div>
                    <p>Country Name</p>
                </div>
                <h3>Team Members</h3>
                <div className='about-team'>
                    <div className='member-logo'></div>
                    <p>Member Name</p>
                </div>
                <div className='about-team'>
                    <div className='member-logo'></div>
                    <p>Member Name</p>
                </div>
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
                    <h4>Country Name</h4>
                </div>
                <h3>Team Members</h3>
                <div className='about-team'>
                    <div className='member-logo'></div>
                    <h4>Member Name</h4>
                </div>
            </div>
        </div>

        
      {/* <div className="idea-info">
        <h3>{idea.title}</h3>
        <p>{idea.description}</p>
        <p>Votes: {idea.votes}</p>
      </div> */}
    </div>
  );
}

export default IdeaInfo;
