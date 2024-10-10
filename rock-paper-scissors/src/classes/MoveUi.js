import $ from "jquery";

export default class MoveUi {
  constructor(img, color) {
    this.img = img;
    this.color = color;
  }

  // make it optionally selectionable

  createMoveTemplate(state) {
    return `
        <div class="${state}-${this.color}">
          <div class="outside circle ${this.color} bigger">
            <div class="inside circle white smaller">
              <img src="./src/assets/images/${this.img}" alt="scissors">
            </div>
          </div>
        </div>`;
  }

  addClickeableEvent(gameLogic, move) {
    $(".choices").append(this.createMoveTemplate("clickeable"));
    const divMove = $(`.clickeable-${this.color}`);
    divMove.on("click", () => {
      gameLogic.playRound(move);
    });
    divMove.addClass("clickeable");
    divMove.children("div").addClass(`${this.color}-pos`);
  }

  selectedMove(player) {
    $(`.${player}-move-ui`).html(this.createMoveTemplate("selected"));
    const divMove = $(`.selected-${this.color}`);
    divMove.children("div").css("position", "static")
    divMove.addClass("selected")
  }
}
