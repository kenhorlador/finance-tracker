import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBaor4j3tWR6vQNdUlf275C0PI_T3By9jQ",
  authDomain: "finance-tracker-aa783.firebaseapp.com",
  projectId: "finance-tracker-aa783",
  storageBucket: "finance-tracker-aa783.appspot.com",
  messagingSenderId: "191669383853",
  appId: "1:191669383853:web:0d8a9f97ce9f5f45c70c24"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
