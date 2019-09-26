var should = require('chai').should(),
    assert = require('chai').assert
    jsonQuery = require('../query');
    fs = require("fs");    

var data = [{"name":"harpreet","age":25,"subjects":[{"name":"English","class":"8"},{"name":"Hindi","class":"8"},{"name":"Math","class":"8"},{"name":"Science","class":"8"}]},{"name":"kuljeet","age":26,"subjects":[{"name":"English","class":"12"},{"name":"Punjabi","class":"12"},{"name":"Math","class":"12"},{"name":"Science","class":"12"}]}]
var data2 = JSON.parse(fs.readFileSync("./test/data2.json"));


// Test Case 1
describe('deepSearchForSpecificKey', function() {
  it('deep Search For Specific Key', function() {
    var _res = jsonQuery().query("$..[?class]", data)
    assert.lengthOf(_res, 8)
  });
});

// Test Case 2
describe('deepSearchForSpecificKeyAndSpecificValue', function() {
  it('deep Search For Specific Key And Specific Value', function() {
    var _res = jsonQuery().query("$..[?class=8]", data)
    assert.lengthOf(_res, 4)
  });
});

// Test Case 3
describe('deepSearchForSpecificKeyAndSpecificValueHavingRange', function() {
  it('deep Search For Specific Key And Specific Value Having Range', function() {
    var _res = jsonQuery().query("$..[?age>25]", data)
    assert.lengthOf(_res, 1)
  });
});

// Test Case 4
describe('deepSearchForSpecificKeyAndSpecificValueHavingRange', function() {
  it('deep Search For Specific Key And Specific Value Having Range', function() {
    var _res = jsonQuery().query("$..[?name='Science']", data)
    assert.lengthOf(_res, 2)
  });
});

// Test Case 5 - Test Paths
describe('deepSearchForSpecificValueIncludePathsInResults', function() {
  it('deep search for specific value having range, include path in results', function() {
      var _res = jsonQuery({pathPropName: "__path__"}).query("$..[?year>1975]", data2);
      assert.ok(_res[1].__path__ == "['bands']['Dire Straits']['albums']['1']");
  });
});

// Test Case 6 - Test caching
describe('deepSearchWithCaching', function() {
  it('deep search for specific value having range, include path in results, use cachine', function() {
      var jq = jsonQuery({pathPropName: "__path__", cacheData: true});
      var _res = jq.query("$..[?year>1975]", data2);
      assert.ok(_res[1].__path__ == "['bands']['Dire Straits']['albums']['1']");

      var _res2 = jq.query("$..[?year>2000]", data2);
      assert.ok(_res2[0].__path__ == "['bands']['Morons in Suits']['albums']['0']");
  });
});

describe('deepSearchForLargeData', function() {
  big_data = {
    groups: [],
    creator: "Me"
  };

  for (i=0; i<1000; ++i) {
    
    var users = [];
    for (j=0; j<1000; ++j) {
      users.push({
        "name": "user_" + (i+1)*(j+1),
        "age": j
      });
    }

    big_data['groups'].push(users);
  }

  it('deep search on large data using caching', function() {
      var jq = jsonQuery({pathPropName: "__path__", cacheData: true});
      var _res = jq.query("$..[?@.age>20&&@.age<50]", big_data);
      assert.lengthOf(_res, 29000);

      var _res2 = jq.query("$..[?@.age>30&&@.age<40]", big_data);
      assert.lengthOf(_res2, 9000);
  });
});