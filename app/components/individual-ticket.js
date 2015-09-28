import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancelTicket: function() {
      this.sendAction('cancelTicket', this.get('ticket'))
    }
  }
});
