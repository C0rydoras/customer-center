import { moduleFor, test } from 'ember-qunit'

moduleFor('controller:login', {
  needs: [
    'controller:login.password-reset',
    'service:notify',
    'service:session'
  ]
})

// Replace this with your real tests.
test('it exists', function(assert) {
  const controller = this.subject()
  assert.ok(controller)
})
