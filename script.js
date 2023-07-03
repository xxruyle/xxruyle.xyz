
let makeVisibile = function(entry)  
{
    entry.classList.remove('hidden');  
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry)
        {
            if (entry.isIntersecting) 
            {
                console.log('hello');
                makeVisibile(entry.target) 
            } else {
                console.log('goodbye'); 
                entry.target.classList.add('hidden');  
            }
        }

    })
  }

  let observer = new IntersectionObserver(callback, {
    threshold: [0.5] // If 50% of the element is in the screen, we count it!
    // Can change the thresholds based on your needs. The default is 0 - it'll run only when the element first comes into view
  });


const arrowDown = document.querySelector('.material-symbols-outlined');

window.addEventListener('scroll', () => {
    arrowDown.classList.add('hidden'); 
})




const projectDisplays = document.querySelectorAll('.project-display'); 


projectDisplays.forEach(pDisplay => {
    if (pDisplay) 
        observer.observe(pDisplay);  
})



