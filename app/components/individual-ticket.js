import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket: function() {
      this.sendAction('closeTicket', this.get('ticket'))
    }
  }
});
