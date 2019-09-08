# jsonQuery

JSON Query - [Dojox/Json/Query](https://github.com/maqetta/dojox/blob/master/json/query.js) converted into normal JavaScript File 

Can be used with in **Browser** and with **node.js**

## Install

```bash
$ npm install json_query
```

# How to Use?
Since the code is same as [Dojox/Json/Query](https://github.com/maqetta/dojox/blob/master/json/query.js). Its usability is also same.

**Example:**
```js
var jsonQuery = require('../query')();

var data = [{"name":"harpreet","age":25,"subjects":[{"name":"English","class":"8"},{"name":"Hindi","class":"8"},{"name":"Math","class":"8"},{"name":"Science","class":"8"}]},{"name":"kuljeet","age":26,"subjects":[{"name":"English","class":"12"},{"name":"Punjabi","class":"12"},{"name":"Math","class":"12"},{"name":"Science","class":"12"}]}]

jsonQuery.query("$..[?class]", data)
```

[How to Use](https://dojotoolkit.org/reference-guide/1.10/dojox/json/query.html)

# Additional features #
JSON Query contains some enhancments not found in the original implementation.
These include:
1) Path in results (Currently not supported when running in browser):
    It is often useful to also recieve the paths to the found items.
    By setting "pathPropName" when creating the JSON Query object, a property name containing the path will be created in each sub-object of the data.

    **NOTE**: This operation adds properties to the data

    Example:
    ```js
    var jsonQuery = require('query');
    var _res = jsonQuery({pathPropName: "__path__"}).query("$..[?year>1975]", data)

    // output
    // ['bands']['Dire Straits']['albums']['1']
    ```

# Quality Assurance
Since the code is same as [Dojox/Json/Query](https://github.com/maqetta/dojox/blob/master/json/query.js). Its Quality is also same. Because it is in [Dojox](https://github.com/dojo/dojox) not in [Dojo](https://github.com/dojo/dojo), it may have some issues.

## License and Copyright

The jsonQuery is dual licensed under BSD 3-Clause and AFL same as Dojo Toolkit. For more information on the license please see the [License Information][].  The Dojo Toolkit is Copyright (c) 2005-2018, The JS Foundation.  All
rights reserved.

[License Information]: http://dojotoolkit.org/license
