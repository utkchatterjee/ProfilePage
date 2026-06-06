const btn=document.getElementById('Darkmode')
const t=document.querySelector('body')

function dark()
{
    t.classList.toggle('dark');
    if(btn.style.background=='white')
    {btn.style.background= 'black';
        btn.style.color='white';
    }
    else
    {
        btn.style.background= 'white';
        btn.style.color='black';
    }
}