# Epijump

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Installation
* Requires angular-cli
* Clone repository
* Attach firebase database in src/app/api-keys.ts as an exported variable "masterFirebaseConfig".
* Run "npm install" and "bower install"
* Run "ng serve" and visit localhost:4200

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

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
