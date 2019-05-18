
//Firebase User Auth
export function createUser(user){
    return fetch(`${process.env.API}/users`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        }
    })
}

export function signIn(email,password){
    return fetch(`${process.env.API}/users/login`,{
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
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
    let token = null
    return fetch(`${process.env.API}/${collection}`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type':'application/json',
            'token': token  ? token : null 
        }
    }
    
    )
}

export function list(collection){
    return fetch(`${process.env.API}/${collection}`)
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
