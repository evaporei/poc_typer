# poc_typer

This is a typeracer clone using `node.js`, `socket.io` and `react`.

## How to run

There are two main folders, `backend` and `frontend`. The `backend` is a HTTP server which uses the production build of the `frontend` to serve the `react` app of any request given on `PORT` `8080`.

### frontend

The idea is that you have to run both `frontend` and `backend` together, so even though the `frontend` was built using `create-react-app` and has a way to run by itself, it should not be used in this way.

The way this should be used is just running `npm run build` on this folder and then the rest will be handled on the `backend`.

### backend

Before running the `backend` you should build the `frontend`. After that just use `npm run build` on the `backend` too, so that is generates all the transpiled code (ES6 -> ES5). After that just use `npm start` and you will be good to go :)
