var add = document.querySelector('#follow')
var emial = document.querySelector('#emial')
var plus= document.querySelector('#inc')
var a = 0;

follow.addEventListener("click", function(){
    if( a == 0){
    follow.style.backgroundColor = "#C0C0C0"
    follow.style.color = "black"
    follow.innerHTML = "Following"
    plus.innerHTML = 1
    a++
}
else{
    follow.style.backgroundColor = "blue"
    follow.style.color = "white"
    follow.innerHTML = "Follow"
    plus.innerHTML = 0
    a--
}
})





