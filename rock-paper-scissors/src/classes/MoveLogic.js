export default class MoveLogic {

    constructor(name, beats) {
        this.name = name
        this.beats = beats
    }

    playsAgainst(otherPlayerMove) {
        return otherPlayerMove.tryBeats(this.name)
    }

    tryBeats(moveName) {
        return this.beats.includes(moveName) ? -1 : 1
    }

}