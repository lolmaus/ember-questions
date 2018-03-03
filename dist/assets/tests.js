'use strict';

define('ember-questions/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('pods/form/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/form/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/form/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/form/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/index/route.js should pass ESLint\n\n1:41 - Extra semicolon. (semi)\n4:3 - Extra semicolon. (semi)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('services/ajax.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/ajax.js should pass ESLint\n\n');
  });
});
define('ember-questions/tests/test-helper', ['ember-questions/app', 'ember-questions/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-questions/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/form/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/pods/form/controller-test.js should pass ESLint\n\n1:37 - Extra semicolon. (semi)\n2:40 - Extra semicolon. (semi)\n4:44 - Missing space before function parentheses. (space-before-function-paren)\n5:19 - Extra semicolon. (semi)\n8:29 - Missing space before function parentheses. (space-before-function-paren)\n9:58 - Extra semicolon. (semi)\n10:26 - Extra semicolon. (semi)\n11:5 - Extra semicolon. (semi)\n12:3 - Extra semicolon. (semi)');
  });

  QUnit.test('unit/pods/form/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/pods/form/route-test.js should pass ESLint\n\n1:37 - Extra semicolon. (semi)\n2:40 - Extra semicolon. (semi)\n4:39 - Missing space before function parentheses. (space-before-function-paren)\n5:19 - Extra semicolon. (semi)\n7:29 - Missing space before function parentheses. (space-before-function-paren)\n8:48 - Extra semicolon. (semi)\n9:21 - Extra semicolon. (semi)\n10:5 - Extra semicolon. (semi)\n11:3 - Extra semicolon. (semi)');
  });

  QUnit.test('unit/pods/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/pods/index/route-test.js should pass ESLint\n\n1:37 - Extra semicolon. (semi)\n2:40 - Extra semicolon. (semi)\n4:40 - Missing space before function parentheses. (space-before-function-paren)\n5:19 - Extra semicolon. (semi)\n7:29 - Missing space before function parentheses. (space-before-function-paren)\n8:49 - Extra semicolon. (semi)\n9:21 - Extra semicolon. (semi)\n10:5 - Extra semicolon. (semi)\n11:3 - Extra semicolon. (semi)');
  });

  QUnit.test('unit/services/ajax-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/services/ajax-test.js should pass ESLint\n\n1:37 - Extra semicolon. (semi)\n2:40 - Extra semicolon. (semi)\n4:41 - Missing space before function parentheses. (space-before-function-paren)\n5:19 - Extra semicolon. (semi)\n8:29 - Missing space before function parentheses. (space-before-function-paren)\n9:52 - Extra semicolon. (semi)\n10:23 - Extra semicolon. (semi)\n11:5 - Extra semicolon. (semi)\n12:3 - Extra semicolon. (semi)');
  });
});
define('ember-questions/tests/unit/index/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('ember-questions/tests/unit/pods/form/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:form');
      assert.ok(controller);
    });
  });
});
define('ember-questions/tests/unit/pods/form/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:form');
      assert.ok(route);
    });
  });
});
define('ember-questions/tests/unit/pods/index/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('ember-questions/tests/unit/services/ajax-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | ajax', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:ajax');
      assert.ok(service);
    });
  });
});
define('ember-questions/config/environment', [], function() {
  var prefix = 'ember-questions';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-questions/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
