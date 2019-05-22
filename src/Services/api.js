
//USER CRUD
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
            'Content-Type':'application/json', 
        }
    })
}
export function signOut(){
    return firebase.auth().signOut()
}
export let validateAuth = new Promise((resolve, reject) => {
    if(localStorage.getItem("user"))    
      resolve(localStorage.getItem("user"))
    else 
      reject()   
})

export function where(collection,condition){
	return fetch(`${process.env.API}/${collection}/${condition}`)
}

export function profile(collection,condition){
	return fetch(`${process.env.API}/${collection}/${condition}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'token': localStorage.getItem('token')
        }
    })
}


//MongoDB categories fecths
export function create(collection, obj){
    return fetch(`${process.env.API}/${collection}`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type':'application/json',
            'token': localStorage.getItem("token")
        }
    }
    )
}


export function list(collection){
    return fetch(`${process.env.API}/${collection}`)
}


export function update(user){
    return fetch(`${process.env.API}/users`,{
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json',
            'token': localStorage.getItem('token')
        }
    })
}

export function remove(key){
    
    return fetch(`${process.env.API}/categories`,{
        method: 'DELETE',
        body: JSON.stringify(key),
        headers: {
            'Content-Type':'application/json',
            'token': localStorage.getItem('token')
        }
    })
}



export function removeprods(collection,key){
    return fetch(`${process.env.API}/${collection}`,{
        method: 'DELETE',
        body: JSON.stringify(key),
        headers: {
            'Content-Type':'application/json',
            'token': localStorage.getItem('token')
        }
    })
}


export function createTerm(product){

    return fetch(`${process.env.APISCRAPPY}update?term=${product}&key=cool_kids_program_in_ruby`,
    {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        }
    }
    )
}

export function updateTerm(product){
    return fetch(`${process.env.APISCRAPPY}update?term=${product}&key=cool_kids_program_in_ruby`)
}


export function listScrappy(term,page){
    return fetch(`${process.env.APISCRAPPY}search?term=${term}&page=${page}`)
}

export function removeScrappy(product){
    return fetch(`${process.env.APISCRAPPY}delete?term=${product}&key=cool_kids_program_in_ruby`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
        }
    })
}

//firebase storage
export function upload(file,name){
    return firebase.storage().ref("/Images/"+name).put(file).then(function(snapshot) {
        console.log('Upload a images!');
      });      
}
