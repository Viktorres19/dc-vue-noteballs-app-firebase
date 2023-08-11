import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {

    }
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log('user: ', user)
        })
        .catch((error) => {
          console.log('error.message: ', error.message)
          /*const errorCode = error.code
          const errorMessage = error.message*/
        })
    },
    loginUser(credentials) {
      console.log('User logged in', credentials)
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log('user: ', user)
        })
        .catch((error) => {
          console.log('error.message: ', error.message)
          /*const errorCode = error.code
          const errorMessage = error.message*/
        })
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('User signed out')
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
})
