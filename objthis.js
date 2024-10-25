let obj ={
    firstname: 'Avijit',
    lastname: 'Ghosh',
    fullname: function(first,last){

        if(first == undefined || last == undefined){
        return this.firstname + ' ' + this.lastname   // print under onj variable by defualt
    }else{
        return first + ' ' + last // print user input

    }
    }


}
console.log(obj.fullname())
console.log(obj.fullname('jagat','pal'))