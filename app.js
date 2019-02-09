// Initialise GitHub
const github = new GitHub;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', () => {
  // Get input text
  const searchUserInput = searchUser.value;

  if (searchUserInput !== '') {
    // Make HTTP call
    github.getUser(searchUserInput)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          console.log('Not Found');
        } else {
          // Show profile
          console.log(data);
        }

      })
  } else {
    // Clear the profile
  }
});