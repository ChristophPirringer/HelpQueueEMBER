import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  leads: ["Have you asked another pair for help?", "Have you spent 15 minutes going through through the problem documenting every step?"],

  actions: {
    nextLead: function() {
      var leads = this.get('leads');
      // console.log(leads);
      if (leads.length < 1) {
        this.set('isFormShowing', true);
      }
      // console.log(this.get('isFormShowing'));
      $('.lead').text(leads.shift());
    },
    submitTicket: function() {
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        createdAt: new Date(),
        updatedAt: "",
        helped: false
      };
      this.sendAction('submitTicket', params)
    }
  }
});
