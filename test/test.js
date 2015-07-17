var should = require('chai').should(),
    assert = require('chai').assert
    jsonQuery = require('../query')();

var data = [{"name":"harpreet","age":25,"subjects":[{"name":"English","class":"8"},{"name":"Hindi","class":"8"},{"name":"Math","class":"8"},{"name":"Science","class":"8"}]},{"name":"kuljeet","age":26,"subjects":[{"name":"English","class":"12"},{"name":"Punjabi","class":"12"},{"name":"Math","class":"12"},{"name":"Science","class":"12"}]}]

// Test Case 1
describe('deepSearchForSpecificKey', function() {
  it('deep Search For Specific Key', function() {
    var _res = jsonQuery.query("$..[?class]", data)
    assert.lengthOf(_res, 8)
  });
});

// Test Case 2
describe('deepSearchForSpecificKeyAndSpecificValue', function() {
  it('deep Search For Specific Key And Specific Value', function() {
    var _res = jsonQuery.query("$..[?class=8]", data)
    assert.lengthOf(_res, 4)
  });
});

// Test Case 3
describe('deepSearchForSpecificKeyAndSpecificValueHavingRange', function() {
  it('deep Search For Specific Key And Specific Value Having Range', function() {
    var _res = jsonQuery.query("$..[?age>25]", data)
    assert.lengthOf(_res, 1)
  });
});

// Test Case 4
describe('deepSearchForSpecificKeyAndSpecificValueHavingRange', function() {
  it('deep Search For Specific Key And Specific Value Having Range', function() {
    var _res = jsonQuery.query("$..[?name='Science']", data)
    assert.lengthOf(_res, 2)
  });
});

