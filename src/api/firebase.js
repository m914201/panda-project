import Vue from 'vue'
// import 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

// firebase
//   .firestore()
//   .collection('test')
//   .add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
