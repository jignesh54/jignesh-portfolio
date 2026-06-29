const roles=[

"Flutter Developer",

"Android Kotlin Developer",

"AI Powered Mobile Engineer"

];


let a=0;

let b=0;


let text=document.getElementById("typing");



function write(){


if(b<roles[a].length){


text.innerHTML += roles[a][b];

b++;

setTimeout(write,100);


}

else{


setTimeout(remove,1500);


}

}



function remove(){


if(b>0){


text.innerHTML=
roles[a].substring(0,b-1);


b--;

setTimeout(remove,50);


}

else{


a++;

if(a>=roles.length)

a=0;


setTimeout(write,500);


}

}



window.onload=write;
