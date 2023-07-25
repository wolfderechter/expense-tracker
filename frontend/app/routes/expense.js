import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  // Find expense object by expense_id
  async model(params) {
    return this.store.findRecord('expense', params.expense_id);
  }
}
