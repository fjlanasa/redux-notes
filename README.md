Demo Site: http://redux-notes.herokuapp.com

### About

This is a single-page note-taking application using a PostreSQL database and Rails API on the back-end and a React/Redux front-end. Omniauth was used to allow sign-in through Facebook, Twitter, and Google. Foundation was used for basic styling.

### Download
```
git clone https://github.com/fjlanasa/volunteer-meetup.git
cd volunteer-meetup
bundle install
rake db:create
rake db:migrate
npm install
npm start
```
(In a seperate tab: `rails s` to start the server)

You will need to create a `.env` file in the root directory of the project, including a line setting your Google Maps API key, like so:

```
FACEBOOK_ID=[YOUR_FACEBOOK_ID]
FACEBOOK_SECRET=[YOUR_FACEBOOK_SECRET]
TWITTER_ID=[YOUR_TWITTER_ID]
TWITTER_SECRET=[YOUR_TWITTER_SECRET]
GOOGLE_ID=[YOUR_GOOGLE_ID]
GOOGLE_SECRET=[YOUR_GOOGLE_SECRET]
```
