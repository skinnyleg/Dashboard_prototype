// Get the .profile button element
const profileButton = document.querySelector('.profile');

// Get the .container element
const container = document.querySelector('.container');

// Add an event listener to the profile button
profileButton.addEventListener('click', () => {
  // Toggle the display of the container when the button is clicked
  container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
  // container.style.borderBottom = '2px solid gray';
  // console.log(profileButton.style.borderBottom);
  // profileButton.style.borderBottom = 'none';
  profileButton.style.borderBottom = profileButton.style.borderBottom === 'none' ? '2px solid gray' : 'none';
  // container.classList.toggle('show');
});