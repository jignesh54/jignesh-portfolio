const roles=[
"Flutter Developer",
"Android Kotlin Developer",
"AI Powered Mobile Engineer"
];


let x=0;
let y=0;

const typing=document.getElementById("typing");


function type(){

if(y<roles[x].length){

typing.innerHTML += roles[x][y];

y++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}



function erase(){

if(y>0){

typing.innerHTML =
roles[x].substring(0,y-1);

y--;

setTimeout(erase,50);


}

else{

x++;

if(x>=roles.length)

x=0;


setTimeout(type,500);


}

}


window.onload=type;
