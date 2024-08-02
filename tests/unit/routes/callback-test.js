import { module, test } from 'qunit';
import { setupTest } from 'auth-me/tests/helpers';

module('Unit | Route | callback', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:callback');
    assert.ok(route);
  });
});