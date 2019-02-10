// Initialise GitHub
const github = new GitHub;
// Initialise UI
const ui = new UI;

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
          ui.showProfile(data.profile);
        }

      })
  } else {
    // Clear the profile
  }
});