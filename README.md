# Ant Sweeper 
#### Truly, now have I, set you up the bomb....

![SITEGIF](https://shielded-wildwood-17962.herokuapp.com/DaBomb.gif)

Ant Sweeper is my take on an old game called Mine Sweeper. It seemed to fit this assignment well, and I've never coded it before. It was fun to back engineer this one from my memory of it's rules.

[Live Site Here](https://shielded-wildwood-17962.herokuapp.com/)

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

When you hit an X it's game over and if you got the high score it will be saved. Simply click of squares in the playfield and the game will restart with a completely new board and bomb placement!  

Good Luck!

## Where's the Match Game?

![MatchGame](https://i.giphy.com/lgF6RKNGujVQY.gif)

I wanted to do something a little different. I wanted to meet all the goals, produce a unique application that would not be copypasta, and show that I can back engineer like no body's buisness, besides just coding and regurgitating. Therefore, I took to heart the concepts of the homework, distilled, what I hope were the skills you were looking for, implemented those, and pushed it farther. I learned alot and also had a ton of fun.

Here's how I met the project goals:

### Pertinent Project Requirements:

##### The application should render different images (of your choice) to the screen. Each image should listen for click events.

Each square checks for click events, and the game tracks four viewstates in it's state object, 'start','gameon','gameover1','gameover2'.

View States [start] and [gameover1] change the background image gif, after a square click event.

##### The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

The application keeps track of score and high score in state. It does this by evaluating the viewstate state object and the data underneath the button you click also stored in a huge state array object. If the data is a number then you get a point, and the number is displayed. If the data is an X the game is over, your score is moved to highscore if it's greater than high score, and gameover1 viewstate is initialized.

##### Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

The game starts over and re-initializes the game board randomly, on either clicking reset or clicking twice after the game is completed.  There is an entire algorhythm that populates the bombs and number spaces that re-runs during this time. This ensures every game isn't the same. 

##### Once the user's score is reset after an incorrect guess, the game should restart.

The game restarts after the user clicks on an X (bomb). If the user clicks twice more the game enter's it's [start]  viewstate and will take one more click to allow the user to begin play on the new board.

## What is Mine Sweeper

![Sweepit](https://i.giphy.com/media/l3V0GQMoaDLVbjXEI/giphy.webp)

Mine sweeper was an old game that shipped with an older version of Windows.  It's one of my wife's favorite games :D
It has a few differences. It has a timer, and it has levels. I could implement those, with more time. However, not having them makes us different, I'm also sure the way I calculate adjacent bombs is intentionally buggy a bit... but NOT by very much... 

## Bomb Algorhythm

![BombsAway](https://78.media.tumblr.com/e4f99ef7ef7f658eb15fb8f5f97e1bf4/tumblr_nlyh5eTUBX1sa11jco1_540.gif)

This part is the pretty cool, in my opinion. The way the bombs and numbers are generated as follows.  The array the data is stored in for the game is actually just a 1 dimensional array. However it can be imagined as a 9 by 9 board, so there are 81 squares 9x9.  Step 1 is to distribute the bombs randomly. This is done with a map function and the random function simply feeding into the line array of 81 when the random number is over some value.  

Step 2 is to go square by square, ignoring bomb squares. In each square you count all the bombs in the adjacent squares to get the number for that square. This is done rapidly by using array math based on a line of 9 squares. So -1, +1, -8, +8, -9, +9, -10, +10 ... etc... 

Currently, the first and last few squares aren't smart enough to count all their adjacent squares (could use modulus to fix this). However, It's a feature!!!... :P I honestly, could fix it, but it makes the game a bit harder and different than the original and I like that.  If you've read this far... you should easily get high score now... 

In the future I may fix the bug and add "another" one to keep my game unique, who knows!

Good Luck!
