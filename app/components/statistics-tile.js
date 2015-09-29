import Ember from 'ember';

export default Ember.Component.extend({
  averageWaitTime: Ember.computed('day.tickets.@each.waitTime', function() {
  var sum = 0;
  var helpedTickets = this.get('day.tickets').filterBy('helped', true);
  var length = helpedTickets.length || 1;
  for (var i = 0; i < this.get('day.tickets').get('length'); ++i) {
    var waitTime = this.get('day.tickets').objectAt(i).get('waitTime');
    if (!(isNaN(waitTime))) {
      sum += waitTime;  // tho note to Ryan: some of your tickets do not have valid waitTime
    }
  }
  return Math.ceil(sum / (length)) + " minute(s)";
})
});
