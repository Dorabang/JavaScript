const h1 = document.querySelector('.title h1');

function handleTitleClick(){
  h1.classList.toggle('active');

/* 
  위 코드와 같은 기능
  const activeClass = 'active';

  if (h1.classList.contains(activeClass)) {
    h1.classList.remove(activeClass);
  } else {
    h1.classList.add(activeClass);
  } */

}

h1.addEventListener('click', handleTitleClick);