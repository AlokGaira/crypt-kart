const client = require('./client')
client.find({ id: '5c050efa5b78451df54c88bc' }, (error, note) => {
  if (!error) {
    console.log(note);
  } else {
    console.error(error)
  }
})
