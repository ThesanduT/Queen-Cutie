/*
# Copyright (C) 2020 Thesandu Thewsara.
#
# QueenCutie - ThesanduT
*/

function successfullMessage(msg) {
    return "✅ *Queen-Cutie*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Queen-Cutie*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Queen-Cutie*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
