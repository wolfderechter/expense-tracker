import Model, { attr } from '@ember-data/model';

export default class ExpenseModel extends Model {
  @attr title;
  @attr category;
  @attr value;
  @attr date;

  // Add type of attribute?
  // @attr('string') title;
}
