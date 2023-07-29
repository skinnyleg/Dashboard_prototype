
const buttonAll = document.querySelector('nav ul');






function closeAllContainers(cont) {
  const li = buttonAll.querySelectorAll('li');
  // console.log(li);
  li.forEach(elem => {
    const container = elem.querySelector('.container');
    const profile = elem.querySelector('.profile');
    if (profile == null)
    {
      if (container != null && container != cont)
        container.style.display =  'none';
    }
  })
  // for (int i = 0; buttonAll.)
}






buttonAll.addEventListener('click', (event) => {

  const li = event.target.closest('li');
  const container = li.querySelector('.container');
  const button = li.querySelector('.btn');
  const profile = li.querySelector('.profile');
  if (container != null)
  {
    if (profile == null)
      closeAllContainers(container);
    container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
  }
  
  if (profile != null)
  {
    button.style.borderBottom = button.style.borderBottom === 'none' ? '1px solid gray' : 'none';
    if (button.style.borderBottom === '1px solid gray')
    {
      container.style.borderBottom =  'none';
    }
    else
    {
      container.style.borderBottom = '1px solid gray';
    }
  }
})
