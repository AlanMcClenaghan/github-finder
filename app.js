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
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          if (data.profile.message) {
            ui.showAlert("You may have exceded GitHub's hourly request limit.", 'alert alert-danger');
          } else {
            // Show profile
            ui.showProfile(data.profile);
            // Show repos
            ui.showRepos(data.repos);
          }
        }
      })
  } else {
    // Clear the profile
    ui.clearProfile();
  }
});