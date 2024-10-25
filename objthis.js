let obj ={
    firstname: 'Avijit',
    lastname: 'Ghosh',
    fullname: function(){
        return this.firstname + ' ' + this.lastname
    }


}
console.log(obj.fullname())