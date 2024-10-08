import $ from "jquery";
import "./src/css/style.css";
import GameLogic from "./src/classes/GameLogic";

const main = () => {

  $(document).ready(function () {

    const game = new GameLogic()

    $(".versus").hide();
    $(".rules").hide();

    $(".play-again").on("click", function () {
      $(".choices").show();
      $(".versus").hide();
    });

    $(".button-rules").click()

  });

};

main();
