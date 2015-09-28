import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    submitTicket: function(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
    }
  }
});
