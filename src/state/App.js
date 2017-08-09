var db = firebase.database(),
    storage = firebase.storage(),
    auth = firebase.auth()

var App = {
  username:'jullinator',
  userReady(user){
    var userId = user.id //check if correct
    db.ref('userImages').child(userId).on('value', snap =>{this.userImages = snapToArray(snap)})
  },
  //firebase stores
  userImages:[]
}

function snapToArray ({snap, array}){
  array = []
  snap.val().forEach(child=>{
    Object.keys()
    array.push({id:child.key, })
  })
}

global.App = App
