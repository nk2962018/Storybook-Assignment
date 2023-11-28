# Run this application 
   Step 1:  git clone https://github.com/nk2962018/Storybook-Assignment.git

   Step 2:  cd storybook-assignment

   Step 3:  run 'npm install' in the terminal to install node_modules with all the dependencies required to run the application.The package.json file dictates what modules needs to be installed in the node_modules folder.

   Step 4: run 'npm run storybook'.Application will start on port  'http://localhost:6006/'.

   Step 5: Go to Landing page and explore the application.


# About this application.

    This is a Food App which displays resturants cards with details of the resturant.

    The user login (Fill any details in username and password and click login button) by filling the details in username and password and click the [Login] button.

    You should see a `Hello ${username}` message along with [Logout] button.

    Once [Logout] button is clicked the username and password field reappears.

    The list of card is populated with a `cardList` object of data present in Constants/constants.js.

    The 'Know more...' link opens in a new window taking us to details of that particular resturantin the browser.


# Getting Started with Create React App

## 1.  Create a react js application 

### `npx create-react-app storybook-app`

    This will create a react application with name storybook-app

### `npm start`

    This runs the react app in development mode.
    Open [http://localhost:3000] to view it in the browser.

    This page shows the default page of react app and it will reload when you make any changes.


## 2. Setup React Storybook

### `npx -p @storybook/cli sb init`
    The command can automatically detect the framework we are using from the package.json file and install the Storybook version of that framework.
    The dependencies `@storybook/react` gets added to package.json file.

### `npm run storybook`
    This runs the story book app on [http://localhost:6006] in the browser.

# 3. Insall bootstrap

### `npm Install Bootstrap`
    This installs the bootstrap in our application.Check the bootstrap dependencies in package.json.

    Now add `import 'bootstrap/dist/css/bootstrap.min.css';`
    in storybook/preview.js file.

# 4. Setup testing environment

### `npm install codeceptjs playwright --save`
    This installs the codeceptjs and gives the option to select the helper .Select Playwright.
    This also creates a default test file. 
    Verify these dependencies gets installed in package.json file.
    Check 'codecept.conf.js' to verify that Playwright helper is enabled.
    you can modify url according to your application.
### `npm codeceptjs init`
    This command will initialize codecpet project to create 'codecept.conf.js'
    It will ask questions for initial setup 

    ? Do you plan to write tests in TypeScript? 'No'
    ? Where are your tests located? '**./*_test.js'
    ? What helpers do you want to use? 'Playwright'
    ? Where should logs, screenshots, and reports to be stored? '**./output**'
    ? Do you want to enable localization for tests? 'English (no localization)'
    ? [Playwright] Base url of site to be tested 'set the url of the landing page'
    ? [Playwright] Show browser window 'Yes'

    You can manually change url in 'codecept.conf.js file aswell.

### `npx playwright intall`

    Install this in case the playwright gives any error.

### `npx codeceptjs run --steps`
    This command runs the test cases and you may see the browser is started.

### `npx codeceptjs run .\TestFiles\dashboard_test.js`

    In the current application you can run this command to execute the testcases.
    This command can be modified according to the path of you test files.

### `@storybook/addon-coverage`
    To check coverage add this script in your '.storybook/main.js'
    in addons[].
    Add coverage pluggin in  'codecept.config.js' file as shown below.
    {
        plugins: {
            coverage: {
            enabled: true
            }
        }
    }


### `npx nyc report --reporter html -t coverage`

    Create a coverage folder in your root directory.
    This command will create an html format of the coverage in coverage folder.
    Open index.html to see the coverage in browser.

### `npm run test:coverage`

    To check coverage in terminal add 'test:coverage': 'npx nyc codeceptjs run' in package.json file under scripts.
    Run the command in terminal to check the coverage in the terminal.

