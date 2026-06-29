const roles=[


"Flutter Developer",

"Android Kotlin Developer",

"AI Powered Mobile Engineer"


];


let roleIndex=0;

let charIndex=0;


const typing=document.getElementById("typing");



function typeText(){


if(charIndex < roles[roleIndex].length){


typing.textContent += 
roles[roleIndex].charAt(charIndex);


charIndex++;


setTimeout(typeText,100);


}

else{


setTimeout(deleteText,1500);


}


}




function deleteText(){


if(charIndex > 0){


typing.textContent = 
roles[roleIndex].substring(0,charIndex-1);


charIndex--;


setTimeout(deleteText,50);



}

else{


roleIndex++;

if(roleIndex >= roles.length){

roleIndex=0;

}


setTimeout(typeText,500);


}



}




window.onload=()=>{


typeText();


};
