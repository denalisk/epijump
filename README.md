# "Epijump" A simple jumping game

#### _Epijump_, 04.11.2017

### By _Sam Kirsch_ and _Lawrence Eby_

## Description

#### A simple game built using Typescript with the HTML5 canvas element and Angular. Users can enter a name and use the arrow keys to navigate the block player character up the constantly falling platforms. The score tics up the longer the player stays above the bottom of the playing field, and high-scoring users will be saved in a firebase database. Not mobile friendly, unfortunately.

## Specifications

* Users can enter a player name
* Users can play using the arrow keys and accumulate points as they stay above the bottom of the screen
* User scores are stored locally as they die
* High-scoring users are saved to the database

#### Known Issues

* The right side of the playing view is notoriously sensitive when it comes to the infinity transition

#### Next Steps

* Smooth out the graphics

## Setup

> Project is [hosted on firebase](https://epijump.firebaseapp.com)

##### To install locally:
* Requires angular-cli
* Clone this repository
* Attach firebase database in src/app/api-keys.ts as an exported variable "masterFirebaseConfig".
* Run "npm install" and "bower install"
* Run "ng serve" and visit localhost:4200

### Technologies Used

* HTML and CSS
* JavaScript: Typescript and Angular

[github link for this project](https://github.com/denalisk/epijump)

##### Copyright (c) 2017 Sam Kirsch and Larry Eby.

##### Licensed under the MIT license.
