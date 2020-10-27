import Model, { attr, belongsTo } from "@ember-data/model";

export default class TimedReportModel extends Model {
  @attr("string") comment;

  @attr("django-date") date;
  @attr("django-duration") duration;

  @belongsTo("user") user;
}
