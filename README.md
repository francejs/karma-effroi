# karma-effroi

> Adapter for the [effroi](http://github.com/francejs/effroi/) UI testing framework.

## Installation

**Very early alpha version, many changes on the API can be expected**

The easiest way is to keep `karma-effroi` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-effroi": "~0.0"
  }
}
```

You can simple do it by:
```bash
npm install karma-effroi --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['effroi'],

    files: [
      '*.js'
    ]
  });
};
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
