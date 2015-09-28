import Ember from 'ember';

export default Ember.Route.extend({
  isFormShowing: true,
  leads: ["Have you asked another pair for help?", "Have you spent 15 minutes going through through the problem documenting every step?"],

  actions: {
    nextLead: function() {
      var leads = this.get('leads');

      console.log(leads);
      if (leads.length < 1) {
        this.set('isFormShowing', true);
      }
      console.log(this.get('isFormShowing'));
      $('.lead').text(leads.shift());
    }
  }
});
