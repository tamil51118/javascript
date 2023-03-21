'use strict'
const model=document.querySelector('.modal');
const overlay=document.querySelector('.overlay')
const btnCloseModel=document.querySelector('.close-modal')
const btnShowModel=document.querySelectorAll('.show-modal')
const closeModal=function(){
    model.classList.add('hidden');
overlay.classList.add('hidden');
}
const openModel=function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i=0;i<btnShowModel.length;i++)
 btnShowModel[i].addEventListener('click',openModel);


 btnCloseModel.addEventListener('click',closeModal);
 overlay.addEventListener('click',closeModal);

 document.addEventListener('keydown',function(e){
if(e.key === 'Escape'&& !model.classList.contains('hidden')){
    closeModal();
}
 })



