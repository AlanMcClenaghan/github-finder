/* 
client_id and client_secret variables 
set in api-key.js
user can get their own credentials at 
https://github.com/settings/applications/new
*/

class GitHub {
  constructor() {
    this.client_id = client_id;
    this.client_secret = client_secret;
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    /* If no Github credentials are available,
    the following code can be use to test the app.
    GitHub limits the number of rquests 
    and rate at which requests can be made. */
    // const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}