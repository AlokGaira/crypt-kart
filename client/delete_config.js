const client = require('./client')
client.delete({ id: '5c050f045b78451df54c88bd' }, (error, _) => {
  if (!error) {
    console.log('Note Has been successfully deleted')
  } else {
    console.error(error)
  }
})
