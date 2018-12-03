const client = require('./client')
let newNote = {
  "jwt_secret": "jwt",
  "timeout_in_ms": "jwtet",
  "remote_db_url": "jwt",
  "remote_db_port": 23,
  "id": "5c050f045b78451df54c88bd"
}
client.update(newNote, (error, note) => {
  if (!error) {
    console.log('Config record successfully updated')
  } else {
    console.error(error)
  }
})
