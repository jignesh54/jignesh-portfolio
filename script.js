index.html:
script.js:
const observer = new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
      entry.target.classList.add("show");
   }
 });
});
document.querySelectorAll('.fade').forEach(el=>{
 observer.observe(el);
});
const roles=[
 "Flutter Developer",
 "Android Developer",
 "AI Driven Mobile Engineer"
];
let roleIndex=0;
let charIndex=0;
const typing=document.getElementById("typing");
function type(){
 if(!typing) return;
 if(charIndex<roles[roleIndex].length){
   typing.innerHTML+=roles[roleIndex].charAt(charIndex);
   charIndex++;
   setTimeout(type,100);
 }else{
   setTimeout(erase,1500);
 }
}
function erase(){
 if(charIndex>0){
   typing.innerHTML=roles[roleIndex].substring(0,charIndex-1);
   charIndex--;
   setTimeout(erase,50);
 }else{
   roleIndex=(roleIndex+1)%roles.length;
   setTimeout(type,500);
 }
}
window.onload=type;
