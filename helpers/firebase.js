const firebase = require('firebase')
require('firebase/firestore')
const config = {
  apiKey: `AIzaSyAhKXW-Y3uyCbqsWZsHsKAEMN-pNS6--Wk`,
  authDomain: `fir-one-1a9f1.firebaseapp.com`,
  databaseURL: `https://fir-one-1a9f1.firebaseio.com`,
  projectId: `fir-one-1a9f1`,
}
firebase.initializeApp(config)
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  'login_hint': 'user@example.com'
})
const auth = firebase.auth()
const db = firebase.firestore()
module.exports = {
  firebase,
  provider,
  auth,
  db,
}