import { moduleFor, test } from 'ember-qunit'

moduleFor('controller:login/password-reset', {
  needs: ['controller:login', 'service:i18n']
})

// Replace this with your real tests.
test('it exists', function(assert) {
  const controller = this.subject()
  assert.ok(controller)
})
