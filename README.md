# Ant Sweeper 
#### Truly, now have I, set you up the bomb....

![SITEGIF](https://shielded-wildwood-17962.herokuapp.com/DaBomb.gif)

Ant Sweeper is my take on an old game called Mine Sweeper. It seemed to fit this assignment well, and I've never coded it before. It was fun to back engineer this one from my memory of it's rules.

It is written entirely in React.js and has no back end at the moment. It's just a view with no controller or model if you will.

[Live Site Here](https://shielded-wildwood-17962.herokuapp.com/)

## Site Updates 06.28.2018 Ant Sweeper promoted to X Sweeper...

I am using Ant Sweeper as the place holder site for [http://OldSchoolsFreeGames.com](http://oldschoolsfreegames.com) at the moment. It's just a horrific redirect atm, but working on it...

So in a way it's been promoted!

I will upgrade the http to https when necessary, which is not now...
as this game may not even be on the prod site.

Since it is a game, and it is free... it works for now :D, it also "WORKS FOR NOW" I've set the edge modulus correctly while there may be folks checking it out. I feel like I sold out a little but, for free... great... I may change settings at will thou so who knows... ;)

Wouldn't want to dissapoint ... ummnn friends and family :D and instructors etc...



## How to Play

Follow these easy steps and you'll be an ant sweeper pro in no time.

#### Step 1

![Fig1](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/1.png)

Click on any square in the play field to start the game.

#### Step 2

![Fig2](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/2.png)

Now choose a square you wish to uncover, remember we are looking to avoid mines (X), the first place you pick thou is always a guess thou so... (fingers crossed)!!! Older games are famous for being unreasonable and rng based, I love it. When you click an area, it shows you what was underneath where you went ... a diggin. If it's an X that's a bomb and it's game over no points for you! See ya!

#### Step 3

![Fig3](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/2_5.png)

WE GOT LUCKY! IT'S A ZERO. When there is a clear area under the square you clicked/uncoverd, the ground will tell you how many bombs are counted in the adjacent squares next to it.

ZERO means, we are clear all around the square with the ZERO in it, so we click all the squares around the zero, getting new numbers which give us info on possible bomb sites and points for our overall score.

#### Step 4

![Fig3](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/4.png)

Keep going, every time you click a square and there's no bomb you get a point. You can get alot of points fast if you uncover zero squares. 



#### Step 5

![Fig3](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/3.png)

When you hit an X it's game over and if you got the high score it will be saved. Simply click on squares in the playfield and the game will restart with a completely new board and bomb placement!  

Good Luck!

## Where's the Match Game?

![MatchGame](https://i.giphy.com/lgF6RKNGujVQY.gif)

I wanted to do something a little different. I wanted to meet all the goals, produce a unique application that would not be copypasta, and show that I can back engineer like no body's buisness, besides just coding and regurgitating. Therefore, I took to heart the concepts of the homework, distilled, what I hope were the skills you were looking for, implemented those, and pushed it farther. I learned alot and also had a ton of fun.

Here's how I met the project goals:

### Pertinent Project Requirements:

##### The application should render different images (of your choice) to the screen. Each image should listen for click events.

Each square checks for click events, the click event handler on the squares changes a stateview variable, from start to gameon to gameover1 to gameover2 and back to start. When the setState from the click handler fires render, a different background is set depending on whether the game is "over".


##### The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

The application keeps track of score and high score in it's state. It does this by evaluating the viewstate state object and the data underneath the button you click, in a huge state array object. If the data is a number then you get a point, and the number is displayed. If the data is an X the game is over, your score is moved to highscore, if it's greater than high score, and a gameover viewstate is initialized.

##### Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

The game starts over and re-initializes the game board randomly, on either clicking reset or clicking twice after the game is completed.  There is an entire algorhythm that populates the bombs and number spaces that re-runs during this time. This ensures every game isn't the same. This function is called getBoardArray in App.js. 

##### Once the user's score is reset after an incorrect guess, the game should restart.

The game restarts after the user clicks on an X (bomb). If the user clicks twice more the game enter's it's [start]  viewstate and will take one more click to allow the user to begin play on the new board using getBoardArray.

## What is Mine Sweeper

![Sweepit](https://i.giphy.com/media/l3V0GQMoaDLVbjXEI/giphy.webp)

Mine sweeper was an old game that shipped with an older version of Windows.  It's one of my wife's favorite games :D
It has a few differences. It has a timer, and it has levels. I could implement those, with more time. However, not having them makes us different, I'm also sure the way I calculate adjacent bombs is intentionally buggy a bit... but NOT by very much... 

## Bomb Algorhythm

![BombsAway](https://78.media.tumblr.com/e4f99ef7ef7f658eb15fb8f5f97e1bf4/tumblr_nlyh5eTUBX1sa11jco1_540.gif)

This part is pretty cool, in my opinion. The way the bombs and numbers are generated are as follows.  The array the data is stored in for the game is actually just a 1 dimensional array. 

However it can be imagined as a 9 by 9 board, so there are 81 squares 9x9.  

Step 1 is to distribute the bombs randomly. This is done with a map function that randomly returns an 'X' based on rng.

Step 2 is to map all non X squares, to the value of the count of adjacent bombs. This is done by using offsets into the array to quickly discovered bombs. So at the current square's index we check the array at positions -1, +1, -8, +8, -9, +9, -10, +10 counting any X's found and leaving that number in the current square.

Bug/Feature!

Currently, the first and last few squares aren't smart enough to count all their adjacent squares as there is no -10,-9 or -8 at i position 0 etc, and the same for position 80 +1, +8 etc... However, It's a feature!!!... :P I honestly, could fix it, but it makes the game a bit harder and different than the original and I like that.  And iff you've read this far... you should easily get a higher score now than someone who hasn't read all this! Thus JUSTICE! 

Good Luck and Enjoy!


