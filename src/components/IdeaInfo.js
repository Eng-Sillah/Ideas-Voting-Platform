// IdeaInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';
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
            <img src={idea.image} alt={`${idea.title}-Img`}/>
        </div>

        <div className='idea-info'>
            <div className='idea-description'>
                <h2>PROJECT DESCRIPTION</h2>
                <p>{idea.description}</p>
                <h2>Project Description</h2>
                <p>Take care of Dolly the Doll from changing her dress to giving her some food. To brush her hair, click on the brush on the bottom right corner. To change her dress, click on the Change Dress button. To chat with Dolly, click on her.</p>
            </div>
            <div className='idea-owners'>
                <h3>About the team</h3>
                <div className='about-team'>
                    <div className='country-logo'>
                        <img src={idea.country[0].flag} />
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

        
      {/* <div className="idea-info">
        <h3>{idea.title}</h3>
        <p>{idea.description}</p>
        <p>Votes: {idea.votes}</p>
      </div> */}
    </div>
  );
}

export default IdeaInfo;
