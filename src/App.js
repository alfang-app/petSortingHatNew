import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import petSpecies from './api/petSpecies';
import Quiz from './components/Quiz';
import Result from './components/Result';
//import logo from './svg/logo.svg';
import logo from './svg/hammy.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: [],
      //result: '',

      
      resultSpecies: {}
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    
    /*(const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );*/
    
    this.setState({
      category: quizQuestions[0].category,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers//shuffledAnswerOptions[0]
    });
    
  }
/*
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }*/

  handleAnswerSelected(event) {
    //alert("old answer value" + this.state.answer)
    this.setUserAnswer(event.currentTarget.value);

    //alert("new answer value" + this.state.answer)
    //this.setUserAnswer(this.state.questionId, quizQuestions.length);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }

  }

  // iterate through all petSpecies and add weighted val...
  // store each weighted val from quizQ...
  setUserAnswer(answer) {
      
    var cat = this.state.category;
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        // [cat]: is the thing to store into.... right side os the value thats stored
         [cat]: (state.answersCount[cat] || 0) + answer
      },
      //category: cat,
      answer: answer-0
    })); 
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
      category: quizQuestions[counter].category,
    });
  }

  getResults() {

    const answersCount = this.state.answersCount;
    const resultSpecies = this.state.resultSpecies;

    var spaceW = answersCount["space"];
    var costW = answersCount["cost"];
    var socialW = answersCount["social"];
    var effortW = answersCount["effort"];

    if(isNaN(spaceW) ) spaceW = 0;
    if(isNaN(costW) ) costW = 0;
    if(isNaN(socialW) ) socialW = 0;
    if(isNaN(effortW) ) effortW = 0;
    
    //alert("space"+spaceW + "cost" + costW);

    for(var i = 0; i < Object.keys(petSpecies).length; i++ ){
      //if(generic)
      //  resultSpecies
     // else 
     // add social, effort  
      

    //REENABLE AFTER CONFIG PAGE
      var classSpaceV = spaceW*petSpecies[i].generic.space ;
      var classCostV =  costW*petSpecies[i].generic.cost  ;
      var classSocialV=  socialW*petSpecies[i].generic.social  ; 
      var classEffortV=  effortW*petSpecies[i].generic.effort  ;
      /* 
       resultSpecies[petSpecies[i].class] =  
        classSpaceV + classCostV + classSocialV + classEffortV;

        //alert("space2" + classSpaceV + " cost2" + classCostV + " social2:"  +classSocialV + "effort 2" +classEffortV + " sum: "  + resultSpecies[petSpecies[i].class]);
      
        */
       var newLen = Object.keys((petSpecies[i].species)).length;
     // alert(Object.keys(petSpecies[0].species) + "..."+ petSpecies[2] + "..." +(newLen)); 
      // WTF jsut 0, 1 , 2, 3

    //alert(petSpecies[i].class +".."+ classCostV + ".." + classSpaceV); 
        for(var j = 0; j < newLen; j++ ){
      
          var petObj = petSpecies[i].species[j];
       classSpaceV = spaceW*petObj.space  ;
       classCostV =  costW*petObj.cost  ;
       classSocialV =  socialW*petObj.cost  ;
       classEffortV =  effortW*petObj.cost  ;
        resultSpecies[petObj.type] = 
          classSpaceV + classCostV + classSocialV + classEffortV;
 
      }
    }
    
    //alert("presorted " +  resultSpecies);
    var mappedHash = Object.keys( resultSpecies ).sort(function( a, b ) {
      return resultSpecies[ b ] - resultSpecies[ a ];
      }).map(function( sortedKey ) {
          return sortedKey;
      });
      // alert( "post sorted "+ mappedHash);
    
return mappedHash;



    //alert(  resultSpecies["Husky"]);
    /*
    const resultSpeciesKeys = Object.keys(resultSpecies);

    // SORT RESULTS.. AND get all i need?
    
    //alert( resultSpeciesKeys);


    const resultSpeciesValues = resultSpeciesKeys.map(key => resultSpecies[key]);
    const maxResultSpecies = Math.max.apply(null, resultSpeciesValues);

    return resultSpeciesKeys.filter(key => resultSpecies[key] === maxResultSpecies);*/
/*
    alert("????" + Object.keys(resultSpeciesKeys));
    resultSpeciesKeys.sort();

    
    alert("????" + Object.keys(resultSpeciesKeys));

    return resultSpeciesKeys;*/
  }

  // array???
  // pass imaged path??? in massive DS

  setResults(result) {
    
    //alert("res"+result[0] +".."+ result[1] + ".." +result[2]);
    if (result.length >= 1) {
      this.setState({ result: result });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        category={this.state.category}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        // FUNCTION AS PROP
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {

    //alert("res wtf"  );
    // sort
    //return <Result quizResult={this.state.result} />;
    return <Result quizResultOptions={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pet Sorting Hat</h2>
        </div>
        {this.state.result.length>= 1 ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
