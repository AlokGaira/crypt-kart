const client = require('./client')
let newNote = {
  "jwt_secret": "jwt",
  "timeout_in_ms": "jwt",
  "remote_db_url": "jwt",
  "remote_db_port": 23
}
client.insert(newNote, (error, note) => {
  if (!error) {
    console.log('New Config created successfully')
  } else {
    console.error(error)
  }
})
