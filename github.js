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
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    /* If no Github credentials are available,
    the following code can be used to test the app.
    However, GitHub limits the number of requests 
    and rate at which requests can be made. */
    // const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    // const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}