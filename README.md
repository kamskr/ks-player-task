# Music Player

Project can be previewed here: https://musicapp-40892.firebaseapp.com/

## Storybook

I used story book for simpler development of individual components.
To preview the component tree run: npm run storybook

## Slider

The main slider was made with Slick.js: https://react-slick.neostack.com/docs/get-started

## Media controll bar

Redux was used for managing the state of song. You can use the buttons to go to next/previous song, play/pause, and toggling repeat/shuffle states.

## Progress Section

I calculated the percentage of how long the song plays and how much is left.
The progress bar was made with input slider, thanks to that you can hold and drag to desired moment in the song.

## Sound Wave

To create sound wave I used simple canvas. The wave moves at random speeds only if the song is playing.

## Animations

For button-click animations I used simple transform: scale().
For the slidig from right and button of "more" and "playlist" I used react-transition-group: https://reactcommunity.org/react-transition-group/
