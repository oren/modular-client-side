var changeEvent = require('value-event/change')

var listener = function (data) {
  console.log('data', data.changed, data.foo)
}

var elem = document.getElementById('my-app')

elem.addEventListener('input', changeEvent(listener, {
    changed: true
}))
