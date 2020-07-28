
/*
traits: social
    1 = minimal, 10 = has lots
requirements: space, cost, effort
    1 = lots needed, 10 = minimal requirement

*/
var petSpecies = [
  {
      class: "Dog",
      generic: {
        social: 8,
        space: 3,
        cost: 2,
        effort: 1
    },
      species: [
          {
              type: "Husky",
              social: 10,
              space: 1,
              cost: 1,
              effort: 1

          },
          {
              type: "Golden Retreiver",
              social: 9,
              space: 3,
              cost: 1,
              effort: 1
          },
          {
              type: "Chihuahua",
              social: 7,
              space: 6,
              cost: 3,
              effort: 4
          }
      ]
  },
  {
    class: "Rodent",
    generic: {
        social: 4,
        space: 8,
        cost: 7,
        effort: 8
    },
    species: [
        {
            type: "Syrian Hamster",
            social: 4,
            space: 8,
            cost: 9,
            effort: 8

        } ,
        {
            type: "Chinchilla",
            social: 6,
            space: 7,
            cost: 5,
            effort: 6
        } 
    ]
},
  {
    class: "Fish",
    generic: {
        social: 1,
        space: 8,
        cost: 8,
        effort: 8
    },
    species: [
        {
            type: "Goldfish",
            picUrl: "goldfish.jpg",
            social: 1,
            space: 9,
            cost: 9,
            effort: 9
        },
    ]
},
{
    class: "Bird",
    generic: {
        social: 5,
        space: 7,
        cost: 7,
        effort: 7
    },
    species: [
        {
            type: "Bulgie",
            social: 5,
            space: 7,
            cost: 7,
            effort: 6
        },
    ]
},
];

export default petSpecies;
