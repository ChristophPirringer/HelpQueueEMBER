import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('day');
  },
  actions: {
    submitTicket: function(params, days) {
      var d = new Date();
      var theDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      var today = days.findBy('date', theDate);
      if (today) {
        params['day'] = today;
      } else {
        var dateParams = { date: theDate }
        today = this.store.createRecord('day', dateParams);
        today.save();
        params['day'] = today;
      }

      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      today.save();
      this.transitionTo('ticket', newTicket.id);
    }
  }
});
