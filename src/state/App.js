var db = firebase.database(),
    storage = firebase.storage(),
    auth = firebase.auth()

class _App {
    constructor(){
        //firebase stores
        this.userFiles = {}

        //misc
        this.user = {}
    }

    userReady(user){
        this.user = user //check if correct
        db.ref('userFiles').child(this.user.uid).on('value', (snap) =>{
            this.userFiles = {}
            snap.forEach(image){
                var obj = {
                    get url(){
                        return storage.
                    }
                }
                Object.assign(obj, image.val())

                this.userFiles[image.key] = obj
            }
        })
    }

    uploadImage({image, name}){
        storage.ref(this.user.uid + '/' + name).put(image).then( (snap)=>{
            db.ref('userFiles'+'/'+this.user.uid).push({
                fileName:name,
                extension:'jpg',
                type:'image'
            })
        })
    }

}


global.App = new _App()
