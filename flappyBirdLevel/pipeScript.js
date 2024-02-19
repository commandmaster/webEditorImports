import { MonoBehaviour } from "../sketch.js";

export default class PipeScript{
    constructor(p5Var, gameEngine, gameObject){
      this.p5 = p5Var;
      this.gameEngine = gameEngine;
      this.gameObject = gameObject;
    }

    Start(){

        
        this.gameOver = false;
        this.gameEngine.onEvent("flappyGameOver", () => {
            this.gameObject.rigidBody.Velocity.x = 0;
            this.gameOver = true;
        });

        
    }

    Update(){
        if (this.gameOver){
            return;
        }


        if (this.gameObject.Transform.Position.x <= -300){
            this.gameObject.delete();
        }

        for (const collider of this.gameObject.colliders[0].collidingWith){
            if (collider.gameObject.hasTag("FlappyBird")){
                this.gameEngine.broadCastEvent("flappyGameOver");
            }
        }
    }

  }

  