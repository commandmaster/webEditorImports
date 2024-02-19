import { MonoBehaviour } from "../sketch.js";

export default class GroundScript{
    constructor(p5Var, gameEngine, gameObject){
      this.p5 = p5Var;
      this.gameEngine = gameEngine;
      this.gameObject = gameObject;
    }

    Start(){
    
    }

    Update(){
        for (const collider of this.gameObject.colliders[0].collidingWith){
            if (collider.gameObject.hasTag("FlappyBird")){
                this.gameEngine.broadCastEvent("flappyGameOver");
            }
        }
    }

  }

  