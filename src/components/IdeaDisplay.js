import React from 'react';
// import { Link } from 'react-router-dom';
import './IdeaDisplay.css'; // Import the CSS file

function IdeaDisplay(props) {
    const {ideasData} = props;
  const categories = ['Pending', 'On Going', 'Done'];
  return (
    <div className="ideaDisplay-container">
      <h2 className="idea-title">Projects Ideas</h2>
      <table className="idea-table">
        <thead>
          <tr>
            {categories.map((category) => (
              <th key={category} className='tabel-head'>{category.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {categories.map((category) => (
              <td key={category}>
                <div className="idea-container">
                  <ul className="idea-list">
                    {ideasData
                      .filter((idea) => idea.category === category)
                      .map((idea) => (
                        <li key={idea.id} className="idea-item">
                         <div className="idea-item-header">
                            <div className="item-head">
                          <div className="idea-item-votes">
                            <span className="vote-count">{idea.votes}</span>
                            <span className="vote-control">^</span>
                          </div>
                          <div className="idea-item-title">{idea.title}</div>
                          </div>
                          <div className="idea-item-user">
                            <p className="idea-item-description">{idea.description}</p>
                            <div className="user-icon">AS</div>
                          </div>
                        </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IdeaDisplay;
