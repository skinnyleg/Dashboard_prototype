// Get the .profile button element


const buttonAll = document.querySelector('nav ul');

// const profileButton = document.querySelector('.profile');
// const navButton = document.querySelector('.nav');

// Get the .container element
// const container = document.querySelector('.container');

buttonAll.addEventListener('click', (event) => {

  const li = event.target.closest('li');
  const container = li.querySelector('.container');
  const button = li.querySelector('.btn');
  container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
  console.log(button);
  console.log('is profile here == ', button.classlist.contains('profile'));
  if (button.classlist.contains('profile')){
    button.style.borderBottom = button.style.borderBottom === 'none' ? '2px solid gray' : 'none';
  }

  console.log(li);
})

// Add an event listener to the profile button
// profileButton.addEventListener('click', () => {
//   // Toggle the display of the container when the button is clicked
//   console.log('hello1');
//   container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
//   // container.style.borderBottom = '2px solid gray';
//   // console.log(profileButton.style.borderBottom);
//   // profileButton.style.borderBottom = 'none';
//   profileButton.style.borderBottom = profileButton.style.borderBottom === 'none' ? '2px solid gray' : 'none';
//   // container.classList.toggle('show');
// });

// console.log(navButton);

// navButton.addEventListener('click', () => {
//   console.log('hello2');
//   // Toggle the display of the container when the button is clicked
//   container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
//   // container.style.borderBottom = '2px solid gray';
//   // console.log(profileButton.style.borderBottom);
//   // profileButton.style.borderBottom = 'none';
//   // profileButton.style.borderBottom = profileButton.style.borderBottom === 'none' ? '2px solid gray' : 'none';
//   // container.classList.toggle('show');
// });