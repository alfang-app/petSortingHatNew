import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import ResultOption from '../components/ResultOption';
function Result(props) {

  function renderResultOptions(key) {
    //alert("result option: " + key.content);
   return( <ResultOption
        key={key}
        quizResult={key} 
      />
      );
  }
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >

      
     

    
<div>
        
<strong>Top results:</strong>
      </div>
      
      
      <ol className="resultOptions">
         
         {props.quizResultOptions.map(renderResultOptions)}
    </ol>
 

      
    </CSSTransitionGroup>
  );
}
// {props.answerOptions.map(renderAnswerOptions)}
    

/*
<div>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
      <div>
            <img src={props.quizResultImage} alt={props.quizResult } />
      </div>
*/
/*

      <ul className="resultOptions">
         <strong>{props.quizResultOptions}</strong>!
    </ul>
 
      */

Result.propTypes = {
  //quizResult: PropTypes.array.isRequired, 
  
  //ratio: PropTypes.number.isRequired,
  quizResultOptions: PropTypes.array.isRequired,
};

export default Result;
