# MERN-BOILERPLATE

`yarn development`: This command will get `Nodemon`, `Webpack`, and the `server` started for `development`.
`yarn build`: This will generate the client and server code bundles for production mode (before running this script, make sure to remove the devBundle.compile code from server.js).
`yarn start`: This command will run the bundled code in production.



1. Run the application from the command line: `yarn development`.
2. Load in browser: Open the root URL in the browser, which is `http://localhost:3000` if you are using your local machine. You should see a page with the title MERN Kickstart that just shows Hello World!.
3. Develop code and debug live: Change the `HelloWorld.js` component text from "Hello World!" to just "hello". 
   Save the changes to see the instantaneous update in the browser, and also check the command-line output to see that bundle.js is not re-created. Similarly, you can also see instant updates when you change the server-side code, increasing productivity during development.
