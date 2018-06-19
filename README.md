# Ant Sweeper
![SITEGIF](https://shielded-wildwood-17962.herokuapp.com/DaBomb.gif)

[Live Site Here](https://shielded-wildwood-17962.herokuapp.com/)

## How to Play

Ant Sweeper is my take on an old game called Mine Sweeper. It seemed to fit this assignment well, and I've never coded it before. It was fun to figure out.

#### Step 1

![Fig1](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/1.png)

Click on any square in the play field to start the game.

#### Step 2

![Fig2](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/2.png)

Now choose an square you wish to uncover remember we are looking to avoid mines the first one is always a guess thou so... (fingers crossed)!!! When you click an area, it shows you what was underneath. If it's an X that's a bomb and it's game over no points for you!

#### Step 3

![Fig3](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/2_5.png)

WE GOT LUCKY! IT'S A ZERO. When there is a clear area under the square you clicked/uncoverd, the ground will tell you how many bombs are counted in the adjacent squares next to it.

ZERO means, we are clear all around the square with the ZERO in it, so we click all the squares around the zero, getting new numbers which give us info on possible bomb sites and points for our overall score.

#### Step 4

![Fig3](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/3.png)

Keep going, every time you click a square and there's no bomb you get a point. You can get alot of points fast if you uncover zero squares. 



#### Step 5

![Fig3](https://raw.githubusercontent.com/aNap73/Sweeper/master/public/4.png)

When you hit an X it's game over and if you got the high score it will be saved. Simply click of squares in the playfield and the game will restart.  

Good Luck!

## Where's the Match Game?

![MatchGame](https://i.giphy.com/lgF6RKNGujVQY.gif)

I wanted, to push myself, and honestly, the homework was a bit to simple to really learn about handling complex objects and states in react, or at least what I felt I needed to do. Therefore, I took to heart the concepts of the homework, and pushed it farther. I hope this is ok, I learned alot.

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
It has a few differences. It had a timer, and it had levels. I could implement those, with more time.

## Bomb Algorhythm

![BombsAway](https://media.giphy.com/media/Mliueouehmpag/giphy.webp)

This part is the pretty cool part, in my opinion. The way the bombs and numbers are generated is as follows.  The grid is 9 by 9 so there are 81 squares.  Step 1 is to distribute the bombs randomly.  Step 2 is to go square by square, ignoring bomb squares. In each square you count all the bombs in the adjacent squares to get the number for that square. Currently, the first and last few squares aren't smart enough to count all their adjacent squares. It's a feature... :P I honestly, could fix it, but it makes the game a bit harder than the original and I like that.  If you've read this far... you should easily get high score now... 

Good Luck!
