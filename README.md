# jsonQuery

JSON Query - [Dojox/Json/Query] (https://github.com/maqetta/dojox/blob/master/json/query.js) converted into normal JavaScript File 

Can be used with in **Browser** and with **node.js**

## Install

```bash
$ npm install json_query
```

# How to Use?
Since the code is same as [Dojox/Json/Query] (https://github.com/maqetta/dojox/blob/master/json/query.js). Its usability is also same.

**Example: **
```js
var jsonQuery = require('../query')();

var data = [{"name":"harpreet","age":25,"subjects":[{"name":"English","class":"8"},{"name":"Hindi","class":"8"},{"name":"Math","class":"8"},{"name":"Science","class":"8"}]},{"name":"kuljeet","age":26,"subjects":[{"name":"English","class":"12"},{"name":"Punjabi","class":"12"},{"name":"Math","class":"12"},{"name":"Science","class":"12"}]}]

jsonQuery.query("$..[?class]", data)
```

[How to Use] (https://dojotoolkit.org/reference-guide/1.10/dojox/json/query.html)

# Quality Assurance
Since the code is same as [Dojox/Json/Query] (https://github.com/maqetta/dojox/blob/master/json/query.js). Its Quality is also same. Because it is in [Dojox](https://github.com/dojo/dojox) not in [Dojo](https://github.com/dojo/dojo), it may have some issues.
