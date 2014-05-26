var Event = require("geval")
console.log('Event', Event);
var document = require("global/document")

var clicks = Event(function (broadcast) {
    document.addEventListener("click", function (ev) {
        broadcast(ev)
    })
})

var removeListener = clicks(function listener(ev) {
    console.log('click happened', ev)
})

