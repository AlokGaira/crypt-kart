const client = require('./client')
client.list({}, (error, notes) => {
  if (!error) {
  console.log('Successfully fetch Config List')
  console.log(notes)
} else {
  console.error(error)
}
})
