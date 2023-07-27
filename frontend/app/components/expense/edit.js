import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class ExpensesComponent extends Component {
  @service store;
  @tracked existingCategory = null;
  @tracked categories;

  constructor() {
    super(...arguments);
    this.initialize();
  }

  @action
  async initialize() {
    try {
      this.categories = await this.store.findAll('category');
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  @action
  async selectCategory(event) {
    // Get the selected category ID from the event
    const selectedCategoryID = event.target.value;
    this.existingCategory = await this.store.findRecord('category', selectedCategoryID);
  }

  @action
  editExpense(expense, event) {
    event.preventDefault();
    expense.save();

    // Only update the category when one is selected
    if (this.existingCategory !== null) {
      expense.category = this.existingCategory;
      expense.save();
    }
  }
}
