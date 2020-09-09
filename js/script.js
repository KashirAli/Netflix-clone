const tab_1=document.querySelector('#tab-1');
const tab_2=document.querySelector('#tab-2');
const tab_3=document.querySelector('#tab-3');

tab_1.addEventListener('click',()=>{
    tab_2.classList.remove('tab-border');
    tab_3.classList.remove('tab-border');
    tab_1.classList.add('tab-border');
    document.querySelector('#tab-2-content').style.display='none';
    document.querySelector('#tab-3-content').style.display='none';
    document.querySelector('#tab-1-content').style.display='';
   
});
tab_2.addEventListener('click',()=>{
    tab_2.classList.add('tab-border');
    tab_3.classList.remove('tab-border');
    tab_1.classList.remove('tab-border');
    document.querySelector('#tab-1-content').style.display='none';
    document.querySelector('#tab-3-content').style.display='none';
    document.querySelector('#tab-2-content').style.display='block';
});
tab_3.addEventListener('click',()=>{
    tab_2.classList.remove('tab-border');
    tab_3.classList.add('tab-border');
    tab_1.classList.remove('tab-border');
    document.querySelector('#tab-1-content').style.display='none';
    document.querySelector('#tab-2-content').style.display='none';
    document.querySelector('#tab-3-content').style.display='block';
});