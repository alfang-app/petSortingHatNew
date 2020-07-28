import React from 'react';
import PropTypes from 'prop-types';

const images = require.context('../../src/resources', true);

function AnswerOption(props) {
  return (
    <li className="answerOption">
      
      <div>
        <strong>{props.quizResult}</strong>!
        
        Pet score is: temp
      </div>
      
      <br></br>
      <div>
            <img src="./goldfish.jpg" alt={props.quizResult } />
      </div>

      images("./goldfish.jpg");

      <br></br>
    </li>
  );
}

AnswerOption.propTypes = {
  quizResult: PropTypes.string.isRequired,
 // quizResultImage: PropTypes.string.isRequired, 
};

export default AnswerOption;
