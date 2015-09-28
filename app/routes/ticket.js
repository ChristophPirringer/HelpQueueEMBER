import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
    return this.store.findRecord('ticket', params.ticket_id)
  },

  actions: {
    cancelTicket(ticket) {
      ticket.set('helped', true);
      ticket.save();
    }
  }
});
