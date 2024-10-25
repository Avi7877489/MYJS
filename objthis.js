let obj ={
    firstname: 'Avijit',
    lastname: 'Ghosh',
    fullname: function(firstname,lastname){
        return this.firstname + ' ' + this.lastname
    }


}
console.log(obj.fullname())