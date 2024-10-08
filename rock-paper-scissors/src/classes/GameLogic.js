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
        this.createButtons()
    }

    playRound(choice) {

        const player = choice;
        $(".player-move").text(player.logic.name)
        $(".house-move").hide()
        $(".play-again").hide()
        $(".result").hide()

        setTimeout(() => {
            const house = randomChoice(this.choices);
        
            $(".house-move").text(house.logic.name)
                
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

            $(".result").show()
            $(".house-move").show()
            $(".play-again").show()

        }, 1000)
      
        $(".choices").hide();
        $(".versus").show();
      };

    createChoices() {
        this.choices = MOVEMENTS.map(({ name, img, color, beats }) => {
            const moveLogic = new MoveLogic(name, beats);
            const moveUi = new MoveUi(img, color);
            return new Move(moveLogic, moveUi);
        });
    }

    createButtons() {
        // this.choices.forEach((el) => {
        //     const newButton = $("<button></button>");
        //     newButton.css("background-color", el.ui.color);
        //     newButton.on("click", () => {
        //       this.playRound(el);
        //     });
        //     const newImage = $("<img>").attr(
        //       "src",
        //       `./src/assets/images${el.ui.img}`
        //     );
        //     newButton.append(newImage);
        //     $(".choices").append(newButton);
        //   });
    }

    updateResult(text) {
        $(".result").text(text)
    }

}