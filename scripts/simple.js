let get = {
    id: function(id){
        return(document.getElementById(id))
    },
    class: function(clas){
        return(document.getElementsByClassName(clas))
    }
}
let log = {
    con: function(i){
        console.log(i)
    },
    al: function(i){
        alert(i)
    }
}