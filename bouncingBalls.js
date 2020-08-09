/**
 * Instructions:
 * A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
 * He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
 * His mother looks out of a window 1.5 meters from the ground.
 * How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

 * Three conditions must be met for a valid experiment:
 * Float parameter "h" in meters must be greater than 0
 * Float parameter "bounce" must be greater than 0 and less than 1
 * Float parameter "window" must be less than h.
 * If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
 */

 // My solution.
function bouncingBall(h,  bounce,  window) {
    // Initialize variable to store number of times ball has passed the window. Assume that ball will always pass window at least once if valid experiment.
    var ballPasses = 1;
    // Verify that it is a valid experiment. If not, return -1.
    if (h <= 0 || bounce <= 0 || bounce >= 1 || h <= window) {
      return -1;
    }
    /**
     * If it is a valid experiment, begin counting the number of times the ball passes the window. "h" is used to store the height of the ball. 
     * Assumed that as long as "h" is greater than the window height, the number of times that the ball passes the window increases by 2. 
     * Also assumed that if "h" is equal to the window height, we don't count it as passing the window.
    */ 
    else {
    h = bounce*h;  
      while (h >= window) {      
        if (h > window) {
          ballPasses = ballPasses + 2;
        }
        h = bounce*h;
      }
      // Return the number of times the ball has passed the window.
      return ballPasses;
    }
}

// Best practice.
function bouncingBallTwo(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }