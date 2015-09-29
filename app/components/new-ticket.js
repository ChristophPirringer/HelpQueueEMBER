import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  leads: ["Have you asked another pair for help?", "Have you spent 15 minutes going through through the problem documenting every step?"],

  actions: {
    nextLead: function() {
      var leads = this.get('leads');
      if (leads.length < 1) {
        this.set('isFormShowing', true);
      }
      $('.lead').text(leads.shift());
    },
    submitTicket: function() {
      var d = new Date();
      var theDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      var today = this.get('days').findBy('date', theDate);
      var dayParams;
      // console.log(theDate);
      if (today === undefined) {
          params = {
          date: theDate
        }
        this.sendAction('newDate', params)
      }

      var params = {
        name: this.get('name'),
        body: this.get('body'),
        createdAt: d,
        updatedAt: "",
        helped: false,
        day: this.get('days').findBy('date', theDate)

      }
      this.sendAction('submitTicket', params, (this.get('days').findBy('date', theDate)))
    }
  }
});
