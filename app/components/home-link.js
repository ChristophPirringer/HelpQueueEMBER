import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    linkHome: function() {
      if (confirm("Are you sure you want to leave this page?")) {
        this.transitionTo('index');
      }
    }
  }
});
