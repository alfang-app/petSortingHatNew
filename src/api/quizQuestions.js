
var req = "Requirement: "
var prefer = "Trait: "

        // future: config page... 
        //Would you like to get specific or generic quiz results?
        // all questions on one page... use of checkbox
var quizQuestions = [
    {
        question: prefer+"How interactive you want pet to be?",
        category: "social",
        // how many results to display?
        answers: [
            {
                type: 5,
                content: "As much as possible"
            },
            {
                type: 4,
                content: "High"
            },
            
            {
              type: 3,
              content: "Average"
          },
          {
              type: 2,
              content: "Low"
          },
          {
              type: 1,
              content: "Minimal"
          },
        ]
    },
  {
      question: req+"How much space do you have available for pet?",
      category: "space",
      // how many results to display?
      answers: [
          {
              type: 5,
              content: "Large space"
          },
          {
              type: 4,
              content: "High"
          },
          
          {
            type: 3,
            content: "Average"
        },
        {
            type: 2,
            content: "Low"
        },
        {
            type: 1,
            content: "No space"
        },
      ]
  },
  // do you prefer: mammal, rodent, fish, or bird
  // temp: how social, interactive, spacial, maintenance : Must-have, high, medium, low, very low
  // future: 
    // question type: checkbox -> enter number for each category
    //skill point or bar like ...
/*
  {
      question: req+"What's your budget preference for pet?",
      category: "cost",
      answers: [
        {
            type: 5,
            content: "$200+"
        },
        {
            type: 4,
            content: "$200"
        },
        
        {
          type: 3,
          content: "$100"
      },
      {
          type: 2,
          content: "$50"
      },
      {
          type: 1,
          content: "Less than $50"
      },
      ]
  },
  */
];

export default quizQuestions;
