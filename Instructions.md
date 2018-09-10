1. Get node.js
2. Create package.json: npm init -y
3. Install node sass: npm i node-sass
4. Create in package.json:

  "scripts": {
    "sass": "node-sass -w scss/ -o css/"
  },

  Where -w watches for scss folder (input), and -o for output in css. Now we can run script with sass shortcut NPM RUN SASS

5. Get font awesome