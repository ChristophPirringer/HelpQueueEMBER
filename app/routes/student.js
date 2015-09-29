import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('day');
  },
  actions: {
    submitTicket: function(params, today) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      today.save();
      this.transitionTo('ticket', newTicket.id);
    },
    newDate: function(params) {
      var newDate = this.store.createRecord('day', params);
      newDate.save();
    }
  }
});
