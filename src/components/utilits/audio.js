import {URLs} from './constant'

function playRight() {
    const audio = new Audio(URLs.audioCorrect);
audio.play()
}

function playWrong() {
    const audio = new Audio(URLs.audioError);
    audio.play()
}

export { playRight, playWrong }
