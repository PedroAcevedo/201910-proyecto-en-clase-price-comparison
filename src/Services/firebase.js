import firebase from 'firebase'

const config = {
	apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDER
  }

firebase.initializeApp(config)
const database = firebase.database()
const auth = firebase.auth()


//Firebase User Auth
export function createUser(email,password){
    return auth.createUserWithEmailAndPassword(email, password)
}

export function signIn(email,password){
    return auth.signInWithEmailAndPassword(email, password)
}
export function signOut(){
    return firebase.auth().signOut()
}
export let validateAuth = new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user)=> {
      resolve(user)
    })
})


//Firebase CRUD
export function create(collection, obj){
    return database.ref(collection).push(obj)    
}

export function list(collection){
	return database.ref(collection)
}

export function where(collection,parameter,condition){
	return database.ref(collection).orderByChild(parameter).equalTo(condition)
}

export function update(collection,id,values){
    return database.ref(collection).child(id).update(values)
}

export function remove(collection, key){
    return database.ref(collection).child(key).remove()
}


//firebase storage
export function upload(file,name){
    return firebase.storage().ref("/Images/"+name).put(file).then(function(snapshot) {
        console.log('Upload a images!');
      });      
}
