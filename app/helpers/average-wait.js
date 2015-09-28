import Ember from 'ember';

export function averageWait(tickets) {
  var total = 0;
  tickets.forEach(function(ticket) {
    total+= ticket.waitTime;
    
  });
  return total
}

export default Ember.Helper.helper(averageWait);
