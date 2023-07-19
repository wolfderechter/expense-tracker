import Route from '@ember/routing/route';
import { service } from '@ember/service';


export default class IndexRoute extends Route {
  @service store;

  // find all expenses
  async model() {
    return this.store.findAll('expense', {
      sort: '+value'
    });
  }
}
