
const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


});



document
.querySelectorAll(".fade")
.forEach(
(el)=>observer.observe(el)
);






const roles=[

"Flutter Developer",

"Android Kotlin Developer",

"AI Powered Mobile Engineer"

];



let role=0;

let char=0;


const typing=document.getElementById("typing");



function type(){


if(char < roles[role].length){


typing.innerHTML += roles[role][char];

char++;


setTimeout(type,100);


}

else{


setTimeout(erase,1500);


}


}




function erase(){


if(char>0){


typing.innerHTML =
roles[role].substring(0,char-1);


char--;


setTimeout(erase,50);


}

else{


role=(role+1)%roles.length;


setTimeout(type,500);


}



}




window.onload=type;
