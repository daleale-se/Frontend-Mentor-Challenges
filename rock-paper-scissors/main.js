import Move from './src/classes/Move'
import MoveLogic from './src/classes/MoveLogic'
import MoveUi from './src/classes/MoveUi'
import './style.css'

const movements = [  
  {
    name: "rock",
    img: "/icon-rock.svg",
    color: "#DF3F5C",
    beats: ["scissors", "lizard"]
  },
  {
    name: "paper",
    img: "/icon-paper.svg",
    color: "#5671F3",
    beats: ["rock", "spock"]
  },
  {
    name: "scissors",
    img: "/icon-scissors.svg",
    color: "#EBA726",
    beats: ["paper", "lizard"]
  },
  {
    name: "lizard",
    img: "/icon-lizard.svg",
    color: "#8E5DE6",
    beats: ["paper", "spock"]
  },
  {
    name: "spock",
    img: "/icon-spock.svg",
    color: "#50BDD1",
    beats: ["rock", "scissors"]
  }
]

const randomChoice = (choices) => {
  return choices[Math.floor(Math.random()*choices.length)]
}

const main = () => {

  const choices = movements.map(({name, img, color, beats}) => {

    const moveLogic = new MoveLogic(name, beats)
    const moveUi = new MoveUi(img, color)
    return new Move(moveLogic, moveUi)

  })

  const player = choices[0]
  const house = randomChoice(choices)
  console.log(player, house);

  if (player.playsAgainst(house) === 1) {
    console.log("you win");
  }  else if (player.playsAgainst(house) === -1) {
    console.log("you lose");
  } else {
    console.log("draw!");
  }

}

main()