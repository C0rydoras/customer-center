import { setupTest } from "ember-qunit";
import { module, test } from "qunit";

module("Unit | Model | timed report", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("timed-report", {});
    assert.ok(model);
  });
});
