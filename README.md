# Random Password Generator

## Description

I've created a random password generator that allows employees to choose specific criteria to include within their password. This password generator requires the user to choose a certain character length that must be betweeen 8 and 128 charters. It allows them to customize their password by agreeing to include certian criteria. If a user decides to opt out of all criteria than the function will default to a specific character list. 

## Installation

N/A

## Usage
The user can click on the "generate password" button and this will trigger an event listiner that will open up prompts for them to chose the criteria of the random password. The first prompt will allow them to chose the length of the password within a min and max length. If they choose a character length outside of the specified character length it will alert them to choose within the specified length. It will then move on to prompts to choose the character criteria of their password. 

* The first prompt will allow them to "agree" or "cancel" to include numbers within the password. 

*  The next prompt will allow them to "agree" or "cancel" to include special characters within the password.

*   The next prompt will allow them to "agree" or "cancel" to include uppercase within the password.

*  The last prompt will allow them to "agree" or "cancel" to include lowercase within the password.

After all citeria has been chosen the random password will display in the password box on the screen. If no citeria is chosen the character criteria will default to all numbers for the password. 

![](03-javascript-homework-demo.png)

## Git Pages Link 


## License
MIT License

Copyright (c) 2022 Robert
