import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: 'radio-button',
  classNameBindings: 'checked',
  value: null,
  groupValue: null,
  scheduleChangedAction: function(){
    Ember.run.schedule('actions', this, function(){
      this.sendAction('changed', this.get('value'));
    });
  },
  checked: function(){
    return this.get('groupValue') === this.get('value');
  }.property('groupValue', 'value'),
  click: function(){
    var value = this.get('value');
    var groupValue = this.get('groupValue');
    this.set('groupValue', value);
    if (groupValue !== value){
      this.scheduleChangedAction();
    }
  }
});
