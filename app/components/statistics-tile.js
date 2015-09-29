import Ember from 'ember';

export default Ember.Component.extend({
  averageWaitTime: Ember.computed('day.tickets.@each.waitTime', function() {
  var sum = 0;
  var tickets = this.get('day.tickets');
  var helpedTickets = tickets.filterBy('helped', true);
  var length = helpedTickets.length || 1;
  
  for (var i = 0; i < length; ++i) {
    var waitTime = tickets.objectAt(i).get('waitTime');
    if ( !(isNaN(waitTime)) ) {
      sum += waitTime;
    }
  }
  return Math.ceil(sum / length) + " minute(s)";
})
});
