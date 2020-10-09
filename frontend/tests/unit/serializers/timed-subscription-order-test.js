import { setupTest } from "ember-qunit";
import { module, test } from "qunit";

module("Unit | Serializer | timed subscription order", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const store = this.owner.lookup("service:store");
    const serializer = store.serializerFor("timed-subscription-order");

    assert.ok(serializer);
  });

  test("it serializes records", function (assert) {
    const store = this.owner.lookup("service:store");
    const record = store.createRecord("timed-subscription-order", {});

    const serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
