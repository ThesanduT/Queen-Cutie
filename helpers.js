/*
# Copyright (C) 2020 Thesandu Thewsara.
#
# QueenCutie - ThesanduT
*/

function successfullMessage(msg) {
    return "β *Queen-Cutie*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Queen-Cutie*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Queen-Cutie*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
