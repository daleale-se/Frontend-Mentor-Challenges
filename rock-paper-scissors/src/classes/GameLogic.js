import { MOVEMENTS } from "./../constants";
import Score from "./Score";
import MoveLogic from "./MoveLogic"
import MoveUi from "./MoveUi";
import Move from "./Move"
import $ from "jquery";
import randomChoice from "./../randomChoice"

export default class GameLogic {

    constructor() {
        this.score = new Score()
        this.choices = []
        this.createChoices()
        this.addClickeableEvents()
    }

    playRound(choice) {

        const player = choice;
        player.selectedMove("player")

        $(".choices").hide();

        setTimeout(() => {
            const house = randomChoice(this.choices);
            
            house.selectedMove("house")                
            // game logic
        
            if (player.playsAgainst(house) === 1) {
                this.score.increaseScore()
                this.score.update()
                this.updateResult("you win")
            } else if (player.playsAgainst(house) === -1) {
                this.updateResult("you lose")
            } else {
                this.updateResult("you draw")   
            }

            // $(".result").show()
            // $(".house-move").show()
            // $(".play-again").show()

        }, 1000)
      
        $(".versus").show();

      };

    createChoices() {
        this.choices = MOVEMENTS.map(({ name, img, color, beats }) => {
            const moveLogic = new MoveLogic(name, beats);
            const moveUi = new MoveUi(img, color);
            return new Move(moveLogic, moveUi);
        });
    }

    addClickeableEvents() {
        this.choices.forEach((move) => {
            move.addClickeableEvent(this)
        });
    }

    updateResult(text) {
        $(".result h2").text(text)
    }

}