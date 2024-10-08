import $ from "jquery"

export default class MoveUi {

    constructor(img, color) {
        this.img = img
        this.color = color
        this.buildButton()
    }

    // make it optionally selectionable

    buildButton() {
        const buttonTemplate = `
        <div class="move">
          <div class="outside circle ${this.color} bigger">
            <div class="inside circle white smaller">
              <img src="./src/assets/images/${this.img}" alt="scissors">
            </div>
          </div>
          <div class="outside-shadow"></div>
        </div>`

        $(".choices").append(buttonTemplate)
    }

}