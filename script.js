crossBtn = document.querySelectorAll('.box > header > img');

// crossBtn.forEach(element => {
//     element.addEventListener('click', ()=>{
//     if(Box.getElementsByClassName('hidden').length > 0){
//         showDisc();
//     }else{
//         hideDisc();
//     }
// })
// });

for(let i=0; i<crossBtn.length; i++)
{        
    crossBtn[i].addEventListener('click', ()=>
    {
        console.log(crossBtn[i]);
        Box = (crossBtn[i].parentNode.parentNode);
        console.log(Box);

        if(Box.getElementsByClassName('hidden').length > 0)
        {
            showDisc(Box);
        }
        else
        {
            hideDisc(Box);
        }
                
            
    })
    
}

function hideDisc(box){
    console.log('hide disc');
    box.classList.add("box");
    box.classList.remove("box-open");
    box.getElementsByClassName('box-description')[0].classList.add("hidden");
    let activeCrossBtn = box.querySelector('header > img');
    activeCrossBtn.src = "resources/dropdown.png";
    activeCrossBtn.classList.add('dropdown-btn');
    activeCrossBtn.classList.remove('cross-btn');
}


function showDisc(box){
    console.log('show disc');
    box.classList.remove("box");
    box.classList.add("box-open");
    box.getElementsByClassName('box-description')[0].classList.remove("hidden");
    let activeCrossBtn = box.querySelector('header > img');
    activeCrossBtn.src = "resources/cross.png";
    activeCrossBtn.classList.remove('dropdown-btn');
    activeCrossBtn.classList.add('cross-btn');
}    

