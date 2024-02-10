let x = document.getElementById('menu');
 let menubtn = document.querySelector('.menubtn')
 let closebtn = document.querySelector('.closebtn')

 function openmenu(){
    x.style.display= "block"
    closebtn.style.display = "block"
    menubtn.style.display = "none"

 }
 function closemenu(){
    x.style.display= "none"
    closebtn.style.display = "none"
    menubtn.style.display = "block"

 }