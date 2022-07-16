# README

## Prerequisites

### Technologies used in this application: 

* Ruby on Rails
* React
* Redux
* Google Cloud Platform
* Open ID Connect

### Versions Required:

* Ruby -> 2.7.5
* Rails -> 5.2.3
* React -> 16.8.0

## Installation

### Ruby on Rails

#### Windows
1. Go to https://rubyinstaller.org/downloads/ and install version 2.7.5
2. Run the installer and follow the steps to complete installation
3. Add path to the bin file in ruby to the PATH Environment variable
4. last step is to install rails 
```
$ gem install rails 5.2.3
```

#### MacOS
1. Use Homebrew to install ruby 
```
<<<<<<< HEAD
$ brew install ruby 2.7.5
=======
$ brew install ruby 2.7.2
```
$ gem install rails 5.2.3
```

### React 

1. install Node.js at https://nodejs.org/en/download/
2. install react
```
$ npm install react react-DOM
```
### Redux
Instructions on how to install React-Redux are found here https://www.npmjs.com/package/react-redux

### Google Cloud Platform
1. Install the Cloud SQL Auth Proxy at https://cloud.google.com/sql/docs/mysql/sql-proxy#install
2. Once installed move this file to the top level of Unify project folder

### Open ID Connect 
Everything needed to support this authentication flow can be found herehttps://www.npmjs.com/package/@azure/msal-react
```
npm install @azure/msal-react @azure/msal-browser
```

## Running locally

### Setup

1. Install required gems 
```
$ bundle 
```
or 
```
$ bundle install
```

2. Install required javascript dependencies
```
$ npm install
```

3. Set up Gcloud 
```
$ gcloud config set account unifyexchange@gmail.com

$ gcloud auth login
```
a login request will be sent to the unify account and code will be provided to whoever is logged into the unify email account 

contact Ryan about this he should be signed in and will send an authentication code

Lastly, set the project and your ready to run the application locally 
```
$ gcloud config set project unify-309723
```

### Running the app Locally

Three separate terminals need to be opened all within the project directory.

* In the first terminal run the following command to start the rails server
```
$ rails s
```

* In the second run this command to start react
```
$ npm start
```

* In the last Terminal run this command to start the Cloud SQL Proxy 
```
$ ./cloud_sql_proxy -instances="unify-309723:us-west2:unify-sql"=tcp:6543
```

With all of these running the app should be available on localhost:3000
 
