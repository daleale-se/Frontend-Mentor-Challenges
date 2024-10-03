import $ from "jquery"

export default class Score {

    constructor() {
        this.score = 0;
    }

    increaseScore() {
        this.score++
    }

    update() {
        $(".score").text(this.score)
    }

}