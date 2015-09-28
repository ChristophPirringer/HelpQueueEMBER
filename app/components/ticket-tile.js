import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket(ticket) {
      ticket.set('helped', true);
      ticket.set('updatedAt', new Date());
      ticket.save();
    }
  }
});
