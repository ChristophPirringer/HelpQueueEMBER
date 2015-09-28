import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('student');
  this.route('teacher');
  this.route('ticket', {path: '/tickets/:ticket_id'});
});

export default Router;
