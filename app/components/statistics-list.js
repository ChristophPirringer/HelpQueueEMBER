import Ember from 'ember';

export default Ember.Component.extend({
//   averageWaitTime: Ember.computed('day.tickets.@each.waitTime', function() {
//   var sum = 0;
//   for(var i = 0; i < this.get('day.tickets').get('length'); ++i) {
//     var waitTime = this.get('day.tickets').objectAt(i).get('waitTime');
//     if (waitTime) {
//       sum += waitTime;  // tho note to Ryan: some of your tickets do not have valid waitTime
//     }
//   }
//   return Math.floor(sum / (i + 1) / 60) + " hours";
// }),
//   DaysObject: Ember.computed('tickets.@each.day'), function() {
//     var days = {};
//     for (var i = 0; i < this.get('tickets').get('length'); ++i) {
//       d = this.get('tickets').objectAt(i).get('day');
//       days[d] = days[d] || { total: 0, waitTime: 0 }
//       days[d][total] += 1;
//       days[d][waitTime] += d.get('waitTime');
//     }
//     return days;
//   }
  // averageWaitTime: Ember.computed.sum(createdAt.getTime())
  // averageWaitTime: Ember.computed.sum( this.get('createdAt').getTime() - this.get('updatedAt').getTime() )

});
