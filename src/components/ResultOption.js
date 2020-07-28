import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      
      <div>
        You prefer <strong>{props.quizResult}</strong>!
        
        Pet score is: temp
      </div>
      <div>
            <img src="./src/resources/goldfish.jpg" alt={props.quizResult } />
      </div>


      <br></br>
    </li>
  );
}

AnswerOption.propTypes = {
  quizResult: PropTypes.string.isRequired,
 // quizResultImage: PropTypes.string.isRequired, 
};

export default AnswerOption;
