 const next = document.getElementById('Next1');
 const back = document.getElementById('Back1');
 const submit = document.getElementById('submit');
 const progress = document.getElementById('progress');
 const form = document.getElementsByClassName('form-body')[0];
 const formStep = -360;
 let currentLeft = 0;

function updateFormPosition(){
    form.style.left = currentLeft + "px"
}


next.onclick = function(){
    if (currentLeft > -720){
        currentLeft += formStep
        progress.style.width = `${((currentLeft/formStep) + 1) * 120}px`
        back.style.display = 'inline'
        updateFormPosition()
    }
    if(currentLeft == -720){
        submit.style.display = 'inline'
        next.style.display = 'none'
        back.style.display = 'inline'
        updateFormPosition()
    
    }
   
}
back.onclick = function(){
    if(currentLeft < 0){
        progress.style.width = `${(currentLeft/formStep) * 120}px`
        currentLeft -= formStep
        updateFormPosition()
        
        }
        if(currentLeft == 0){
            back.style.display = 'none'
            next.style.display = 'inline'
            submit.style.display = 'none'
        }
        if(currentLeft == -360){
            submit.style.display = 'none'
            next.style.display = 'inline'
        }
    } 

