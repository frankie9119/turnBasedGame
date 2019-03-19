Things to do____


1. When game world is created, we need to insure that each game-square only has one class (player, weapon, box etc).


4. I found a scenerio where players fight and are not overlapping (You might want to see if you can recreate the bug). Generally you want to play the game and take note of any odd behavior (bugs) and list them to fix.


5. When class names are on the same game-square the images overlap. This can be fixed by either changing the z index or by doing a swap of the classes so that all game box elements only have ONE class at any given time.

To do this:

Start with a data structure for each player that has all data specifc to the player.



6. All the time that one of the player is one of the top game-square, if click up the fight ( they definetly shouldn't). 

7. First column, bottom game-square, if a player is there and click down it disappears.

8. Last game-square, if a player goes there and click right it disappears.

9. First game-square, if a player goes there and click left it disappears.




WHAT IS DONE?

3. ! DONE ! When player moves to a "crate" the move counter increments (you might not want it to!)

2. ! DONE ! When player turn changes you should fix "jerky" CSS. You might be able to fix it by replacing border with "outline" (maybe?) 
