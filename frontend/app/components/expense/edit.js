import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ExpensesComponent extends Component {
  @service store;

  @action
  editExpense(expense, event) {
    event.preventDefault();
    expense.save();
  }
}
