import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr("string"),
  tickets: DS.hasMany('ticket', {async: true}),
  avgWaitTime: Ember.computed('tickets.@each.waitTime', function() {
    var sum = 0;
    for(var i = 0; i < this.get('tickets').get('length'); ++i) {
      var waitTime = this.get('tickets').objectAt(i).get('waitTime');
      if (waitTime) {
        sum += waitTime;  // tho note to Ryan: some of your tickets do not have valid waitTime
      }
    }
    return Math.floor(sum / (i + 1) / 60);
  }),
  totalTickets: Ember.computed('tickets', function() {
    return this.get('tickets').length;
  })

});
