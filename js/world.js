import { changeDoor, updateCustom } from './action/action.js';

export default class world {}

world.run = function(){
    let self = this;
    setInterval(function(){
        requestAnimationFrame(function(){
            // self.store_custom.dispatch(updateCustom());
        });
    }, 2000);
}

world.init = function(store){
    this.store = store;

    // console.warn(this.store_custom);

    this.run();
}