# Twitter Analyst NodeJS Application

### Pull down the repo:
```
git clone https://github.com/derek-palmer/twitter-analyst.git {folder of your choice}
```
Navigate into the directory you just cloned

### Install dependencies (these dependencies are shown in the package.json) just fun the command below to install them.
```
npm install
```
### Create twitter access credentials:

1.  Go to [Twitter Application Management](https://dev.twitter.com/apps)
&nbsp;
2.  Sign in if you aren't already signed into Twitter.
&nbsp;
3.  Click Create New App
&nbsp;
4.  Fill out the required Application Details (no need for a callback URL)
&nbsp;
5.  Accept the agreement and click 'Create your Twitter application'
&nbsp;
6.  Click on the Keys and Access Tokens tab
&nbsp;
7.  Under Token Actions Click 'Create my access token'
&nbsp;
8.  You will now have the Consumer Key (CONSUMER_KEY), 	Consumer Secret (CONSUMER_SECRET), 	Access Token (ACCESS_TOKEN_KEY), Access Token Secret (ACCESS_TOKEN_SECRET) needed to pull tweets through the application.
<br />
    :rotating_light::warning: NOTE: DO NOT SHARE THESE CREDENTIALS WITH ANYONE OR PUT THEM DIRECTLY INTO THE APPLICATION :warning::rotating_light:
<br />
9.  Navigate to the root of the twitter-analyst application folder and create a .env file.
&nbsp;
10. Add your keys and secrets to the .env file (example below)

```
CONSUMER_KEY=(consumer key goes here, without the parens)
CONSUMER_SECRET=(consumer secret goes here)
ACCESS_TOKEN_KEY=(access token key goes here)
ACCESS_TOKEN_SECRET=(access token secret goes here)
```
### Start it up!

Make sure you're in the root of the directory and run the following command:

```
nodemon main.js --ignore db.json
```

If you don't use the ignore flag your server will get stuck into a loop (if you do this, use ctrl+C to end the loop)

You should see something like this:

```
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node main.js`
Server is up and running!


Check to make sure keys are being pulled from .env file
CONSUMER_KEY (consumer key)
CONSUMER_SECRET (consumer secret)
ACCESS_TOKEN_KEY (access token key)
ACCESS_TOKEN_SECRET (access token secret)
```

If any of the keys show as 'undefined' go back and check your .env file to make sure you entered the names and keys correctly. The application won't work correctly if you have an undefined key or secret.

To view the application go to: [localhost:8080](localhost:8080)

#Attribution(s):

Material Design bootstrap assets: [mdbootstrap](https://github.com/mdbootstrap/bootstrap-material-design)
Initial Application NodeJS course + mentorship: [Scotch School - Getting Started with Node.js](https://school.scotch.io/getting-started-with-nodejs)
