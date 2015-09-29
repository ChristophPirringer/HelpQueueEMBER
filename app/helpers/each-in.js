import Ember from 'ember';

export function eachIn(object) {
  array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}

export default Ember.Helper.helper(eachIn);
