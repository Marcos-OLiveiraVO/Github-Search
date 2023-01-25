# Github-API-Proxy

The API will Search all client requests to the appropriate GitHub endpoint.

and will return determinates infors about the users, user details and user repositories.

## :rocket:Installation
To run the repositorie it's necessary clone the same.

```bash
$ git clone https://github.com/Marcos-OLiveiraVO/Github-API-Proxy.git
```

And use the following command to install the dependencies:

```bash
$ yarn 
```
Or

```bash
$ npm install 
```

## ✔  Running the App
Will run the app locallly on port : 3000

    $ yarn dev

## 🏗️  Running the Build
will transpile the code typescript to javascript.

    $ yarn build
    
## 🧪 Running the Tests
will execute the tests for the end-Points using jest.

    $ yarn jest
   
## 🏴󠁵󠁭󠀹󠀵󠁿 Routes
All routes end-Points for consuming the api.

    GET - /api/users?since={number} => return a list of GitHub users and the link for the next page.
    
    GET - /api/users/:username/details  => return the details of a GitHub user.
    
    GET - /api/users/:username/repos => return a list with all user repositories
 
 You can use the insomnia app to do the request for the API end-points.
 
![unknown_2023 01 25-00 48](https://user-images.githubusercontent.com/88260644/214475807-3d6918ea-21c0-462d-95e3-5e69a88fc3c3.gif)

Or 

You can Use the website API URL to make the request

Here is an Example: 

![unknown_2023 01 25-11 16](https://user-images.githubusercontent.com/88260644/214586920-104c946b-5aef-488f-b88f-ae45cbec0782.gif)


if you will test the api in the url I Recommend you use the extension called: JSON Beautifier & Editor.


<h4> 🛠 Project was made using the following technologies and concepts: <h4>

    - Node.
    - Express
    - Typescript.
    - jest.
    - axios.
