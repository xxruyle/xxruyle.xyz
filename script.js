
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
                makeVisibile(entry.target) 
            } else {
                entry.target.classList.add('hidden');  
            }
        }

    })
  }

  let observer = new IntersectionObserver(callback, {
    threshold: [0.5] 
  });


const arrowDown = document.querySelector('.material-symbols-outlined');

let prevScrollPos = window.pageYOffset; 

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    arrowDown.classList.remove('hidden'); 
  } else if (prevScrollPos < currentScrollPos) {
    arrowDown.classList.add('hidden'); 
  }

  prevScrollPos = currentScrollPos; 
});




const projectDisplays = document.querySelectorAll('.project-display, .experience-container, .project-container-title'); 


projectDisplays.forEach(pDisplay => {
    if (pDisplay) 
        observer.observe(pDisplay);  
})



