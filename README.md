# Frontiers23

Robbie Oleynick, WPI ECE/CS '24 (rpoleynick@wpi.edu)

Welcome to the class project GitHub! As we complete projects, the code in this repository will be updated. If you fall behind, or something isn't working right, navigate to this repository on your computer and run `git pull`.

## Git Essential Commands

| Command | Action |
| --- | --- |
| `git status` | Report the current status of files in the working directory |
| `git log` | Show list of recent commits and head of branches |
| `git remote` | Show list of remote repositories (ideally just `origin`) |
| `git pull` | Pull changes from remote repository |
| `git add .` <br /> `git add file.txt` | Add file(s) to the staging area |
| `git restore --staged .` | Remove all files from the staging area |
| `git commit -m "info"` | Commit files in staging area with commit message "info" |
| `git push` | Push changes to remote repository |


## 00-intro

The `intro` project will demonstrate how JavaScript code interfaces with HTML elements and style attributes.

## 01-numgame

The `numgame` project will introduce the basics of HTML interaction using JavaScript.

## 02-dice3d

The `dice3d` project will demonstrate advanced features of CSS, namely translations in 3D. JavaScript is used to load in the graphical features, and to randomize the dice roll.

## 03-clickgame

The `clickgame` project will introduce JavaScript through a native HTML/CSS/JS framework for a "cookie clicker" style game. Simple graphics are implemented using dynamically controlled HTML elements like `<div>`.

Project improvement ideas:

- Change aesthetics (pictures, colors, add sounds)
- Change gameplay (point values, mechanics)
- Optimize display (separate by category, hide extra)

## 04-ponggame

The `ponggame` project will demonstrate interactive graphics using a clocked routine. Basic kinematic physics are used to describe the ball, and objects are used to store information about the paddles and ball. Key event listeners obtain keypress information from the document and control the paddle objects.

Project improvement ideas:

- Change aesthetics (add sound effects, change appearance)
- Add CPU player (multiple difficulties, etc)
- Add power-ups (for both players, random player, losing player)

## 05-owmapi

The `owmapi` project will show how websites can access data from server endpoints. Using the free API service from [OpenWeather](https://openweathermap.org), a location can be geocoded to find the coordinates, and the coordinates can be queried to receive the current and forecasted weather.

> [!NOTE]
> The APIKEY constant in `display.js` must be set to a user-generated API key from https://home.openweathermap.org/api_keys. This grants access to current weather, 5 day, 3 hour forecasts, geocoding, and air quality reports. A class API key is currently load, but will be deactivated in the future.

The starter code includes 4 sets of fake API calls in `testjson`, which are used when the test buttons are pressed in the developer toolbar at the top of the page.

Project improvement ideas:

- Change aesthetics
- Improve layout for mobile devices
- Load weather when site loads (remove developer toolbar)

Use case ideas:

- Should I wear a mask if I am sensitive to certain pollutants?
- Which state park should I visit?
- Which beach has the best weather tomorrow?
- Which outfit should I wear from a selection of clothing items?

## 05x-nwsapi

The `nwsapi` project is an unfinished alteration of the `owmapi` project which uses the National Weather Service API instead of the OpenWeather API. NWS does not require an API key, but does not work for locations outside the US, does not include geocoding (location to coordinate conversion), and does not have properly categorized weather conditions (rain, snow, cloud, clear, etc). Overall, the API is less developer- and beginner-friendly than the OpenWeather version.