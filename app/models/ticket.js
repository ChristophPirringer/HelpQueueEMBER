import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  body: DS.attr("string"),
  createdAt: DS.attr("date"),
  updatedAt: DS.attr("date"),
  helped: DS.attr("boolean"),
  waitTime: Ember.computed('createdAt', 'updatedAt', function(key, value) {
    return Math.floor((this.get('updatedAt') - this.get('createdAt')) / 60000);
  })
});
