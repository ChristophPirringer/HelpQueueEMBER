import Ember from 'ember';

export default Ember.Component.extend({
  averageWaitTime: Ember.computed('day.tickets.@each.waitTime', function() {
  var sum = 0;
  for(var i = 0; i < this.get('day.tickets').get('length'); ++i) {
    var waitTime = this.get('day.tickets').objectAt(i).get('waitTime');
    if (waitTime) {
      sum += waitTime;  // tho note to Ryan: some of your tickets do not have valid waitTime
    }
  }
  return Math.floor(sum / (i + 1) / 60) + " hours";
})
});
