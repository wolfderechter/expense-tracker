import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NewController extends Controller {
  @tracked newTitle;
  @tracked newCategory;
  @tracked newValue;
  @tracked newDate;

  @service store;


  constructor() {
    super(...arguments);
    // Set the date to today by default in the form
    this.newDate = new Date().toISOString().split('T')[0];
  }

  @action
  createExpense(event) {
    event.preventDefault();

    if (this.newTitle === '') return;

    const expense = this.store.createRecord('expense', {
      title: this.newTitle,
      category: this.newCategory,
      value: this.newValue,
      date: this.newDate,
    });
    expense.save();

    // clear input fields
    this.newTitle = '';
    this.newCategory = '';
    this.newDate = '';
    this.newValue = '';
  }
}
