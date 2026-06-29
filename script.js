
const roles=[

"Flutter Developer",

"Android Kotlin Developer",

"AI Powered Mobile Engineer"

];


let i=0;

let j=0;


let typing=document.getElementById("typing");



function type(){


if(j < roles[i].length){

typing.innerHTML += roles[i][j];

j++;

setTimeout(type,100);


}

else{

setTimeout(erase,1500);

}


}




function erase(){


if(j>0){


typing.innerHTML =
roles[i].substring(0,j-1);


j--;

setTimeout(erase,50);


}

else{


i=(i+1)%roles.length;

setTimeout(type,500);


}


}



window.onload=type;
