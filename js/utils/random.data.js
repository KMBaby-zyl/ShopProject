import Mock from 'mockjs';
const Random = Mock.Random;

Random.extend({
    _door: ['front', 'backend'],
    door: function(date){
        return this.pick(this._door)
    }
});
