# GitHub Finder
API project 2 from Brad Traversy's Modern JavaScript From The Beginning course

GitHub Finder app allows users to search GitHub for profiles and repos:
  * Each 'keyup' event triggers a search for profiles and repos
  * If the search return a user, the profile and repos are displayed in the UI
  * Otherwise, a "User not found" warning is displayed for 3 seconds

To view profiles, users must change the client_id and client_secret variables to strings constaining their GitHub credentials.

If users have no GitHub credentials, they can still test out the functionality of the app by commenting out the first set of profileResponse and reposResponse fetch requests and uncommenting the second set. This will allow them to make a limited number of searches.