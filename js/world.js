import { changeDoor } from './action/action.js';

export default class world {}
world.run = function(){
    let self = this;
    setInterval(function(){
        requestAnimationFrame(function(){

        });
    }, 2000);
}


world.init = function(store_shop, store_custom){
    this.store_shop = store_shop;
    this.store_custom = store_custom;

    this.run();
}