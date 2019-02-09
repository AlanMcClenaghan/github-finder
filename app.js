// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', () => {
  // Get input text
  const searchUserInput = searchUser.value;

  if (searchUserInput !== '') {
    console.log(searchUserInput)
  }
});