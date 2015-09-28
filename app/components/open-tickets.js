import Ember from 'ember';

export default Ember.Component.extend({
  sortByStatus: ['createdAt:asc'],
  sortedByDateTickets: Ember.computed.sort('tickets', 'sortByStatus'),
  openTicketsByDate: Ember.computed.filterBy('sortedByDateTickets', 'helped', false)
});
