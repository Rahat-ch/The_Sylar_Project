# The Sylar Project

Production Link 👉 https://www.sylarproject.com/

## Prerequisites

You will need [Node.js](https://nodejs.org) version 11.0 or greater installed on your system.

## Setup

Make a fork of this repository and make sure that your code is up to date with the develop branch not main. Main is what is in production however you will be making a pull request to the develop branch make sure to keep things up to date there.

Once you clone your fork, open the terminal in the project directory, and install dependencies with:

```
npm install
```

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000 🚀

Note: If you do not have an API key for the Airtable Database, please uncomment the code in 
```
pages/api/getResources
```

## Contributing

Create a branch with your work. Make sure your branch is up to date with the develop branch on this repo! Your branch should be named using your initials and the feature you worked on. For example if I added more mental health resources to the API I would name my branch like this:

```
rc/addApiResources
```

Open a pull request to the develop branch and once reviewed if no changes are needed your code will be merged in!

## Custom Sylar Project for your Local Community

If you would like to build a custom version of the Sylar Project for your country or community I encourage it! You can use the Deploy to Digital Ocean Button below and get a working deployment of this right away. Make a PR to this Readme with the link to your version so I can feature it here!

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/Rahat-ch/{The_Sylar_Project}/tree/{main})
