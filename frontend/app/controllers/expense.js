import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ExpenseController extends Controller {
  @tracked newTitle;
  @tracked newCategory;
  @tracked newValue;
  @tracked newDate;


  @service store

  @action
  createExpense(event) {
    event.preventDefault();

    if (this.newTitle === "") return;

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

  @action
  removeExpense(expense, event) {
    console.log('llll');
    console.log(event, expense);
    event.preventDefault();
    expense.destroyRecord();
  }
}
