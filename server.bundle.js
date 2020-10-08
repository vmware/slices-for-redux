module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/slices-for-redux/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isFunction = function (obj) { return typeof obj === 'function'; };

var MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function (Component) { return function (props) {
  var allComponents = useMDXComponents(props.components);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( Component, Object.assign({}, props, { components: allComponents }));
}; };
var useMDXComponents = function (components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : Object.assign({}, contextComponents,
      components);
  }

  return allComponents;
};
var MDXProvider = function (props) {
  var allComponents = useMDXComponents(props.components);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( MDXContext.Provider, { value: allComponents },
      props.children
    );
};

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function (ref) {
    var children = ref.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
}
};
var MDXCreateElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var propComponents = props.components;
  var mdxType = props.mdxType;
  var originalType = props.originalType;
  var parentName = props.parentName;
  var rest = objectWithoutProperties( props, ["components", "mdxType", "originalType", "parentName"] );
  var etc = rest;
  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components[(parentName + "." + type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, {ref: ref},
      etc,
      {components: propComponents}));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, {ref: ref},
    etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(84);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(26)
var polyfills = __webpack_require__(100)
var legacy = __webpack_require__(102)
var clone = __webpack_require__(103)

var util = __webpack_require__(104)

/* istanbul ignore next - node 0.x polyfill */
var gracefulQueue
var previousSymbol

/* istanbul ignore else - node 0.x polyfill */
if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
  gracefulQueue = Symbol.for('graceful-fs.queue')
  // This is used in testing by future versions
  previousSymbol = Symbol.for('graceful-fs.previous')
} else {
  gracefulQueue = '___graceful-fs.queue'
  previousSymbol = '___graceful-fs.previous'
}

function noop () {}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs4')
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
    console.error(m)
  }

// Once time initialization
if (!global[gracefulQueue]) {
  // This queue can be shared by multiple loaded instances
  var queue = []
  Object.defineProperty(global, gracefulQueue, {
    get: function() {
      return queue
    }
  })

  // Patch fs.close/closeSync to shared queue version, because we need
  // to retry() whenever a close happens *anywhere* in the program.
  // This is essential when multiple graceful-fs instances are
  // in play at the same time.
  fs.close = (function (fs$close) {
    function close (fd, cb) {
      return fs$close.call(fs, fd, function (err) {
        // This function uses the graceful-fs shared queue
        if (!err) {
          retry()
        }

        if (typeof cb === 'function')
          cb.apply(this, arguments)
      })
    }

    Object.defineProperty(close, previousSymbol, {
      value: fs$close
    })
    return close
  })(fs.close)

  fs.closeSync = (function (fs$closeSync) {
    function closeSync (fd) {
      // This function uses the graceful-fs shared queue
      fs$closeSync.apply(fs, arguments)
      retry()
    }

    Object.defineProperty(closeSync, previousSymbol, {
      value: fs$closeSync
    })
    return closeSync
  })(fs.closeSync)

  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
    process.on('exit', function() {
      debug(global[gracefulQueue])
      __webpack_require__(47).equal(global[gracefulQueue].length, 0)
    })
  }
}

module.exports = patch(clone(fs))
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
    module.exports = patch(fs)
    fs.__patched = true;
}

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs)
  fs.gracefulify = patch

  fs.createReadStream = createReadStream
  fs.createWriteStream = createWriteStream
  var fs$readFile = fs.readFile
  fs.readFile = readFile
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile
  fs.writeFile = writeFile
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile
  if (fs$appendFile)
    fs.appendFile = appendFile
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$readdir = fs.readdir
  fs.readdir = readdir
  function readdir (path, options, cb) {
    var args = [path]
    if (typeof options !== 'function') {
      args.push(options)
    } else {
      cb = options
    }
    args.push(go$readdir$cb)

    return go$readdir(args)

    function go$readdir$cb (err, files) {
      if (files && files.sort)
        files.sort()

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([go$readdir, [args]])

      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    }
  }

  function go$readdir (args) {
    return fs$readdir.apply(fs, args)
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs)
    ReadStream = legStreams.ReadStream
    WriteStream = legStreams.WriteStream
  }

  var fs$ReadStream = fs.ReadStream
  if (fs$ReadStream) {
    ReadStream.prototype = Object.create(fs$ReadStream.prototype)
    ReadStream.prototype.open = ReadStream$open
  }

  var fs$WriteStream = fs.WriteStream
  if (fs$WriteStream) {
    WriteStream.prototype = Object.create(fs$WriteStream.prototype)
    WriteStream.prototype.open = WriteStream$open
  }

  Object.defineProperty(fs, 'ReadStream', {
    get: function () {
      return ReadStream
    },
    set: function (val) {
      ReadStream = val
    },
    enumerable: true,
    configurable: true
  })
  Object.defineProperty(fs, 'WriteStream', {
    get: function () {
      return WriteStream
    },
    set: function (val) {
      WriteStream = val
    },
    enumerable: true,
    configurable: true
  })

  // legacy names
  var FileReadStream = ReadStream
  Object.defineProperty(fs, 'FileReadStream', {
    get: function () {
      return FileReadStream
    },
    set: function (val) {
      FileReadStream = val
    },
    enumerable: true,
    configurable: true
  })
  var FileWriteStream = WriteStream
  Object.defineProperty(fs, 'FileWriteStream', {
    get: function () {
      return FileWriteStream
    },
    set: function (val) {
      FileWriteStream = val
    },
    enumerable: true,
    configurable: true
  })

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy()

        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
        that.read()
      }
    })
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy()
        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
      }
    })
  }

  function createReadStream (path, options) {
    return new fs.ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new fs.WriteStream(path, options)
  }

  var fs$open = fs.open
  fs.open = open
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1])
  global[gracefulQueue].push(elem)
}

function retry () {
  var elem = global[gracefulQueue].shift()
  if (elem) {
    debug('RETRY', elem[0].name, elem[1])
    elem[0].apply(null, elem[1])
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);}/* harmony default export */ __webpack_exports__["a"] = (useDocusaurusContext);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const internalRegex=/^\/(?!\/)/;function Link(props){const{to,href}=props;const targetLink=to||href;const isInternal=internalRegex.test(targetLink);let preloaded=false;const IOSupported=typeof window!=='undefined'&&'IntersectionObserver'in window;let io;const handleIntersection=(el,cb)=>{io=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop listening/observing & run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer
io.observe(el);};const handleRef=ref=>{if(IOSupported&&ref&&isInternal){// If IO supported and element reference found, setup Observer functionality
handleIntersection(ref,()=>{window.docusaurus.prefetch(targetLink);});}};const onMouseEnter=()=>{if(!preloaded){window.docusaurus.preload(targetLink);preloaded=true;}};Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{// If IO is not supported. We prefetch by default (only once)
if(!IOSupported&&isInternal){window.docusaurus.prefetch(targetLink);}// when unmount, stops intersection observer from watching
return()=>{if(IOSupported&&io){io.disconnect();}};},[targetLink,IOSupported,isInternal]);return!targetLink||!isInternal?// eslint-disable-next-line jsx-a11y/anchor-has-content
react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},props,{href:targetLink})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ "a"],Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink}));}/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.fromCallback = function (fn) {
  return Object.defineProperty(function () {
    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)
    else {
      return new Promise((resolve, reject) => {
        arguments[arguments.length] = (err, res) => {
          if (err) return reject(err)
          resolve(res)
        }
        arguments.length++
        fn.apply(this, arguments)
      })
    }
  }, 'name', { value: fn.name })
}

exports.fromPromise = function (fn) {
  return Object.defineProperty(function () {
    const cb = arguments[arguments.length - 1]
    if (typeof cb !== 'function') return fn.apply(this, arguments)
    else fn.apply(this, arguments).then(r => cb(null, r), cb)
  }, 'name', { value: fn.name })
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBaseUrl; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBaseUrl(url){const{siteConfig}=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();const{baseUrl='/'}=siteConfig||{};if(!url){return url;}const externalRegex=/^(https?:|\/\/)/;if(externalRegex.test(url)){return url;}if(url.startsWith('/')){return baseUrl+url.slice(1);}return baseUrl+url;}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(16);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var helpers_inheritsLoose = __webpack_require__(41);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(helpers_inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gud/index.js
var gud = __webpack_require__(75);
var gud_default = /*#__PURE__*/__webpack_require__.n(gud);

// CONCATENATED MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js






var MAX_SIGNED_31_BIT_INT = 1073741823;

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + gud_default()() + '__';

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    inheritsLoose_default()(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types_default.a.object.isRequired, _Provider$childContex);

  var Consumer =
  /*#__PURE__*/
  function (_Component2) {
    inheritsLoose_default()(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types_default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react_default.a.createContext || createReactContext;

/* harmony default export */ var esm = (index);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(42);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(76);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js
/* unused harmony export MemoryRouter */
/* unused harmony export Prompt */
/* unused harmony export Redirect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_router_Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return react_router_Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return react_router_StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return react_router_Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return react_router_context; });
/* unused harmony export generatePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return matchPath; });
/* unused harmony export useHistory */
/* unused harmony export useLocation */
/* unused harmony export useParams */
/* unused harmony export useRouteMatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return withRouter; });













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
react_router_createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react_default.a.createElement(react_router_context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(esm_history["d" /* createMemoryHistory */])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(esm_history["c" /* createLocation */])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(esm_extends["a" /* default */])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(esm_history["c" /* createLocation */])(prevProps.to);

        if (!Object(esm_history["f" /* locationsAreEqual */])(prevLocation, Object(esm_extends["a" /* default */])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(esm_extends["a" /* default */])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? react_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(react_default.a.Component);

if (false) {}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(esm_extends["a" /* default */])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(esm_extends["a" /* default */])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(esm_history["e" /* createPath */])(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(esm_history["c" /* createLocation */])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(esm_history["c" /* createLocation */])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react_default.a.createElement(react_router_Router, Object(esm_extends["a" /* default */])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(esm_extends["a" /* default */])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
      return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = react_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(react_router_context).history;
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  return path ? matchPath(useLocation().pathname, path) : useContext(react_router_context).match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, global; }


//# sourceMappingURL=react-router.js.map


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (invariant);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const u = __webpack_require__(8).fromCallback
const mkdirs = u(__webpack_require__(106))
const mkdirsSync = __webpack_require__(107)

module.exports = {
  mkdirs,
  mkdirsSync,
  // alias
  mkdirp: mkdirs,
  mkdirpSync: mkdirsSync,
  ensureDir: mkdirs,
  ensureDirSync: mkdirsSync
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return locationsAreEqual; });
/* unused harmony export parsePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createPath; });






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(esm_extends["a" /* default */])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const u = __webpack_require__(8).fromPromise
const fs = __webpack_require__(46)

function pathExists (path) {
  return fs.access(path).then(() => true).catch(() => false)
}

module.exports = {
  pathExists: u(pathExists),
  pathExistsSync: fs.existsSync
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(87)();
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserRouter */
/* unused harmony export HashRouter */
/* unused harmony export Link */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavLink; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createBrowserHistory */ "a"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* Router */ "b"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createHashHistory */ "b"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* Router */ "b"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createLocation */ "c"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* __RouterContext */ "e"].Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* __RouterContext */ "e"].Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* matchPath */ "f"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],props);}/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ var Noop = (()=>null);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/SearchBar.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// EXTERNAL MODULE: ./node_modules/react-toggle/dist/component/index.js
var component = __webpack_require__(77);
var component_default = /*#__PURE__*/__webpack_require__.n(component);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Toggle/styles.module.css
var styles_module = __webpack_require__(24);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Toggle/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Moon=()=>react_default.a.createElement("span",{className:classnames_default()(styles_module_default.a.toggle,styles_module_default.a.moon)});const Sun=()=>react_default.a.createElement("span",{className:classnames_default()(styles_module_default.a.toggle,styles_module_default.a.sun)});/* harmony default export */ var Toggle = (function(props){const{isClient}=Object(useDocusaurusContext["a" /* default */])();return react_default.a.createElement(component_default.a,Object(esm_extends["a" /* default */])({disabled:!isClient,icons:{checked:react_default.a.createElement(Moon,null),unchecked:react_default.a.createElement(Sun,null)}},props));});
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/hooks/useTheme.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const useTheme=()=>{const[theme,setTheme]=react["useState"](typeof document!=='undefined'?document.querySelector('html').getAttribute('data-theme'):'');react["useEffect"](()=>{try{setTheme(localStorage.getItem('theme'));}catch(err){console.error(err);}},[setTheme]);const setThemeSyncWithLocalStorage=react["useCallback"](nextTheme=>{try{localStorage.setItem('theme',nextTheme);setTheme(nextTheme);}catch(err){console.error(err);}},[setTheme]);return[theme,setThemeSyncWithLocalStorage];};/* harmony default export */ var hooks_useTheme = (useTheme);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Navbar/styles.module.css
var Navbar_styles_module = __webpack_require__(43);
var Navbar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Navbar/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavLink({to,href,label,position,...props}){const toUrl=Object(useBaseUrl["a" /* default */])(to);return react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:"navbar__item navbar__link"},href?{target:'_blank',rel:'noopener noreferrer',href}:{activeClassName:'navbar__link--active',to:toUrl},props),label);}function Navbar(){const context=Object(useDocusaurusContext["a" /* default */])();const[sidebarShown,setSidebarShown]=Object(react["useState"])(false);const[isSearchBarExpanded,setIsSearchBarExpanded]=Object(react["useState"])(false);const[theme,setTheme]=hooks_useTheme();const{siteConfig={}}=context;const{baseUrl,themeConfig={}}=siteConfig;const{navbar={},disableDarkMode=false}=themeConfig;const{title,logo={},links=[]}=navbar;const showSidebar=Object(react["useCallback"])(()=>{setSidebarShown(true);},[setSidebarShown]);const hideSidebar=Object(react["useCallback"])(()=>{setSidebarShown(false);},[setSidebarShown]);const onToggleChange=Object(react["useCallback"])(e=>setTheme(e.target.checked?'dark':''),[setTheme]);const logoUrl=Object(useBaseUrl["a" /* default */])(logo.src);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Head["a" /* default */],null,react_default.a.createElement("html",{lang:"en","data-theme":theme})),react_default.a.createElement("nav",{className:classnames_default()('navbar','navbar--light','navbar--fixed-top',{'navbar-sidebar--show':sidebarShown})},react_default.a.createElement("div",{className:"navbar__inner"},react_default.a.createElement("div",{className:"navbar__items"},react_default.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:showSidebar,onKeyDown:showSidebar},react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},react_default.a.createElement("title",null,"Menu"),react_default.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),react_default.a.createElement(Link["a" /* default */],{className:"navbar__brand",to:baseUrl},logo!=null&&react_default.a.createElement("img",{className:"navbar__logo",src:logoUrl,alt:logo.alt}),title!=null&&react_default.a.createElement("strong",{className:isSearchBarExpanded?Navbar_styles_module_default.a.hideLogoText:''},title)),links.filter(linkItem=>linkItem.position!=='right').map((linkItem,i)=>react_default.a.createElement(NavLink,Object(esm_extends["a" /* default */])({},linkItem,{key:i})))),react_default.a.createElement("div",{className:"navbar__items navbar__items--right"},links.filter(linkItem=>linkItem.position==='right').map((linkItem,i)=>react_default.a.createElement(NavLink,Object(esm_extends["a" /* default */])({},linkItem,{key:i}))),!disableDarkMode&&react_default.a.createElement(Toggle,{className:Navbar_styles_module_default.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:theme==='dark',onChange:onToggleChange}),react_default.a.createElement(Noop,{handleSearchBarToggle:setIsSearchBarExpanded,isSearchBarExpanded:isSearchBarExpanded}))),react_default.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{setSidebarShown(false);}}),react_default.a.createElement("div",{className:"navbar-sidebar"},react_default.a.createElement("div",{className:"navbar-sidebar__brand"},react_default.a.createElement(Link["a" /* default */],{className:"navbar__brand",onClick:hideSidebar,to:baseUrl},logo!=null&&react_default.a.createElement("img",{className:"navbar__logo",src:logoUrl,alt:logo.alt}),title!=null&&react_default.a.createElement("strong",null,title)),!disableDarkMode&&sidebarShown&&react_default.a.createElement(Toggle,{"aria-label":"Dark mode toggle in sidebar",checked:theme==='dark',onChange:onToggleChange})),react_default.a.createElement("div",{className:"navbar-sidebar__items"},react_default.a.createElement("div",{className:"menu"},react_default.a.createElement("ul",{className:"menu__list"},links.map((linkItem,i)=>react_default.a.createElement("li",{className:"menu__list-item",key:i},react_default.a.createElement(NavLink,Object(esm_extends["a" /* default */])({className:"menu__link"},linkItem,{onClick:hideSidebar}))))))))));}/* harmony default export */ var theme_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Footer/styles.module.css
var Footer_styles_module = __webpack_require__(78);
var Footer_styles_module_default = /*#__PURE__*/__webpack_require__.n(Footer_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Footer/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLink({to,href,label,...props}){const toUrl=Object(useBaseUrl["a" /* default */])(to);return react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:"footer__link-item"},href?{target:'_blank',rel:'noopener noreferrer',href}:{to:toUrl},props),label);}const FooterLogo=({url,alt})=>react_default.a.createElement("img",{className:"footer__logo",alt:alt,src:url});function Footer(){const context=Object(useDocusaurusContext["a" /* default */])();const{siteConfig={}}=context;const{themeConfig={}}=siteConfig;const{footer}=themeConfig;const{copyright,links=[],logo={}}=footer||{};const logoUrl=Object(useBaseUrl["a" /* default */])(logo.src);if(!footer){return null;}return react_default.a.createElement("footer",{className:classnames_default()('footer',{'footer--dark':footer.style==='dark'})},react_default.a.createElement("div",{className:"container"},links&&links.length>0&&react_default.a.createElement("div",{className:"row footer__links"},links.map((linkItem,i)=>react_default.a.createElement("div",{key:i,className:"col footer__col"},linkItem.title!=null?react_default.a.createElement("h4",{className:"footer__title"},linkItem.title):null,linkItem.items!=null&&Array.isArray(linkItem.items)&&linkItem.items.length>0?react_default.a.createElement("ul",{className:"footer__items"},linkItem.items.map((item,key)=>item.html?react_default.a.createElement("div",{key:key,dangerouslySetInnerHTML:{__html:item.html}}):react_default.a.createElement("li",{key:item.href||item.to,className:"footer__item"},react_default.a.createElement(FooterLink,item)))):null))),(logo||copyright)&&react_default.a.createElement("div",{className:"text--center"},logo&&logo.src&&react_default.a.createElement("div",{className:"margin-bottom--sm"},logo.href?react_default.a.createElement("a",{href:logo.href,target:"_blank",rel:"noopener noreferrer",className:Footer_styles_module_default.a.footerLogoLink},react_default.a.createElement(FooterLogo,{alt:logo.alt,url:logoUrl})):react_default.a.createElement(FooterLogo,{alt:logo.alt,url:logoUrl})),copyright)));}/* harmony default export */ var theme_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Layout/styles.css
var styles = __webpack_require__(133);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Layout/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{siteConfig={}}=Object(useDocusaurusContext["a" /* default */])();const{favicon,tagline,title:defaultTitle,themeConfig:{image:defaultImage},url:siteUrl}=siteConfig;const{children,title,noFooter,description,image,keywords,permalink,version}=props;const metaTitle=title||`${defaultTitle} · ${tagline}`;const metaImage=image||defaultImage;const metaImageUrl=siteUrl+Object(useBaseUrl["a" /* default */])(metaImage);const faviconUrl=Object(useBaseUrl["a" /* default */])(favicon);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Head["a" /* default */],null,react_default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),metaTitle&&react_default.a.createElement("title",null,metaTitle),metaTitle&&react_default.a.createElement("meta",{property:"og:title",content:metaTitle}),favicon&&react_default.a.createElement("link",{rel:"shortcut icon",href:faviconUrl}),description&&react_default.a.createElement("meta",{name:"description",content:description}),description&&react_default.a.createElement("meta",{property:"og:description",content:description}),version&&react_default.a.createElement("meta",{name:"docsearch:version",content:version}),keywords&&keywords.length&&react_default.a.createElement("meta",{name:"keywords",content:keywords.join(',')}),metaImage&&react_default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),metaImage&&react_default.a.createElement("meta",{property:"twitter:image",content:metaImageUrl}),metaImage&&react_default.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${metaTitle}`}),permalink&&react_default.a.createElement("meta",{property:"og:url",content:siteUrl+permalink}),react_default.a.createElement("meta",{name:"twitter:card",content:"summary"})),react_default.a.createElement(theme_Navbar,null),react_default.a.createElement("div",{className:"main-wrapper"},children),!noFooter&&react_default.a.createElement(theme_Footer,null));}/* harmony default export */ var theme_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heroBanner": "heroBanner_2Ftp",
	"buttons": "buttons_1Wc3",
	"features": "features_P2SU",
	"featureImage": "featureImage_3Xqx",
	"featureBlock": "featureBlock_ZweL",
	"blockImage": "blockImage_2Pq_",
	"featureTitle": "featureTitle_1nYI",
	"featureContent": "featureContent_1LG9",
	"title": "title_2pci",
	"projectTitle": "projectTitle_2OIl",
	"featureAnchor": "featureAnchor_GmZG",
	"getStarted": "getStarted_3sli",
	"secondTitle": "secondTitle_3dpH"
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var PropTypes = __webpack_require__(16);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? undefined : _typeof(__webpack_require__.m)) !== "object") {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();

  var state = {
    loading: true,
    loaded: null,
    error: null
  };

  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });

  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };

  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);

      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });

  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }
    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.retry = function () {
        _this.setState({ error: null, loading: true, timedOut: false });
        res = loadFn(opts.loader);
        _this._loadModule();
      };

      init();

      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      this._mounted = true;
      this._loadModule();
    };

    LoadableComponent.prototype._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === "number") {
        if (opts.delay === 0) {
          this.setState({ pastDelay: true });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({ pastDelay: true });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          _this2.setState({ timedOut: true });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;
      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};


Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"docTitle": "docTitle_1vWb",
	"docItemContainer": "docItemContainer_2cwg",
	"tableOfContents": "tableOfContents_TbNY",
	"docLastUpdatedAt": "docLastUpdatedAt_1sqk"
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"toggle": "toggle_keGJ",
	"moon": "moon_1gwN",
	"sun": "sun_3CPA"
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "sidebar_1kLs",
	"sidebarMenuIcon": "sidebarMenuIcon_2vk4",
	"sidebarMenuCloseIcon": "sidebarMenuCloseIcon_1JRa"
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)

const NODE_VERSION_MAJOR_WITH_BIGINT = 10
const NODE_VERSION_MINOR_WITH_BIGINT = 5
const NODE_VERSION_PATCH_WITH_BIGINT = 0
const nodeVersion = process.versions.node.split('.')
const nodeVersionMajor = Number.parseInt(nodeVersion[0], 10)
const nodeVersionMinor = Number.parseInt(nodeVersion[1], 10)
const nodeVersionPatch = Number.parseInt(nodeVersion[2], 10)

function nodeSupportsBigInt () {
  if (nodeVersionMajor > NODE_VERSION_MAJOR_WITH_BIGINT) {
    return true
  } else if (nodeVersionMajor === NODE_VERSION_MAJOR_WITH_BIGINT) {
    if (nodeVersionMinor > NODE_VERSION_MINOR_WITH_BIGINT) {
      return true
    } else if (nodeVersionMinor === NODE_VERSION_MINOR_WITH_BIGINT) {
      if (nodeVersionPatch >= NODE_VERSION_PATCH_WITH_BIGINT) {
        return true
      }
    }
  }
  return false
}

function getStats (src, dest, cb) {
  if (nodeSupportsBigInt()) {
    fs.stat(src, { bigint: true }, (err, srcStat) => {
      if (err) return cb(err)
      fs.stat(dest, { bigint: true }, (err, destStat) => {
        if (err) {
          if (err.code === 'ENOENT') return cb(null, { srcStat, destStat: null })
          return cb(err)
        }
        return cb(null, { srcStat, destStat })
      })
    })
  } else {
    fs.stat(src, (err, srcStat) => {
      if (err) return cb(err)
      fs.stat(dest, (err, destStat) => {
        if (err) {
          if (err.code === 'ENOENT') return cb(null, { srcStat, destStat: null })
          return cb(err)
        }
        return cb(null, { srcStat, destStat })
      })
    })
  }
}

function getStatsSync (src, dest) {
  let srcStat, destStat
  if (nodeSupportsBigInt()) {
    srcStat = fs.statSync(src, { bigint: true })
  } else {
    srcStat = fs.statSync(src)
  }
  try {
    if (nodeSupportsBigInt()) {
      destStat = fs.statSync(dest, { bigint: true })
    } else {
      destStat = fs.statSync(dest)
    }
  } catch (err) {
    if (err.code === 'ENOENT') return { srcStat, destStat: null }
    throw err
  }
  return { srcStat, destStat }
}

function checkPaths (src, dest, funcName, cb) {
  getStats(src, dest, (err, stats) => {
    if (err) return cb(err)
    const { srcStat, destStat } = stats
    if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
      return cb(new Error('Source and destination must not be the same.'))
    }
    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      return cb(new Error(errMsg(src, dest, funcName)))
    }
    return cb(null, { srcStat, destStat })
  })
}

function checkPathsSync (src, dest, funcName) {
  const { srcStat, destStat } = getStatsSync(src, dest)
  if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
    throw new Error('Source and destination must not be the same.')
  }
  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(errMsg(src, dest, funcName))
  }
  return { srcStat, destStat }
}

// recursively check if dest parent is a subdirectory of src.
// It works for all file types including symlinks since it
// checks the src and dest inodes. It starts from the deepest
// parent and stops once it reaches the src parent or the root path.
function checkParentPaths (src, srcStat, dest, funcName, cb) {
  const srcParent = path.resolve(path.dirname(src))
  const destParent = path.resolve(path.dirname(dest))
  if (destParent === srcParent || destParent === path.parse(destParent).root) return cb()
  if (nodeSupportsBigInt()) {
    fs.stat(destParent, { bigint: true }, (err, destStat) => {
      if (err) {
        if (err.code === 'ENOENT') return cb()
        return cb(err)
      }
      if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        return cb(new Error(errMsg(src, dest, funcName)))
      }
      return checkParentPaths(src, srcStat, destParent, funcName, cb)
    })
  } else {
    fs.stat(destParent, (err, destStat) => {
      if (err) {
        if (err.code === 'ENOENT') return cb()
        return cb(err)
      }
      if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        return cb(new Error(errMsg(src, dest, funcName)))
      }
      return checkParentPaths(src, srcStat, destParent, funcName, cb)
    })
  }
}

function checkParentPathsSync (src, srcStat, dest, funcName) {
  const srcParent = path.resolve(path.dirname(src))
  const destParent = path.resolve(path.dirname(dest))
  if (destParent === srcParent || destParent === path.parse(destParent).root) return
  let destStat
  try {
    if (nodeSupportsBigInt()) {
      destStat = fs.statSync(destParent, { bigint: true })
    } else {
      destStat = fs.statSync(destParent)
    }
  } catch (err) {
    if (err.code === 'ENOENT') return
    throw err
  }
  if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
    throw new Error(errMsg(src, dest, funcName))
  }
  return checkParentPathsSync(src, srcStat, destParent, funcName)
}

// return true if dest is a subdir of src, otherwise false.
// It only checks the path strings.
function isSrcSubdir (src, dest) {
  const srcArr = path.resolve(src).split(path.sep).filter(i => i)
  const destArr = path.resolve(dest).split(path.sep).filter(i => i)
  return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true)
}

function errMsg (src, dest, funcName) {
  return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
}

module.exports = {
  checkPaths,
  checkPathsSync,
  checkParentPaths,
  checkParentPathsSync,
  isSrcSubdir
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const rimraf = __webpack_require__(112)

module.exports = {
  remove: u(rimraf),
  removeSync: rimraf.sync
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(__webpack_require__(16));
var withSideEffect = _interopDefault(__webpack_require__(89));
var isEqual = _interopDefault(__webpack_require__(91));
var React = _interopDefault(__webpack_require__(1));
var objectAssign = _interopDefault(__webpack_require__(37));

var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = objectAssign({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [React.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return React.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !isEqual(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (false) {}

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            React.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return React.createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }(React.Component), _class.propTypes = {
        base: PropTypes.object,
        bodyAttributes: PropTypes.object,
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        defaultTitle: PropTypes.string,
        defer: PropTypes.bool,
        encodeSpecialCharacters: PropTypes.bool,
        htmlAttributes: PropTypes.object,
        link: PropTypes.arrayOf(PropTypes.object),
        meta: PropTypes.arrayOf(PropTypes.object),
        noscript: PropTypes.arrayOf(PropTypes.object),
        onChangeClientState: PropTypes.func,
        script: PropTypes.arrayOf(PropTypes.object),
        style: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
        titleAttributes: PropTypes.object,
        titleTemplate: PropTypes.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = withSideEffect(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({}));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ __webpack_exports__["a"] = (react_router_config__WEBPACK_IMPORTED_MODULE_0__[/* renderRoutes */ "b"]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return renderRoutes; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* matchPath */ "f"])(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_0__[/* Router */ "b"].computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* Switch */ "d"], switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__[/* Route */ "a"], {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(route.component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"codeBlock": "codeBlock_19pQ",
	"codeBlockWrapper": "codeBlockWrapper_2QGZ",
	"copyButton": "copyButton_1BYj"
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"docPage": "docPage_1kjD",
	"docSidebarContainer": "docSidebarContainer_1cYp",
	"docMainContainer": "docMainContainer_FFX1"
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const jsonFile = __webpack_require__(120)

module.exports = {
  // jsonfile exports
  readJson: u(jsonFile.readFile),
  readJsonSync: jsonFile.readFileSync,
  writeJson: u(jsonFile.writeFile),
  writeJsonSync: jsonFile.writeFileSync
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{title:"Page Not Found"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container margin-vert--xl"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col col--6 col--offset-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"hero__title"},"Page Not Found"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"We could not find what you were looking for."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))));}/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign(
  {},
  // Export promiseified graceful-fs:
  __webpack_require__(46),
  // Export extra methods:
  __webpack_require__(48),
  __webpack_require__(51),
  __webpack_require__(111),
  __webpack_require__(113),
  __webpack_require__(119),
  __webpack_require__(12),
  __webpack_require__(123),
  __webpack_require__(125),
  __webpack_require__(127),
  __webpack_require__(15),
  __webpack_require__(28)
)

// Export fs.promises as a getter property so that we don't trigger
// ExperimentalWarning before fs.promises is actually accessed.
const fs = __webpack_require__(26)
if (Object.getOwnPropertyDescriptor(fs, 'promises')) {
  Object.defineProperty(module.exports, 'promises', {
    get () { return fs.promises }
  })
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(128)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"displayOnlyInLargeViewport": "displayOnlyInLargeViewport_1gtM",
	"hideLogoText": "hideLogoText_1pX_"
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasEntry = exports.unique = exports.getFileExtension = exports.computeIntegrity = void 0;

var _computeIntegrity = _interopRequireDefault(__webpack_require__(94));

exports.computeIntegrity = _computeIntegrity["default"];

var _getFileExtension = _interopRequireDefault(__webpack_require__(96));

exports.getFileExtension = _getFileExtension["default"];

var _unique = _interopRequireDefault(__webpack_require__(97));

exports.unique = _unique["default"];

var _hasEntry = _interopRequireDefault(__webpack_require__(98));

exports.hasEntry = _hasEntry["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
const u = __webpack_require__(8).fromCallback
const fs = __webpack_require__(4)

const api = [
  'access',
  'appendFile',
  'chmod',
  'chown',
  'close',
  'copyFile',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchown',
  'lchmod',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'readFile',
  'readdir',
  'readlink',
  'realpath',
  'rename',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'writeFile'
].filter(key => {
  // Some commands are not available on some systems. Ex:
  // fs.copyFile was added in Node.js v8.5.0
  // fs.mkdtemp was added in Node.js v5.10.0
  // fs.lchown is not available on at least some Linux
  return typeof fs[key] === 'function'
})

// Export all keys:
Object.keys(fs).forEach(key => {
  if (key === 'promises') {
    // fs.promises is a getter property that triggers ExperimentalWarning
    // Don't re-export it here, the getter is defined in "lib/index.js"
    return
  }
  exports[key] = fs[key]
})

// Universalify async methods:
api.forEach(method => {
  exports[method] = u(fs[method])
})

// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return fs.exists(filename, callback)
  }
  return new Promise(resolve => {
    return fs.exists(filename, resolve)
  })
}

// fs.read() & fs.write need special treatment due to multiple callback args

exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return fs.read(fd, buffer, offset, length, position, callback)
  }
  return new Promise((resolve, reject) => {
    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
      if (err) return reject(err)
      resolve({ bytesRead, buffer })
    })
  })
}

// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args
exports.write = function (fd, buffer, ...args) {
  if (typeof args[args.length - 1] === 'function') {
    return fs.write(fd, buffer, ...args)
  }

  return new Promise((resolve, reject) => {
    fs.write(fd, buffer, ...args, (err, bytesWritten, buffer) => {
      if (err) return reject(err)
      resolve({ bytesWritten, buffer })
    })
  })
}

// fs.realpath.native only available in Node v9.2+
if (typeof fs.realpath.native === 'function') {
  exports.realpath.native = u(fs.realpath.native)
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  copySync: __webpack_require__(105)
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(3)

// get drive on windows
function getRootPath (p) {
  p = path.normalize(path.resolve(p)).split(path.sep)
  if (p.length > 0) return p[0]
  return null
}

// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
const INVALID_PATH_CHARS = /[<>:"|?*]/

function invalidWin32Path (p) {
  const rp = getRootPath(p)
  p = p.replace(rp, '')
  return INVALID_PATH_CHARS.test(p)
}

module.exports = {
  getRootPath,
  invalidWin32Path
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const os = __webpack_require__(108)
const path = __webpack_require__(3)

// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function hasMillisResSync () {
  let tmpfile = path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862)
  fs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141')
  const fd = fs.openSync(tmpfile, 'r+')
  fs.futimesSync(fd, d, d)
  fs.closeSync(fd)
  return fs.statSync(tmpfile).mtime > 1435410243000
}

function hasMillisRes (callback) {
  let tmpfile = path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2))
  tmpfile = path.join(os.tmpdir(), tmpfile)

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862)
  fs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
    if (err) return callback(err)
    fs.open(tmpfile, 'r+', (err, fd) => {
      if (err) return callback(err)
      fs.futimes(fd, d, d, err => {
        if (err) return callback(err)
        fs.close(fd, err => {
          if (err) return callback(err)
          fs.stat(tmpfile, (err, stats) => {
            if (err) return callback(err)
            callback(null, stats.mtime > 1435410243000)
          })
        })
      })
    })
  })
}

function timeRemoveMillis (timestamp) {
  if (typeof timestamp === 'number') {
    return Math.floor(timestamp / 1000) * 1000
  } else if (timestamp instanceof Date) {
    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
  } else {
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
  }
}

function utimesMillis (path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', (err, fd) => {
    if (err) return callback(err)
    fs.futimes(fd, atime, mtime, futimesErr => {
      fs.close(fd, closeErr => {
        if (callback) callback(futimesErr || closeErr)
      })
    })
  })
}

function utimesMillisSync (path, atime, mtime) {
  const fd = fs.openSync(path, 'r+')
  fs.futimesSync(fd, atime, mtime)
  return fs.closeSync(fd)
}

module.exports = {
  hasMillisRes,
  hasMillisResSync,
  timeRemoveMillis,
  utimesMillis,
  utimesMillisSync
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
module.exports = {
  copy: u(__webpack_require__(110))
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={};/* @jsx mdx */const rightToc=[{value:'Parameters',id:'parameters',children:[]},{value:'Parameters',id:'parameters-1',children:[{value:'<code>name</code>',id:'name',children:[]}]},{value:'Parameters',id:'parameters-2',children:[{value:'<code>addCaseReducers(caseReducers)</code>',id:'addcasereducerscasereducers',children:[]},{value:'<code>reducers</code>',id:'reducers',children:[]},{value:'<code>extraReducers</code>',id:'extrareducers',children:[]},{value:'The "builder callback" API for <code>extraReducers</code>',id:'the-builder-callback-api-for-extrareducers',children:[]}]},{value:'Return Value',id:'return-value',children:[]},{value:'Examples',id:'examples',children:[]}];const metadata={"id":"internal/_extra","title":"_extra","description":"A SliceGroup gives the Slice 2 things","source":"@site/docs/internal/_extra.md","permalink":"/slices-for-redux/docs/internal/_extra"};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A SliceGroup gives the Slice 2 things`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`SliceGroup is the parent of a Slice.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),` is the top most SliceGroup.
Usually in small applications all Slices are direct children of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),`. This mean that all slice reducers are composed into the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`In large applications to organize a big Redux store state and makes it easier to navigate it the Redux Dev Tools one can group Slices under SlicesScope.
A SliceGroup is similar in concept to folders in the file system.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`If you are building a library of reusable redux Slices like \`Ducks' you can group
all your Slices under a SliceGroup.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"parameters"},`Parameters`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSliceGroup`),` accepts a single configuration object parameter, with the following options:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`function createSliceGroup({
  /**
   * The SliceGroup name.
   */
  name: string;

})
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"parameters-1"},`Parameters`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"name"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`name`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A string name for the SliceGroup.
It cannot contain the path separator '/'.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"parameters-2"},`Parameters`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addcasereducerscasereducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`addCaseReducers(caseReducers)`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Given an object with keys reducerName string and values CaseReducer function`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`returns an object with same keys anv values PayloadActionCreator`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`An object containing Redux "case reducer" functions (functions intended to handle a`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"reducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`reducers`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent
to a single case statement in a switch).`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The keys in the object will be used to generate string action type constants, and these will show up in the Redux
DevTools Extension when they are dispatched. Also, if any other part of the application happens to dispatch an action
with the exact same type string, the corresponding reducer will be run. Therefore, you should give the functions
descriptive names.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`This object will be passed to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createReducer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createReducer`)),`, so the reducers may safely "mutate" the
state they are given.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h4",{"id":"customizing-generated-action-creators"},`Customizing Generated Action Creators`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`If you need to customize the creation of the payload value of an action creator by means of a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createAction#using-prepare-callbacks-to-customize-action-contents"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`prepare callback`)),`, the value of the appropriate field of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducers`),` argument object should be an object instead of a function. This object must contain two properties: `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`prepare`),`. The value of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` field should be the case reducer function while the value of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`prepare`),` field should be the prepare callback function.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"extrareducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`extraReducers`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`One of the key concepts of Redux is that each slice reducer "owns" its slice of state, and that many slice reducers
can independently respond to the same action type. `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`extraReducers`),` allows `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` to respond to other action types
besides the types it has generated.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Like `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducers`),`, `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`extraReducers`),` should be an object containing Redux case reducer functions. However, the keys should
be other Redux string action type constants, and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` will `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("em",{parentName:"p"},`not`),` auto-generate action types or action creators
for reducers included in this parameter.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`As with `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducers`),`, these reducers will also be passed to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createReducer`),` and may "mutate" their state safely.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`If two fields from `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducers`),` and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`extraReducers`),` happen to end up with the same action type string,
the function from `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducers`),` will be used to handle that action type.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Action creators that were generated using `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createAction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createAction`)),` may be used directly as the keys here, using
computed property syntax. (If you are using TypeScript, you may have to use `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actionCreator.type`),` or `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actionCreator.toString()`),`
to force the TS compiler to accept the computed property.)`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"the-builder-callback-api-for-extrareducers"},`The "builder callback" API for `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`extraReducers`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Instead of using a simple object as `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`extraReducers`),`, you can also use a callback that receives a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`ActionReducerMapBuilder`),` instance.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`We recommend using this API if stricter type safety is necessary when defining reducer argument objects.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"return-value"},`Return Value`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` will return an object that looks like:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`{
    addCaseReducers,
    addExtraReducers,
    getActionType,
    name : string,
    parentPath : string,
    reducer : CaseReducer,
    selector : SelectorFunc,
}
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Each function defined in the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducers`),` argument will have a corresponding action creator generated using `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createAction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createAction`)),`
and included in the result's `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actions`),` field using the same function name.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The generated `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` function is suitable for passing to the Redux `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`combineReducers`),` function as a "slice reducer".`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`You may want to consider destructuring the action creators and exporting them individually, for ease of searching
for references in a larger codebase.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"examples"},`Examples`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const incrementBy = createAction<number>('incrementBy');

const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    },
  },
  // "builder callback API"
  extraReducers: (builder) =>
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload;
    }),
});

const user = createSlice({
  name: 'user',
  initialState: { name: '', age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload; // mutate the state all you want with immer
    },
  },
  // "map object API"
  extraReducers: {
    [counter.actions.increment]: (state, action) => {
      state.age += 1;
    },
  },
});

const reducer = combineReducers({
  counter: counter.reducer,
  user: user.reducer,
});

const store = createStore(reducer);

store.dispatch(counter.actions.increment());
// -> { counter: 1, user: {name : '', age: 21} }
store.dispatch(counter.actions.increment());
// -> { counter: 2, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply(3));
// -> { counter: 6, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply());
// -> { counter: 12, user: {name: '', age: 22} }
console.log(\`\${counter.actions.decrement}\`);
// -> "counter/decrement"
store.dispatch(user.actions.setUserName('eric'));
// -> { counter: 6, user: { name: 'eric', age: 22} }
`)));};MDXContent.isMDXComponent=true;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'mutable-reducers',title:'Mutable Reducers',sidebar_label:'Mutable Reducers',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Example',id:'example',children:[]}];const metadata={"id":"concepts/mutable-reducers","title":"Mutable Reducers","description":"# Mutable Reducers","source":"@site/docs/concepts/mutable-reducers.md","permalink":"/slices-for-redux/docs/concepts/mutable-reducers","sidebar_label":"Mutable Reducers","sidebar":"docs","previous":{"title":"Quick Start","permalink":"/slices-for-redux/docs/introduction/quick-start"},"next":{"title":"rootSliceGroup","permalink":"/slices-for-redux/docs/api/rootSliceGroup"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"mutable-reducers"},`Mutable Reducers`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Now that we have come to appreciated the benefits of immutability,
proposing the use of mutable reducers may, at first look, seen as an anti-pattern.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Please, read why maybe using mutable reducers may not be such a bad idea after all.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Most applications create the rootReducer with `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux.js.org/api/combinereducers",target:"_blank"},`combineReducers()`),` from Redux. Slice reducers are imported and combined when creating the rootReducer. This is often done in a "reducers.js" file.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Large applications use code splitting to incrementally load code chunks.
Code inside a dynamically loaded chunk needs a way to add its slice reducers to the rootReducer.
Current solutions involve creating a new rootReducer and calling `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux.js.org/api/store#replacereducernextreducer",target:"_blank"},`store.replaceReducer(newReducer)`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),`'s rootReducer is a "mutable combine reducer". Slice reducers can be added to the rootReducer as needed. This not only simplifies the code that one writes but actually promotes code splitting to occur in the first place. Importing and combining reducers at startup can be avoided for the majority of slice reducers. Slice reducers can add themselves to the rootReducer when their code is loaded.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Only those reducers that are not adding themselves need to be imported and explicitly added to the rootReducer.
There is no longer the need to import and modify the "reducers.js" file each time a new reducer is written. This removes the boilerplate code inside the "reducers.js" file.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`When slice reducers files are no longer imported in the reducers.js file,
the bundler will be able to defer more code, reducing the size of the first chunk.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"example"},`Example`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Using the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addReducers`),` function of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),`
one can add one or more slice reducers to the rootReducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),`rootSliceGroup.addReducers({ [sliceName]: sliceReducer });
`)));};MDXContent.isMDXComponent=true;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'rootReducer',title:'rootReducer',sidebar_label:'rootReducer',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Usage',id:'usage',children:[{value:'Adding third-party reducers to the <code>rootReducer</code>.',id:'adding-third-party-reducers-to-the-rootreducer',children:[]},{value:'Self-add of Slice\'s reducer',id:'self-add-of-slices-reducer',children:[]}]},{value:'Details',id:'details',children:[]}];const metadata={"id":"internal/rootReducer","title":"rootReducer","description":"# `rootReducer`","source":"@site/docs/internal/rootReducer.md","permalink":"/slices-for-redux/docs/internal/rootReducer","sidebar_label":"rootReducer"};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"rootreducer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`rootReducer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"usage"},`Usage`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),` must be passed to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux.js.org/api/createstore",target:"_blank"},`createStore`),`
from Redux or to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},`configureStore`),`
from Redux Toolkit. We recommend using `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},`configureStore`),`
from Redux Toolkit.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"adding-third-party-reducers-to-the-rootreducer"},`Adding third-party reducers to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`rootReducer`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Reducers form third-party libraries, unless developed with `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),`, need to explicitly added to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),` using its `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addReducers`),` method.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),`rootReducer.addReducers({
  router: connectRouter(history),
});
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"self-add-of-slices-reducer"},`Self-add of Slice's reducer`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSlice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSlice`)),` by default will add its reducer to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),`.
This reduces the code to be written and helps with code splitting.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"details"},`Details`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),` is a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createMutableCombineReducer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`MutableCombineReducer`)),`
which allows adding slice reducers to it.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`This reduces boilerplate code and promotes code splitting because importing and combining reducers at startup can be avoided for the majority of slice reducers.
Slice reducers can automatically add themselves to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),` when their code is loaded using `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addReducers`),`:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer.addReducers({ [sliceName]: sliceReducer })`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Only those reducers that are not adding themselves, need to be imported and added at startup.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Using the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),` reduces boiler plate code and merge conflicts, because there is no longer the need to import and modify the reducers.js file each time a new slice reducer is written.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(129);
} else {}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={};/* @jsx mdx */const rightToc=[{value:'Features',id:'features',children:[{value:'rootReducer',id:'rootreducer',children:[]},{value:'createSlice',id:'createslice',children:[]}]}];const metadata={"id":"internal/features","title":"features","description":"Mutable Reducers","source":"@site/docs/internal/features.md","permalink":"/slices-for-redux/docs/internal/features"};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Mutable Reducers
Slice Groups
Opinionated Slice
Procedure File`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"features"},`Features`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`A "mutable combine root reducer" that enables "slice reducers" to be added as their code is imported, removes code boilerplate and promotes code splitting.`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`A createSliceGroup() function to organize and ease the navigation of a large State object.`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`An opinionated createSlice() function that promotes writing sets of "case reducers" in separate files.`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`A "Procedure File" pattern for writing Redux code that better scales.`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"rootreducer"},`rootReducer`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Most applications create the rootReducer with `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://redux.js.org/api/combinereducers"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`combineReducers()`)),` from Redux.
All slice reducers must be imported and combined when creating the rootReducer.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When code splitting, dynamically loaded modules need a way to add new reducers
to the rootReducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer`),` is dynamic. Slice reducers are added as needed.
This simplifies and promotes code splitting because importing and combining
reducers at startup can be avoided for the majority of slice reducers.
Slice Reducers can self add to the rootReducer when their code is loaded
using addReducers.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootReducer.addReducers({ [sliceName]: sliceReducer })`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Only those reducers that are not self adding need to be imported and added at startup.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Less boiler plate code and merge conflicts: there is no longer the need to import and modify the reducers.js file each time a new reducer is written.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"createslice"},`createSlice`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`As the application grows and features are added, the code in slice reducers becomes
larger and the source of merge conflicts.
Instead of using a single large switch statement one can use case reducers to handle specific action type.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` promotes writing case reducers in separate files.
When the Slice is created its reducer is empty (has no case reducers).
The files that define the case reducers adds those to the slice's reducer using
the slice's addCaseReducers function.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`someSlice.addCaseReducers({ [actionKey]: caseReducer })`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`With `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` the slice file no longer needs to contain nor import all the cases reducers. The benefits are a simpler slice file, less prone to merge conflicts and cases reducers defined in separate files which make it easier to scale a maintain a large Redux application.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'createSliceGroup',title:'createSliceGroup',sidebar_label:'createSliceGroup',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Parameters',id:'parameters',children:[{value:'<code>name</code>',id:'name',children:[]},{value:'<code>parent</code>',id:'parent',children:[]}]},{value:'Return Value',id:'return-value',children:[]}];const metadata={"id":"api/createSliceGroup","title":"createSliceGroup","description":"# `createSliceGroup`","source":"@site/docs/api/createSliceGroup.md","permalink":"/slices-for-redux/docs/api/createSliceGroup","sidebar_label":"createSliceGroup","sidebar":"docs","previous":{"title":"Slice","permalink":"/slices-for-redux/docs/api/Slice"},"next":{"title":"SliceGroup","permalink":"/slices-for-redux/docs/api/SliceGroup"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"createslicegroup"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`createSliceGroup`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Slice Groups are used to group Slices under some arbitrary named group.
This can help organize and ease navigation of a large store state object
within the Redux Dev Tools.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSliceGroup`),` creates a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),` object.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"parameters"},`Parameters`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSliceGroup`),` accepts a single configuration object argument, with the following options:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`function createSliceGroup({
  /**
   * The SliceGroup name.
   */
  name: string;

  /**
   * Optional - The SliceGroup's parent.
   */
  parent?: SliceParent | string;
})
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"name"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`name`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s name.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The name cannot contain the path separator '/'.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The name is used to build the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s path property.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"parent"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`parent`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`optional - The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s parent.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Default value is: `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` is `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),` this `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` will be added to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootReducer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootReducer`)),`.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` is a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceParent"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceParent`)),`, this `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` will be added to that parent's reducer.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` is a string, it represents the parent's path, and this
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s reducer will needs to be manually added to that parent's reducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"return-value"},`Return Value`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSliceGroup`),` returns a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),` object.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'createSlice',title:'createSlice',sidebar_label:'createSlice',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Parameters',id:'parameters',children:[{value:'<code>actionTypeFormat</code>',id:'actiontypeformat',children:[]},{value:'<code>initialState</code>',id:'initialstate',children:[]},{value:'<code>immer</code>',id:'immer',children:[]},{value:'<code>name</code>',id:'name',children:[]},{value:'<code>parent</code>',id:'parent',children:[]}]},{value:'Return Value',id:'return-value',children:[]}];const metadata={"id":"api/createSlice","title":"createSlice","description":"# `createSlice`","source":"@site/docs/api/createSlice.md","permalink":"/slices-for-redux/docs/api/createSlice","sidebar_label":"createSlice","sidebar":"docs","previous":{"title":"rootSliceGroup","permalink":"/slices-for-redux/docs/api/rootSliceGroup"},"next":{"title":"Slice","permalink":"/slices-for-redux/docs/api/Slice"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"createslice"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`createSlice`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` creates a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),` object.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"parameters"},`Parameters`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` accepts a single configuration object parameter, with the following options:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`function createSlice({
  /**
   * Optional - Defines how an action type is generated given
   * the actionKey and the slice names.
   */
  actionTypeFormat?: 'RTK' | ActionTypeFormatFunc;

  /**
   * Optional - The Slice's reducer uses, or not uses 'immer'.
   */
  immer?: boolean;

  /**
   * The initial state returned by the Slice's reducer and selector
   * when the store state has no value for this slice of state.
   */
  initialState: any;

  /**
   * The Slice's name.
   */
  name: string;

  /**
   * Optional - The Slice's parent.
   */
  parent?: SliceParent | string;
})
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"actiontypeformat"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`actionTypeFormat`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Optional - Defines how an action type is generated given
the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actionKey`),` and the Slice's `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`names`),`.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`names`),` are those of any ancestors SliceGroups and the Slice's name.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The default format is: `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`\${actionKey}_\${[...names].reverse().join('_')}`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When value is: 'RTK' it uses Redux Toolkit convention: `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`\${names.join('/')}/\${actionKey}`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Otherwise the value must be a function with this signature:`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`(actionKey: string, names: string[]) => string`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"initialstate"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`initialState`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The initial state value for this slice of state.
It is returned by the Slice's reducer and selector
when the store state has no value for this slice of state.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"immer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`immer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Optional - The Slice's reducer uses, or not uses `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://github.com/immerjs/immer",target:"_blank"},`immer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Default value is: true`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When migrating to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` you may find that some existing code mutates the state.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`To `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`temporary ignore`),` impure code until it can be fixed set `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`immer`),` to false.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`immer`),` is false, a warning will appear in the console.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"name"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`name`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A string name for this slice of state.
Also used by `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actionTypeFormat`),` to generated the action type constants.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"parent"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`parent`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Optional - The Slice's parent.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Default value is: `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` is `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),` this `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` will be added to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootReducer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootReducer`)),`.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` is a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceParent"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceParent`)),`, this `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` will be added to that parent's reducer.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` is a string, it represents the parent's path, and this
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),`'s reducer will needs to be manually added to that parent's reducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"return-value"},`Return Value`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),` returns a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),` object.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'quick-start',title:'Quick Start',sidebar_label:'Quick Start',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Purpose',id:'purpose',children:[]},{value:'What\'s Included',id:'whats-included',children:[]},{value:'Installation',id:'installation',children:[]},{value:'Use the rootSliceGroup\'s reducer',id:'use-the-rootslicegroups-reducer',children:[]}];const metadata={"id":"introduction/quick-start","title":"Quick Start","description":"# Quick Start","source":"@site/docs/introduction/quick-start.md","permalink":"/slices-for-redux/docs/introduction/quick-start","sidebar_label":"Quick Start","sidebar":"docs","next":{"title":"Mutable Reducers","permalink":"/slices-for-redux/docs/concepts/mutable-reducers"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"quick-start"},`Quick Start`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"purpose"},`Purpose`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` package intent is to make it easy to write predictable Redux code that scales. It was created to:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Reduce code wiring boilerplate`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Reduce code merge conflicts`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Promote more code to split`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Promote a predictable folder / files structure`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Promote reusable encapsulated Redux modules`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` leverages the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org",target:"_blank"},`Redux Toolkit`),` and exposes a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),` object, a different
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSlice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSlice()`)),` function and a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSliceGroup()`)),` function.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"whats-included"},`What's Included`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` includes:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"li"},{"href":"/slices-for-redux/docs/api/rootSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootSliceGroup`)),`: Object that holds a "mutable combine reducer" allowing "slice reducers" to be added as their code is imported, removes code boilerplate and promotes code splitting.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"li"},{"href":"/slices-for-redux/docs/api/createSlice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSlice()`)),`: Function that creates a Slice with basic selectors and a mutable case reducer to promote writing sets of "case reducers" in separate files.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"li"},{"href":"/slices-for-redux/docs/api/createSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSliceGroup()`)),`: Function that creates a SliceGroup to organize and ease the navigation of a large Redux State object.`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"installation"},`Installation`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` is available as a package on NPM for use with a module bundler or in a Node application:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-bash"}),`# NPM
npm install --save @vmw/slices-for-redux

# Yarn
yarn add @vmw/slices-for-redux
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Note: `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://redux-toolkit.js.org/"}),`Redux Toolkit `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`@reduxjs/toolkit`)),` a require peer dependency`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"use-the-rootslicegroups-reducer"},`Use the rootSliceGroup's reducer`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Replace code like this:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [homeSlice.name]: homeSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`With code like this:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`import { rootSliceGroup } from 'slices-for-redux';
import { configureStore } from '@reduxjs/toolkit';

rootSliceGroup.addReducers({
  [homeSlice.name]: homeSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
});

const store = configureStore({
  reducer: rootSliceGroup.reducer,
});
`)));};MDXContent.isMDXComponent=true;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'procedureFilePattern',title:'Procedure File pattern',sidebar_label:'Procedure File pattern',hide_title:true};/* @jsx mdx */const rightToc=[];const metadata={"id":"internal/procedureFilePattern","title":"Procedure File pattern","description":"# `Procedure File pattern (WIP)`","source":"@site/docs/internal/procedureFilePattern.md","permalink":"/slices-for-redux/docs/internal/procedureFilePattern","sidebar_label":"Procedure File pattern"};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"procedure-file-pattern-wip"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`Procedure File pattern (WIP)`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` promotes a pattern that we call "Procedure File":`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`"a file that contains all items that create and process a Redux Action and its side effects"`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Rules - A procedure file:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`the file should be named after the primary action creator that it exports
or if no action creator is exported, it should be named after the
procedure that it performs.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`the`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`may contain 0 or more action creators but may only export one.`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`may export 0 or more action action type constants`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`and sometimes one or more Action Type constant(s) to allow other Procedure Files to have a Saga Watcher listening to those Action s and perform additional work.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Exporting Action Type constant(s) makes these and their expected payload part of the public API. So be carful what you export and how a`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`when refactoring exported Actions.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A Procedure File contains:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Action type constant for one primary and some secondary actions if any.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Action creator functions for those (only the primary action creator function is exported !)`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Action reducers`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`Saga watchers & Saga workers`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},`API delegate`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The Redux Procedure File idea of keeping all items that create and process a Redux Action and its side effects close together, is similar to the "Folder By Feature" pattern.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`These items are coupled, and by keeping them together inside a single file we have a high cohesion.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Using this pattern helps writing modular code that better scales.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A procedure file contain the case reducers, action creators and side effects for one feature like: loadX, selectY, removeZ, ...`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`A procedure file name should be named by the primary action that it exports.
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`loadFoo.proc.js`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",{parentName:"li"},`A procedure should define and export only one primary action file adds its case reducers to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`.`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A procedure file adds its case reducers to the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`.
A procedure file exports only those public action creator functions that views can import and call.
A procedure file exports only those public action type constant that other procedure files
may listen to and act upon.
A procedure file contains the code for the side effects (like Sagas) for the actions it defines.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),`'s Slice promotes writing your case reducers in separate files from the file that created the Slice.
We call these procedure files.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The code is simple. Each procedure file adds its case reducers to the slice.
The slice no longer needs contain nor import all the cases reducers.
No boiler plate code and merge conflicts in the files that create the slices.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Promoting writing case reducers in separate files form the file to be written is But`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The slice's reducer is dynamic which allows to add case reducers as needed.
This promotes modular code that better scales as you application becomes large.
The slice file no longer needs to import all the files that containing case reducers.
As a new feature is implemented new files containing cases reducers are written and using the slice addCaseReducers function`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`someSlice.addCaseReducers({ [actionKey]: caseReducer })`)));};MDXContent.isMDXComponent=true;

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'Slice',title:'Slice',sidebar_label:'Slice',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Properties',id:'properties',children:[{value:'<code>addCaseReducers(caseReducers)</code>',id:'addcasereducerscasereducers',children:[]},{value:'<code>addExtraReducers(extraReducers)</code>',id:'addextrareducersextrareducers',children:[]},{value:'<code>createAction(actionKey)</code>',id:'createactionactionkey',children:[]},{value:'<code>getActionType(actionKey)</code>',id:'getactiontypeactionkey',children:[]},{value:'<code>name</code>',id:'name',children:[]},{value:'<code>parentPath</code>',id:'parentpath',children:[]},{value:'<code>reducer</code>',id:'reducer',children:[]},{value:'<code>selector</code>',id:'selector',children:[]},{value:'<code>selectors</code>',id:'selectors',children:[]}]}];const metadata={"id":"api/Slice","title":"Slice","description":"# `Slice`","source":"@site/docs/api/Slice.md","permalink":"/slices-for-redux/docs/api/Slice","sidebar_label":"Slice","sidebar":"docs","previous":{"title":"createSlice","permalink":"/slices-for-redux/docs/api/createSlice"},"next":{"title":"createSliceGroup","permalink":"/slices-for-redux/docs/api/createSliceGroup"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"slice"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`Slice`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),` is an object that looks like:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`{
    addCaseReducers: (caseReducers: CaseReducers) => CaseReducerActions,
    addExtraReducers: (reducers: Reducers) => void,
    createAction: (actionKey: string) => PayloadActionCreator;
    getActionType: (actionKey: string) => string,
    name: string,
    parentPath: string,
    reducer: Reducer,
    selector: Selector,
    selectors: Selectors,
}
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"properties"},`Properties`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addcasereducerscasereducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`addCaseReducers(caseReducers)`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`caseReducers`),` argument is an object with values case reducer functions and keys string actionKeys.
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addCaseReducers`),` generates action types for each actionKey.
The action types are formatted based on the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actionTypeFormat`),` config option.
Then `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addCaseReducers`),` generates action creators for each action type.
The type of the payload will be based on the type expected in the case reducer function.
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addCaseReducers`),` returns an 'actions' object with the same actionKeys but where the values are the generates action creators.
The action creators are generated using the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org/api/createAction",target:"_blank"},`Redux Toolkit's createAction()`),` function.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addextrareducersextrareducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`addExtraReducers(extraReducers)`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Like caseReducers, extraReducers should be an object containing Redux case reducer functions. However, the keys should be string action type constants.
addExtraReducers will not auto-generate action types nor action creators for extraReducers and it has no return value.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"createactionactionkey"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`createAction(actionKey)`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A utility function to create an action creator for the given action key
string.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`It uses `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`getActionType`),` and then calls `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org/api/createAction",target:"_blank"},`createAction`),` function from Redux Toolkit.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The action creator accepts a single argument, which will be included
in the action object as a field called payload. The action creator function
will also have its toString() overridden so that it returns the action type,
allowing it to be used in reducer logic that is looking for that action type.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"getactiontypeactionkey"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`getActionType(actionKey)`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Given an actionKey string returns an action type.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The action type is formatted for uniqueness and readability in the Redux Dev Tools.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The format is based on the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`actionTypeFormat`),` config option.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"name"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`name`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s name.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"parentpath"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`parentPath`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s location in the redux state.
The value is based on the value of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` config option.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"reducer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`reducer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s reducer.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Useful in unit tests or when opting out from self-add and therefore one must
explicitly write the code to add the Slice's reducer to a parent reducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"selector"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`selector`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s selector.
Given the Store's state it returns the slice of state.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`If in the Store's state the slice of state is undefined,
then it returns the value defined in the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`initialState`),` config option.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`A Slice may exist under one or more nested SliceGroups.
The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Slice`),`'s selector uses the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parentPath`),` to walk up the ancestors SliceGroup names and return the slice of state or the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`initialState`),` if undefined.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"selectors"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`selectors`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`When `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`initialState`),` is an object `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`selectors`),` is an object with the same
field name keys, and values Selector functions that return field's value.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'rootSliceGroup',title:'rootSliceGroup',sidebar_label:'rootSliceGroup',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Properties',id:'properties',children:[{value:'<code>addReducers</code>',id:'addreducers',children:[]},{value:'<code>path</code>',id:'path',children:[]},{value:'<code>reducer</code>',id:'reducer',children:[]}]},{value:'Example',id:'example',children:[]},{value:'Other Slice Groups',id:'other-slice-groups',children:[]}];const metadata={"id":"api/rootSliceGroup","title":"rootSliceGroup","description":"# `rootSliceGroup`","source":"@site/docs/api/rootSliceGroup.md","permalink":"/slices-for-redux/docs/api/rootSliceGroup","sidebar_label":"rootSliceGroup","sidebar":"docs","previous":{"title":"Mutable Reducers","permalink":"/slices-for-redux/docs/concepts/mutable-reducers"},"next":{"title":"createSlice","permalink":"/slices-for-redux/docs/api/createSlice"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"rootslicegroup"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`rootSliceGroup`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),` is the object that manages and exposes the root `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),`.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`New reducers are added to the "root reducer" via the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addReducers`),` function property of the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),`.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),` is the default `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` used in `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSlice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSlice()`)),`.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Therefore a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),`'s reducer is added to the root `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` by default.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),` is an object that looks like:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`{
    addReducers: (reducers: Reducers) => void,
    path: '/',
    reducer: Reducer,
}
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"properties"},`Properties`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addreducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`addReducers`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A function that adds one or more reducer to the rootReducer.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Accepts an object where the keys are names and the values are reducer functions.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"path"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`path`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),`'s path value is: '/'`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"reducer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`reducer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`This is the "root reducer".`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`This `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` must be passed to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux.js.org/api/createstore",target:"_blank"},`createStore`),`
from Redux or to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},`configureStore`),`
from Redux Toolkit. We recommend using `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},`configureStore`),`
from Redux Toolkit.
This reducer is a "mutable combine reducer".`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Use the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addReducers`),` function to add reducers to it.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"example"},`Example`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`import { configureStore } from '@reduxjs/toolkit';
import { rootSliceGroup } from 'slices-for-redux';

// Add reducers before creating the store
rootSliceGroup.addReducers({
  slice1: reducer1,
});

const store = configureStore({
  reducer: rootSliceGroup.reducer,
});
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`// As needed add additional reducers later
rootSliceGroup.addReducers({
  slice2: reducer2,
});
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"other-slice-groups"},`Other Slice Groups`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),` is the top most group of Slices.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`By default `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSlice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSlice()`)),` creates a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),` that manages a "slice of state" that exists directly under the root of the store state object.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`With `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSliceGroup()`)),` one can create other `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroups`)),` which allow grouping Slices under a group name.
In that case a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),` will manage a "slice of state" that exists under that `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),`'s name.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 63 */
/***/ (function(module) {

module.exports = JSON.parse("{\"docsSidebars\":{\"docs\":[{\"type\":\"category\",\"label\":\"Introduction\",\"items\":[{\"type\":\"link\",\"label\":\"Quick Start\",\"href\":\"/slices-for-redux/docs/introduction/quick-start\"}]},{\"type\":\"category\",\"label\":\"Concepts\",\"items\":[{\"type\":\"link\",\"label\":\"Mutable Reducers\",\"href\":\"/slices-for-redux/docs/concepts/mutable-reducers\"}]},{\"type\":\"category\",\"label\":\"API Reference\",\"items\":[{\"type\":\"link\",\"label\":\"rootSliceGroup\",\"href\":\"/slices-for-redux/docs/api/rootSliceGroup\"},{\"type\":\"link\",\"label\":\"createSlice\",\"href\":\"/slices-for-redux/docs/api/createSlice\"},{\"type\":\"link\",\"label\":\"Slice\",\"href\":\"/slices-for-redux/docs/api/Slice\"},{\"type\":\"link\",\"label\":\"createSliceGroup\",\"href\":\"/slices-for-redux/docs/api/createSliceGroup\"},{\"type\":\"link\",\"label\":\"SliceGroup\",\"href\":\"/slices-for-redux/docs/api/SliceGroup\"},{\"type\":\"link\",\"label\":\"SliceParent Interface\",\"href\":\"/slices-for-redux/docs/api/SliceParentInterface\"}]}]},\"permalinkToSidebar\":{\"/slices-for-redux/docs/api/Slice\":\"docs\",\"/slices-for-redux/docs/api/SliceGroup\":\"docs\",\"/slices-for-redux/docs/api/SliceParentInterface\":\"docs\",\"/slices-for-redux/docs/api/createSlice\":\"docs\",\"/slices-for-redux/docs/api/createSliceGroup\":\"docs\",\"/slices-for-redux/docs/api/rootSliceGroup\":\"docs\",\"/slices-for-redux/docs/concepts/mutable-reducers\":\"docs\",\"/slices-for-redux/docs/introduction/quick-start\":\"docs\"}}");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'SliceParentInterface',title:'SliceParent Interface',sidebar_label:'SliceParent Interface',hide_title:true};/* @jsx mdx */const rightToc=[{value:'<code>addReducers</code>',id:'addreducers',children:[]},{value:'<code>path</code>',id:'path',children:[]}];const metadata={"id":"api/SliceParentInterface","title":"SliceParent Interface","description":"# `SliceParent Interface`","source":"@site/docs/api/SliceParentInterface.md","permalink":"/slices-for-redux/docs/api/SliceParentInterface","sidebar_label":"SliceParent Interface","sidebar":"docs","previous":{"title":"SliceGroup","permalink":"/slices-for-redux/docs/api/SliceGroup"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"sliceparent-interface"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`SliceParent Interface`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceParent`),` is the interface that describes the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`parent`),` property in the options argument of `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSlice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSlice`)),` and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/createSliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`createSliceGroup`)),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`interface SliceParent {
  addReducers: AddReducers;
  path: string;
}
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addreducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`addReducers`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A function that the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/Slice"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`Slice`)),` or `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceGroup"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceGroup`)),` can use to add its `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),` to the parent's reducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"path"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`path`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A string expressing the location of the parent inside the store state object.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'other-exports',title:'Other Exports',sidebar_label:'Other Exports',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Internal Exports',id:'internal-exports',children:[{value:'<code>createMutableCombineReducer</code>',id:'createmutablecombinereducer',children:[]},{value:'<code>rootSliceGroup</code>',id:'rootslicegroup',children:[]}]}];const metadata={"id":"api/other-exports","title":"Other Exports","description":"# Other Exports","source":"@site/docs/api/otherExports.md","permalink":"/slices-for-redux/docs/api/other-exports","sidebar_label":"Other Exports"};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"other-exports"},`Other Exports`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`Slices for Redux`),` exports some of its internal utilities, and re-exports additional functions from other dependencies as well.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"internal-exports"},`Internal Exports`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"createmutablecombinereducer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`createMutableCombineReducer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Creates a combine reducer similar to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://redux.js.org/api/combinereducers"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`combineReducers`)),` from Redux but with methods that allow to dynamically add and remove reducers.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootReducer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootReducer`)),` is a MutableCombineReducer.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Example:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),`const reducer = createMutableCombineReducer();
reducer.addReducers({potato: potatoReducer, tomato: tomatoReducer});
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
reducer.removeReducers('potato');
// This would produce the following state object
{
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"rootslicegroup"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`rootSliceGroup`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`rootSliceGroup`),` is the default SliceGroup for all Slices created with `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createSlice`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Its reducer is the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/rootReducer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`rootReducer`)),` and its path value is '/' root.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
// const features = [
//   {
//     title: <>Easy to Use</>,
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: <>Focus on What Matters</>,
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: <>Powered by React</>,
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];
// function Feature({ imageUrl, title, description }) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={classnames('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }
function Home(){const context=Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();const{siteConfig={}}=context;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{title:siteConfig.title,description:siteConfig.tagline},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()('hero hero--primary',_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.heroBanner)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"img/slices-for-redux-blue.svg",alt:"Slices for Redux logo",width:"100",height:"100",style:{paddingRight:20}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:`${_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectTitle} hero__title`},siteConfig.title)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"hero__subtitle"},siteConfig.tagline),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.buttons},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()('button button--secondary button--lg',_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.getStarted),to:Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('docs/introduction/quick-start')},"Get Started")))));}/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'createMutableCombineReducer',title:'createMutableCombineReducer',sidebar_label:'createMutableCombineReducer',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Arguments',id:'arguments',children:[]},{value:'Return Value',id:'return-value',children:[]},{value:'Methods',id:'methods',children:[{value:'addReducers(reducers)',id:'addreducersreducers',children:[]},{value:'RemoveReducers(reducerNames)',id:'removereducersreducernames',children:[]}]},{value:'Example',id:'example',children:[]}];const metadata={"id":"internal/createMutableCombineReducer","title":"createMutableCombineReducer","description":"# `createMutableCombineReducer`","source":"@site/docs/internal/createMutableCombineReducer.md","permalink":"/slices-for-redux/docs/internal/createMutableCombineReducer","sidebar_label":"createMutableCombineReducer"};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"createmutablecombinereducer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`createMutableCombineReducer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Creates a combine reducer similar to `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{href:"https://redux.js.org/api/combinereducers",target:"_blank"},`combineReducers`),` from Redux but with methods to add and remove reducers.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"arguments"},`Arguments`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createMutableCombineReducer`),` accepts one single optional argument `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`initialReducers`),`.
`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`initialReducers`),` is an object whose keys are reducers name and the values are reducers function.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"return-value"},`Return Value`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`createMutableCombineReducer`),` returns a MutableCombineReducer function with two methods.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"methods"},`Methods`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addreducersreducers"},`addReducers(reducers)`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Adds one or more reducers to be combine reducer.
The method accepts an object with keys reducerName string and values Reducer function.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"removereducersreducernames"},`RemoveReducers(reducerNames)`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Removes one or more reducers from the combine reducer.
The method accepts an array of reducerNames string to be removed.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"example"},`Example`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),`const reducer = createMutableCombineReducer();
reducer.addReducers({potato: potatoReducer, tomato: tomatoReducer});
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer ...
  }
}
reducer.removeReducers('potato');
// This would produce the following state object
{
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
`)));};MDXContent.isMDXComponent=true;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
const frontMatter={id:'SliceGroup',title:'SliceGroup',sidebar_label:'SliceGroup',hide_title:true};/* @jsx mdx */const rightToc=[{value:'Properties',id:'properties',children:[{value:'<code>addReducers</code>',id:'addreducers',children:[]},{value:'<code>path</code>',id:'path',children:[]},{value:'<code>reducer</code>',id:'reducer',children:[]}]},{value:'Note',id:'note',children:[]}];const metadata={"id":"api/SliceGroup","title":"SliceGroup","description":"# `SliceGroup`","source":"@site/docs/api/SliceGroup.md","permalink":"/slices-for-redux/docs/api/SliceGroup","sidebar_label":"SliceGroup","sidebar":"docs","previous":{"title":"createSliceGroup","permalink":"/slices-for-redux/docs/api/createSliceGroup"},"next":{"title":"SliceParent Interface","permalink":"/slices-for-redux/docs/api/SliceParentInterface"}};const makeShortcode=name=>function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("div",props);};const layoutProps={rightToc,metadata};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h1",{"id":"slicegroup"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h1"},`SliceGroup`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),` allows grouping several Slices under a given name.
A `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),` is similar in concept to a Folder, where the Slices are the files.
Instead of having all the Slices created directly under the root, one can groups
Slices by some arbitrary chosen group names.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`This can make it easier to navigate in the Redux Dev Tools, a large redux state object with 30+ Slices.
SliceGroups like folders can be nested.
Avoid deep nesting, it may have the opposite effect, making it difficult to find the slices in the store state object.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),` is an object that looks like:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),`{
    addReducers: AddReducers,
    path: string,
    reducer: Reducer,
}
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"properties"},`Properties`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"addreducers"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`addReducers`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A function that children Slices or SliceGroups use to add their reducer to
this SliceGroup's `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`reducer`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"path"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`path`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A string expressing the location of this `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h3",{"id":"reducer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},`reducer`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`The `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),`'s reducer.`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`It is a "mutable combine reducer".`,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("br",{parentName:"p"}),`
`,`Use the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),`'s `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`addReducers`),` function to add reducers to it.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"note"},`Note`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`A `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`SliceGroup`),` is a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",Object(_Users_awyss_github_vmware_slices_for_redux_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"/slices-for-redux/docs/api/SliceParentInterface"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"a"},`SliceParent`)),` that exposes its reducer.`));};MDXContent.isMDXComponent=true;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/index.es.js
var index_es = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Layout/index.js + 6 modules
var Layout = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocSidebar/styles.module.css
var styles_module = __webpack_require__(25);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocSidebar/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const MOBILE_TOGGLE_SIZE=24;function DocSidebarItem({item,onItemClick,collapsible}){const{items,href,label,type}=item;const[collapsed,setCollapsed]=Object(react["useState"])(item.collapsed);const[prevCollapsedProp,setPreviousCollapsedProp]=Object(react["useState"])(null);// If the collapsing state from props changed, probably a navigation event
// occurred. Overwrite the component's collapsed state with the props'
// collapsed value.
if(item.collapsed!==prevCollapsedProp){setPreviousCollapsedProp(item.collapsed);setCollapsed(item.collapsed);}const handleItemClick=Object(react["useCallback"])(e=>{e.preventDefault();setCollapsed(state=>!state);});switch(type){case'category':return items.length>0&&react_default.a.createElement("li",{className:classnames_default()('menu__list-item',{'menu__list-item--collapsed':collapsed}),key:label},react_default.a.createElement("a",{className:classnames_default()('menu__link',{'menu__link--sublist':collapsible,'menu__link--active':collapsible&&!item.collapsed}),href:"#!",onClick:collapsible?handleItemClick:undefined},label),react_default.a.createElement("ul",{className:"menu__list"},items.map(childItem=>react_default.a.createElement(DocSidebarItem,{key:childItem.label,item:childItem,onItemClick:onItemClick,collapsible:collapsible}))));case'link':default:return react_default.a.createElement("li",{className:"menu__list-item",key:label},react_default.a.createElement(Link["a" /* default */],{activeClassName:"menu__link--active",className:"menu__link",exact:true,to:href,onClick:onItemClick},label));}}// Calculate the category collapsing state when a page navigation occurs.
// We want to automatically expand the categories which contains the current page.
function mutateSidebarCollapsingState(item,location){const{items,href,type}=item;switch(type){case'category':{const anyChildItemsActive=items.map(childItem=>mutateSidebarCollapsingState(childItem,location)).filter(val=>val).length>0;// eslint-disable-next-line no-param-reassign
item.collapsed=!anyChildItemsActive;return anyChildItemsActive;}case'link':default:return href===location.pathname.replace(/\/$/,'');}}function DocSidebar(props){const[showResponsiveSidebar,setShowResponsiveSidebar]=Object(react["useState"])(false);const{docsSidebars,location,sidebar:currentSidebar,sidebarCollapsible}=props;if(!currentSidebar){return null;}const sidebarData=docsSidebars[currentSidebar];if(!sidebarData){throw new Error(`Cannot find the sidebar "${currentSidebar}" in the sidebar config!`);}if(sidebarCollapsible){sidebarData.forEach(sidebarItem=>mutateSidebarCollapsingState(sidebarItem,location));}return react_default.a.createElement("div",{className:styles_module_default.a.sidebar},react_default.a.createElement("div",{className:classnames_default()('menu','menu--responsive',{'menu--show':showResponsiveSidebar})},react_default.a.createElement("button",{"aria-label":showResponsiveSidebar?'Close Menu':'Open Menu',className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{setShowResponsiveSidebar(!showResponsiveSidebar);}},showResponsiveSidebar?react_default.a.createElement("span",{className:classnames_default()(styles_module_default.a.sidebarMenuIcon,styles_module_default.a.sidebarMenuCloseIcon)},"\xD7"):react_default.a.createElement("svg",{className:styles_module_default.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:MOBILE_TOGGLE_SIZE,width:MOBILE_TOGGLE_SIZE,viewBox:"0 0 32 32",role:"img",focusable:"false"},react_default.a.createElement("title",null,"Menu"),react_default.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),react_default.a.createElement("ul",{className:"menu__list"},sidebarData.map(item=>react_default.a.createElement(DocSidebarItem,{key:item.label,item:item,onItemClick:()=>{setShowResponsiveSidebar(false);},collapsible:sidebarCollapsible})))));}/* harmony default export */ var theme_DocSidebar = (DocSidebar);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/prism-react-renderer/prism/index.js
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  var uniqueId = 0;
  var _ = {
    util: {
      encode: function (tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === "Array") {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }

        return obj["__id"];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function (o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case "Object":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function (o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === "Object" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === "Array" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      env.tokens = _.tokenize(env.code, env.grammar);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);

            if (delNum != 1) {
              _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            }

            if (oneshot) {
              break;
            }
          }
        }
      }
    },
    hooks: {
      add: function () {}
    },
    tokenize: function (text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == "string") {
      return o;
    }

    if (_.util.type(o) === "Array") {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join("");
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + (attributes ? " " + attributes : "") + ">" + env.content + "</" + env.tag + ">";
  };

  return _;
}();

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': /<!DOCTYPE[\s\S]+?>/i,
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var insideString = {
    'environment': {
      pattern: RegExp("\\$" + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true
    }, // “Normal” string
    {
      pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
      greedy: true,
      inside: insideString
    }],
    'environment': {
      pattern: RegExp("\\$?" + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(Prism);
/* "prismjs/components/prism-clike" */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

Prism.languages.c = Prism.languages.extend('clike', {
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+)\w+/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  'number': /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
});
Prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    alias: 'property',
    inside: {
      // highlight the path of the include statement as a string
      'string': {
        pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
        lookbehind: true
      },
      // highlight macro directives as keywords
      'directive': {
        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
        lookbehind: true,
        alias: 'keyword'
      }
    }
  },
  // highlight predefined macros as constants
  'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});
delete Prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

Prism.languages.cpp = Prism.languages.extend('c', {
  'class-name': {
    pattern: /(\b(?:class|enum|struct)\s+)\w+/,
    lookbehind: true
  },
  'keyword': /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  'number': {
    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
    greedy: true
  },
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
  'boolean': /\b(?:true|false)\b/
});
Prism.languages.insertBefore('cpp', 'string', {
  'raw-string': {
    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
    alias: 'string',
    greedy: true
  }
});
/* "prismjs/components/prism-css" */

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /@[\w-]+/ // See rest below

      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);
/* "prismjs/components/prism-css-extras" */


Prism.languages.css.selector = {
  pattern: Prism.languages.css.selector,
  inside: {
    'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+/,
    'class': /\.[-:.\w]+/,
    'id': /#[-:.\w]+/,
    'attribute': {
      pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
      greedy: true,
      inside: {
        'punctuation': /^\[|\]$/,
        'case-sensitivity': {
          pattern: /(\s)[si]$/i,
          lookbehind: true,
          alias: 'keyword'
        },
        'namespace': {
          pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
          lookbehind: true,
          inside: {
            'punctuation': /\|$/
          }
        },
        'attribute': {
          pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        'value': [/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
          pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
          lookbehind: true
        }],
        'operator': /[|~*^$]?=/
      }
    },
    'n-th': [{
      pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
      lookbehind: true,
      inside: {
        'number': /[\dn]+/,
        'operator': /[+-]/
      }
    }, {
      pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
      lookbehind: true
    }],
    'punctuation': /[()]/
  }
};
Prism.languages.insertBefore('css', 'property', {
  'variable': {
    pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
    lookbehind: true
  }
});
Prism.languages.insertBefore('css', 'function', {
  'operator': {
    pattern: /(\s)[+\-*\/](?=\s)/,
    lookbehind: true
  },
  'hexcode': /#[\da-f]{3,8}/i,
  'entity': /\\[\da-f]{1,8}/i,
  'unit': {
    pattern: /(\d)(?:%|[a-z]+)/,
    lookbehind: true
  },
  'number': /-?[\d.]+/
});
/* "prismjs/components/prism-javascript" */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(Prism);
/* "prismjs/components/prism-javadoclike" */


(function (Prism) {
  var javaDocLike = Prism.languages.javadoclike = {
    'parameter': {
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
      lookbehind: true
    },
    'keyword': {
      // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
      // @word, {@word}
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: true
    },
    'punctuation': /[{}]/
  };
  /**
   * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.
   *
   * @param {string} lang the language add doc comment support to.
   * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.
   */

  function docCommentSupport(lang, callback) {
    var tokenName = 'doc-comment';
    var grammar = Prism.languages[lang];

    if (!grammar) {
      return;
    }

    var token = grammar[tokenName];

    if (!token) {
      // add doc comment: /** */
      var definition = {};
      definition[tokenName] = {
        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
        alias: 'comment'
      };
      grammar = Prism.languages.insertBefore(lang, 'comment', definition);
      token = grammar[tokenName];
    }

    if (token instanceof RegExp) {
      // convert regex to object
      token = grammar[tokenName] = {
        pattern: token
      };
    }

    if (Array.isArray(token)) {
      for (var i = 0, l = token.length; i < l; i++) {
        if (token[i] instanceof RegExp) {
          token[i] = {
            pattern: token[i]
          };
        }

        callback(token[i]);
      }
    } else {
      callback(token);
    }
  }
  /**
   * Adds doc-comment support to the given languages for the given documentation language.
   *
   * @param {string[]|string} languages
   * @param {Object} docLanguage
   */


  function addSupport(languages, docLanguage) {
    if (typeof languages === 'string') {
      languages = [languages];
    }

    languages.forEach(function (lang) {
      docCommentSupport(lang, function (pattern) {
        if (!pattern.inside) {
          pattern.inside = {};
        }

        pattern.inside.rest = docLanguage;
      });
    });
  }

  Object.defineProperty(javaDocLike, 'addSupport', {
    value: addSupport
  });
  javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike);
})(Prism);
/* "prismjs/components/prism-java" */


(function (Prism) {
  var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/; // based on the java naming conventions

  var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
  Prism.languages.java = Prism.languages.extend('clike', {
    'class-name': [className, // variables and parameters
    // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
    /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
    'keyword': keywords,
    'function': [Prism.languages.clike.function, {
      pattern: /(\:\:)[a-z_]\w*/,
      lookbehind: true
    }],
    'number': /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    'operator': {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('java', 'class-name', {
    'annotation': {
      alias: 'punctuation',
      pattern: /(^|[^.])@\w+/,
      lookbehind: true
    },
    'namespace': {
      pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    },
    'generics': {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        'class-name': className,
        'keyword': keywords,
        'punctuation': /[<>(),.:]/,
        'operator': /[?&|]/
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-markup-templating" */


(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-php" */

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */


(function (Prism) {
  Prism.languages.php = Prism.languages.extend('clike', {
    'keyword': /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    'boolean': {
      pattern: /\b(?:false|true)\b/i,
      alias: 'constant'
    },
    'constant': [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('php', 'string', {
    'shell-comment': {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true,
      alias: 'comment'
    }
  });
  Prism.languages.insertBefore('php', 'comment', {
    'delimiter': {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: 'important'
    }
  });
  Prism.languages.insertBefore('php', 'keyword', {
    'variable': /\$+(?:\w+\b|(?={))/i,
    'package': {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: true,
      inside: {
        punctuation: /\\/
      }
    }
  }); // Must be defined after the function pattern

  Prism.languages.insertBefore('php', 'operator', {
    'property': {
      pattern: /(->)[\w]+/,
      lookbehind: true
    }
  });
  var string_interpolation = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: true,
    inside: {
      rest: Prism.languages.php
    }
  };
  Prism.languages.insertBefore('php', 'string', {
    'nowdoc-string': {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<'?|[';]$/
          }
        }
      }
    },
    'heredoc-string': {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<"?|[";]$/
          }
        },
        'interpolation': string_interpolation // See below

      }
    },
    'single-quoted-string': {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true,
      alias: 'string'
    },
    'double-quoted-string': {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      alias: 'string',
      inside: {
        'interpolation': string_interpolation // See below

      }
    }
  }); // The different types of PHP strings "replace" the C-like standard string

  delete Prism.languages.php['string'];
  Prism.hooks.add('before-tokenize', function (env) {
    if (!/<\?/.test(env.code)) {
      return;
    }

    var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
  });
})(Prism);
/* "prismjs/components/prism-jsdoc" */


(function (Prism) {
  var javascript = Prism.languages.javascript;
  var type = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source;
  var parameterPrefix = '(@(?:param|arg|argument|property)\\s+(?:' + type + '\\s+)?)';
  Prism.languages.jsdoc = Prism.languages.extend('javadoclike', {
    'parameter': {
      // @param {string} foo - foo bar
      pattern: RegExp(parameterPrefix + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }
  });
  Prism.languages.insertBefore('jsdoc', 'keyword', {
    'optional-parameter': {
      // @param {string} [baz.foo="bar"] foo bar
      pattern: RegExp(parameterPrefix + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),
      lookbehind: true,
      inside: {
        'parameter': {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: true,
          inside: {
            'punctuation': /\./
          }
        },
        'code': {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: true,
          inside: javascript,
          alias: 'language-javascript'
        },
        'punctuation': /[=[\]]/
      }
    },
    'class-name': [{
      pattern: RegExp('(@[a-z]+\\s+)' + type),
      lookbehind: true,
      inside: {
        'punctuation': /[.,:?=<>|{}()[\]]/
      }
    }, {
      pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }],
    'example': {
      pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: true,
      inside: {
        'code': {
          pattern: /^(\s*(?:\*\s*)?).+$/m,
          lookbehind: true,
          inside: javascript,
          alias: 'language-javascript'
        }
      }
    }
  });
  Prism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc);
})(Prism);
/* "prismjs/components/prism-actionscript" */


Prism.languages.actionscript = Prism.languages.extend('javascript', {
  'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
  'operator': /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
});
Prism.languages.actionscript['class-name'].alias = 'function';

if (Prism.languages.markup) {
  Prism.languages.insertBefore('actionscript', 'string', {
    'xml': {
      pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
      lookbehind: true,
      inside: {
        rest: Prism.languages.markup
      }
    }
  });
}
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/,
      interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.javascript
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(Prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(Prism);
/* "prismjs/components/prism-flow" */


(function (Prism) {
  Prism.languages.flow = Prism.languages.extend('javascript', {});
  Prism.languages.insertBefore('flow', 'keyword', {
    'type': [{
      pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
      alias: 'tag'
    }]
  });
  Prism.languages.flow['function-variable'].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i;
  delete Prism.languages.flow['parameter'];
  Prism.languages.insertBefore('flow', 'operator', {
    'flow-punctuation': {
      pattern: /\{\||\|\}/,
      alias: 'punctuation'
    }
  });

  if (!Array.isArray(Prism.languages.flow.keyword)) {
    Prism.languages.flow.keyword = [Prism.languages.flow.keyword];
  }

  Prism.languages.flow.keyword.unshift({
    pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
    lookbehind: true
  });
})(Prism);
/* "prismjs/components/prism-n4js" */


Prism.languages.n4js = Prism.languages.extend('javascript', {
  // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
  'keyword': /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
});
Prism.languages.insertBefore('n4js', 'constant', {
  // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
  'annotation': {
    pattern: /@+\w+/,
    alias: 'operator'
  }
});
Prism.languages.n4jsd = Prism.languages.n4js;
/* "prismjs/components/prism-typescript" */

Prism.languages.typescript = Prism.languages.extend('javascript', {
  // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
  'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
Prism.languages.ts = Prism.languages.typescript;
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:md|markdown)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {}

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(Prism);
/* "prismjs/components/prism-graphql" */


Prism.languages.graphql = {
  'comment': /#.*/,
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:true|false)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
  'operator': /[!=|]|\.{3}/,
  'punctuation': /[!(){}\[\]:=,]/,
  'constant': /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
/* "prismjs/components/prism-markdown" */

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
   * @returns {RegExp}
   */

  function createInline(pattern, starAlternative) {
    pattern = pattern.replace(/<inner>/g, inner);

    if (starAlternative) {
      pattern = pattern + '|' + pattern.replace(/_/g, '\\*');
    }

    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, tableCell);
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // `code`
      // ``code``
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#+.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'variable': {
          pattern: /(\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'content': {
          pattern: /(^!?\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'string': {
          pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          var alias = 'language-' + codeLang.content.trim().split(/\s+/)[0].toLowerCase(); // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      // reverse Prism.util.encode
      var code = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      env.content = Prism.highlight(code, grammar, codeLang);
    }
  });
  Prism.languages.md = Prism.languages.markdown;
})(Prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d+.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === "diff") {
      alias.push("bold");
    }

    Prism.languages.diff[name] = {
      // pattern: /^(?:[_].*(?:\r\n?|\n|(?![\s\S])))+/m
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(Prism);
/* "prismjs/components/prism-git" */


Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit_sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

Prism.languages.go = Prism.languages.extend('clike', {
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  'boolean': /\b(?:_|iota|nil|true|false)\b/,
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'number': /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  'string': {
    pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  }
});
delete Prism.languages.go['class-name'];
/* "prismjs/components/prism-handlebars" */

(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:true|false)\b/,
    'block': {
      pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
})(Prism);
/* "prismjs/components/prism-json" */


Prism.languages.json = {
  'property': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  'number': /-?\d+\.?\d*(e[+-]?\d+)?/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

Prism.languages.less = Prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  'operator': /[+\-*\/]/
});
Prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

Prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  // Built-in target names
  'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  // Targets
  'symbol': {
    pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
    inside: {
      'variable': /\$+(?:[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  'keyword': [// Directives
  /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
  {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: true
  }],
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

Prism.languages.objectivec = Prism.languages.extend('c', {
  'keyword': /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'string': /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec['class-name'];
/* "prismjs/components/prism-ocaml" */

Prism.languages.ocaml = {
  'comment': /\(\*[\s\S]*?\*\)/,
  'string': [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: true
  }],
  'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
  'type': {
    pattern: /\B['`]\w*/,
    alias: 'variable'
  },
  'directive': {
    pattern: /\B#\w+/,
    alias: 'function'
  },
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  // Custom operators are allowed
  'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
  'punctuation': /[(){}\[\]|_.,:;]/
};
/* "prismjs/components/prism-python" */

Prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'string-interpolation': {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^\s*)@\w+(?:\.\w+)*/i,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:True|False|None)\b/,
  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
/* "prismjs/components/prism-reason" */

Prism.languages.reason = Prism.languages.extend('clike', {
  'comment': {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: true
  },
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
Prism.languages.insertBefore('reason', 'class-name', {
  'character': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    alias: 'string'
  },
  'constructor': {
    // Negative look-ahead prevents from matching things like String.capitalize
    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
    alias: 'variable'
  },
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete Prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/m
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: true
    }
  });
})(Prism);
/* "prismjs/components/prism-scss" */


Prism.languages.scss = Prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
Prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: true
  }]
});
Prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
Prism.languages.insertBefore('scss', 'function', {
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});
Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
/* "prismjs/components/prism-sql" */

Prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var inside = {
    'url': /url\((["']?).*?\1\)/i,
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'number': /\b\d+(?:\.\d+)?%?/,
    'boolean': /\b(?:true|false)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^{|}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'comment': {
      pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'atrule-declaration': {
      pattern: /(^\s*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
      lookbehind: true,
      inside: {
        keyword: /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(Prism);
/* "prismjs/components/prism-tsx" */


var typescript = Prism.util.clone(Prism.languages.typescript);
Prism.languages.tsx = Prism.languages.extend('jsx', typescript);
/* "prismjs/components/prism-wasm" */

Prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};
/* "prismjs/components/prism-yaml" */

Prism.languages.yaml = {
  'scalar': {
    pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
    lookbehind: true,
    alias: 'string'
  },
  'comment': /#.*/,
  'key': {
    pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
    lookbehind: true,
    alias: 'atrule'
  },
  'directive': {
    pattern: /(^[ \t]*)%.+/m,
    lookbehind: true,
    alias: 'important'
  },
  'datetime': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: true,
    alias: 'number'
  },
  'boolean': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'null': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'string': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
    lookbehind: true,
    greedy: true
  },
  'number': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
    lookbehind: true
  },
  'tag': /![^\s]+/,
  'important': /[&*][\w]+/,
  'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
};
Prism.languages.yml = Prism.languages.yaml;

/* harmony default export */ var prism_react_renderer_prism = (Prism);

// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism_react_renderer_prism,
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight =
/*@__PURE__*/
function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? Prism.tokenize(code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react["Component"]);

/* harmony default export */ var dist = (Highlight);


// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/palenight/index.js
var palenight = __webpack_require__(81);
var palenight_default = /*#__PURE__*/__webpack_require__.n(palenight);

// EXTERNAL MODULE: ./node_modules/clipboard/dist/clipboard.js
var dist_clipboard = __webpack_require__(79);
var clipboard_default = /*#__PURE__*/__webpack_require__.n(dist_clipboard);

// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(80);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/CodeBlock/styles.module.css
var CodeBlock_styles_module = __webpack_require__(33);
var CodeBlock_styles_module_default = /*#__PURE__*/__webpack_require__.n(CodeBlock_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/CodeBlock/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const highlightLinesRangeRegex=/{([\d,-]+)}/;/* harmony default export */ var CodeBlock = (({children,className:languageClassName,metastring})=>{const{siteConfig:{themeConfig:{prism={}}}}=Object(useDocusaurusContext["a" /* default */])();const[showCopied,setShowCopied]=Object(react["useState"])(false);const target=Object(react["useRef"])(null);const button=Object(react["useRef"])(null);let highlightLines=[];if(metastring&&highlightLinesRangeRegex.test(metastring)){const highlightLinesRange=metastring.match(highlightLinesRangeRegex)[1];highlightLines=parse_numeric_range_default.a.parse(highlightLinesRange).filter(n=>n>0);}Object(react["useEffect"])(()=>{let clipboard;if(button.current){clipboard=new clipboard_default.a(button.current,{target:()=>target.current});}return()=>{if(clipboard){clipboard.destroy();}};},[button.current,target.current]);let language=languageClassName&&languageClassName.replace(/language-/,'');if(!language&&prism.defaultLanguage){language=prism.defaultLanguage;}const handleCopyCode=()=>{window.getSelection().empty();setShowCopied(true);setTimeout(()=>setShowCopied(false),2000);};return react_default.a.createElement(dist,Object(esm_extends["a" /* default */])({},defaultProps,{theme:prism.theme||palenight_default.a,code:children.trim(),language:language}),({className,style,tokens,getLineProps,getTokenProps})=>react_default.a.createElement("div",{className:CodeBlock_styles_module_default.a.codeBlockWrapper},react_default.a.createElement("pre",{ref:target,className:classnames_default()(className,CodeBlock_styles_module_default.a.codeBlock),style:style},tokens.map((line,i)=>{const lineProps=getLineProps({line,key:i});if(highlightLines.includes(i+1)){lineProps.className=`${lineProps.className} docusaurus-highlight-code-line`;}return react_default.a.createElement("div",Object(esm_extends["a" /* default */])({key:i},lineProps),line.map((token,key)=>react_default.a.createElement("span",Object(esm_extends["a" /* default */])({key:key},getTokenProps({token,key})))));})),react_default.a.createElement("button",{ref:button,type:"button","aria-label":"Copy code to clipboard",className:CodeBlock_styles_module_default.a.copyButton,onClick:handleCopyCode},showCopied?'Copied':'Copy')));});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Heading/styles.css
var styles = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/Heading/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */const Heading=Tag=>({id,...props})=>{if(!id){return react_default.a.createElement(Tag,props);}return react_default.a.createElement(Tag,props,react_default.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:id}),react_default.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${id}`,title:"Direct link to heading"},"#"),props.children);};/* harmony default export */ var theme_Heading = (Heading);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/MDXComponents/styles.module.css
var MDXComponents_styles_module = __webpack_require__(82);
var MDXComponents_styles_module_default = /*#__PURE__*/__webpack_require__.n(MDXComponents_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/MDXComponents/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ var MDXComponents = ({code:props=>{const{children}=props;if(typeof children==='string'){return react_default.a.createElement(CodeBlock,props);}return children;},a:props=>{if(/\.[^./]+$/.test(props.href)){// eslint-disable-next-line jsx-a11y/anchor-has-content
return react_default.a.createElement("a",props);}return react_default.a.createElement(Link["a" /* default */],props);},pre:props=>react_default.a.createElement("pre",Object(esm_extends["a" /* default */])({className:MDXComponents_styles_module_default.a.mdxCodeBlock},props)),h1:theme_Heading('h1'),h2:theme_Heading('h2'),h3:theme_Heading('h3'),h4:theme_Heading('h4'),h5:theme_Heading('h5'),h6:theme_Heading('h6')});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/NotFound.js
var NotFound = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/router.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocPage/styles.module.css
var DocPage_styles_module = __webpack_require__(34);
var DocPage_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocPage_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocPage/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function matchingRouteExist(routes,pathname){return routes.some(route=>Object(react_router_dom["b" /* matchPath */])(pathname,route));}function DocPage(props){const{route,docsMetadata,location}=props;const{permalinkToSidebar,docsSidebars,version}=docsMetadata;const sidebar=permalinkToSidebar[location.pathname.replace(/\/$/,'')];const{siteConfig:{themeConfig={}}={}}=Object(useDocusaurusContext["a" /* default */])();const{sidebarCollapsible=true}=themeConfig;if(!matchingRouteExist(route.routes,location.pathname)){return react_default.a.createElement(NotFound["default"],props);}return react_default.a.createElement(Layout["a" /* default */],{version:version},react_default.a.createElement("div",{className:DocPage_styles_module_default.a.docPage},sidebar&&react_default.a.createElement("div",{className:DocPage_styles_module_default.a.docSidebarContainer},react_default.a.createElement(theme_DocSidebar,{docsSidebars:docsSidebars,location:location,sidebar:sidebar,sidebarCollapsible:sidebarCollapsible})),react_default.a.createElement("main",{className:DocPage_styles_module_default.a.docMainContainer},react_default.a.createElement(index_es["a" /* MDXProvider */],{components:MDXComponents},Object(renderRoutes["a" /* default */])(route.routes)))));}/* harmony default export */ var theme_DocPage = __webpack_exports__["default"] = (DocPage);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocPaginator/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{metadata}=props;return react_default.a.createElement("nav",{className:"pagination-nav"},react_default.a.createElement("div",{className:"pagination-nav__item"},metadata.previous&&react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.previous.permalink},react_default.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),react_default.a.createElement("h4",{className:"pagination-nav__link--label"},"\xAB ",metadata.previous.title))),react_default.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.next.permalink},react_default.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),react_default.a.createElement("h4",{className:"pagination-nav__link--label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useTOCHighlight(linkClassName,linkActiveClassName,topOffset){const[lastActiveLink,setLastActiveLink]=Object(react["useState"])(undefined);Object(react["useEffect"])(()=>{let headersAnchors=[];let links=[];function setActiveLink(){function getActiveHeaderAnchor(){let index=0;let activeHeaderAnchor=null;headersAnchors=document.getElementsByClassName('anchor');while(index<headersAnchors.length&&!activeHeaderAnchor){const headerAnchor=headersAnchors[index];const{top}=headerAnchor.getBoundingClientRect();if(top>=0&&top<=topOffset){activeHeaderAnchor=headerAnchor;}index+=1;}return activeHeaderAnchor;}const activeHeaderAnchor=getActiveHeaderAnchor();if(activeHeaderAnchor){let index=0;let itemHighlighted=false;links=document.getElementsByClassName(linkClassName);while(index<links.length&&!itemHighlighted){const link=links[index];const{href}=link;const anchorValue=decodeURIComponent(href.substring(href.indexOf('#')+1));if(activeHeaderAnchor.id===anchorValue){if(lastActiveLink){lastActiveLink.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);setLastActiveLink(link);itemHighlighted=true;}index+=1;}}}document.addEventListener('scroll',setActiveLink);document.addEventListener('resize',setActiveLink);setActiveLink();return()=>{document.removeEventListener('scroll',setActiveLink);document.removeEventListener('resize',setActiveLink);};});}/* harmony default export */ var hooks_useTOCHighlight = (useTOCHighlight);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocItem/styles.module.css
var styles_module = __webpack_require__(23);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/src/theme/DocItem/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const LINK_CLASS_NAME='contents__link';const ACTIVE_LINK_CLASS_NAME='contents__link--active';const TOP_OFFSET=100;function DocTOC({headings}){hooks_useTOCHighlight(LINK_CLASS_NAME,ACTIVE_LINK_CLASS_NAME,TOP_OFFSET);return react_default.a.createElement("div",{className:"col col--3"},react_default.a.createElement("div",{className:styles_module_default.a.tableOfContents},react_default.a.createElement(Headings,{headings:headings})));}/* eslint-disable jsx-a11y/control-has-associated-label */function Headings({headings,isChild}){if(!headings.length)return null;return react_default.a.createElement("ul",{className:isChild?'':'contents contents__left-border'},headings.map(heading=>react_default.a.createElement("li",{key:heading.id},react_default.a.createElement("a",{href:`#${heading.id}`,className:LINK_CLASS_NAME,dangerouslySetInnerHTML:{__html:heading.value}}),react_default.a.createElement(Headings,{isChild:true,headings:heading.children}))));}function DocItem(props){const{siteConfig={}}=Object(useDocusaurusContext["a" /* default */])();const{url:siteUrl}=siteConfig;const{content:DocContent}=props;const{metadata}=DocContent;const{description,title,permalink,image:metaImage,editUrl,lastUpdatedAt,lastUpdatedBy,keywords,version}=metadata;const{frontMatter:{hide_title:hideTitle,hide_table_of_contents:hideTableOfContents}}=DocContent;const metaImageUrl=siteUrl+Object(useBaseUrl["a" /* default */])(metaImage);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Head["a" /* default */],null,title&&react_default.a.createElement("title",null,title),description&&react_default.a.createElement("meta",{name:"description",content:description}),description&&react_default.a.createElement("meta",{property:"og:description",content:description}),keywords&&keywords.length&&react_default.a.createElement("meta",{name:"keywords",content:keywords.join(',')}),metaImage&&react_default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),metaImage&&react_default.a.createElement("meta",{property:"twitter:image",content:metaImageUrl}),metaImage&&react_default.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${title}`}),permalink&&react_default.a.createElement("meta",{property:"og:url",content:siteUrl+permalink})),react_default.a.createElement("div",{className:"padding-vert--lg"},react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col"},react_default.a.createElement("div",{className:styles_module_default.a.docItemContainer},react_default.a.createElement("article",null,version&&react_default.a.createElement("span",{style:{verticalAlign:'top'},className:"badge badge--info"},"Version: ",version),!hideTitle&&react_default.a.createElement("header",null,react_default.a.createElement("h1",{className:styles_module_default.a.docTitle},title)),react_default.a.createElement("div",{className:"markdown"},react_default.a.createElement(DocContent,null))),(editUrl||lastUpdatedAt||lastUpdatedBy)&&react_default.a.createElement("div",{className:"margin-vert--xl"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col"},editUrl&&react_default.a.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener"},react_default.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:'0.3em',verticalAlign:'sub'}},react_default.a.createElement("g",null,react_default.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(lastUpdatedAt||lastUpdatedBy)&&react_default.a.createElement("div",{className:"col text--right"},react_default.a.createElement("em",null,react_default.a.createElement("small",null,"Last updated",' ',lastUpdatedAt&&react_default.a.createElement(react_default.a.Fragment,null,"on",' ',react_default.a.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString(),className:styles_module_default.a.docLastUpdatedAt},new Date(lastUpdatedAt*1000).toLocaleDateString()),lastUpdatedBy&&' '),lastUpdatedBy&&react_default.a.createElement(react_default.a.Fragment,null,"by ",react_default.a.createElement("strong",null,lastUpdatedBy)), false&&false))))),react_default.a.createElement("div",{className:"margin-vert--lg"},react_default.a.createElement(theme_DocPaginator,{metadata:metadata})))),!hideTableOfContents&&DocContent.rightToc&&react_default.a.createElement(DocTOC,{headings:DocContent.rightToc})))));}/* harmony default export */ var theme_DocItem = __webpack_exports__["default"] = (DocItem);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs"}return includePath};function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){includePath=exports.resolveInclude(path.replace(/^\/*/,""),options.root||"/",true)}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath}}if(!includePath){if(Array.isArray(views)&&views.some(function(v){filePath=exports.resolveInclude(path,v,true);return fs.existsSync(filePath)})){includePath=filePath}}if(!includePath){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"")}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"")}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func)}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result)}catch(err){reject(err)}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data)}catch(err){return cb(err)}cb(null,result)}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy({},options);opts.filename=getIncludePath(path,opts);return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true}if(!opts.context){opts.context=opts.scope}delete opts.scope}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||{};var opts=o||{};if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA)}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop()}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop())}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views}if(data.settings["view cache"]){opts.cache=true}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts)}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS)}opts.filename=filename}else{data={}}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset()};function Template(text,opts){opts=opts||{};var options={};this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";this.dependencies=[];options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false}else{options._with=typeof opts._with!="undefined"?opts._with:true}this.opts=options;this.regex=this.createRegex()}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n"}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(i>0){destructuring+=",\n  "}destructuring+=name+" = __locals."+name}prepended+=destructuring+";\n"}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n"}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+(opts.filename?JSON.stringify(opts.filename):"undefined")+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n"}else{src=this.source}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src}}if(opts.strict){src='"use strict";\n'+src}if(opts.debug){console.log(src)}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+opts.filename+"\n"}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")()}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src)}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option."}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy({},data);if(includeData){d=utils.shallowCopy(d,includeData)}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||{},escapeFn,include,rethrow])};returnedFn.dependencies=this.dependencies;if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true})}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line)})}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos)}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str)}if(str){arr.push(str)}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n"},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line)}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n"}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line)}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n"}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};exports.escapeXML.toString=function(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr};exports.shallowCopy=function(to,from){from=from||{};for(var p in from){to[p]=from[p]}return to};exports.shallowCopyFromList=function(to,from,list){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){to[p]=from[p]}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val},get:function(key){return this._data[key]},remove:function(key){delete this._data[key]},reset:function(){this._data={}}}},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up--;up){parts.unshift("..")}}return parts}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var splitPath=function(filename){return splitPathRe.exec(filename).slice(1)};exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){var result=splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir};exports.basename=function(path,ext){var f=splitPath(path)[2];if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length)}return f};exports.extname=function(path){return splitPath(path)[3]};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i])}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)}}).call(this,require("_process"))},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;runClearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.0.1",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",main:"./lib/ejs.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{},devDependencies:{browserify:"^13.1.1",eslint:"^4.14.0","git-directory-deploy":"^1.5.1",jake:"^10.3.1",jsdoc:"^3.4.0","lru-cache":"^4.0.1",mocha:"^5.0.5","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha",postinstall:"node ./postinstall.js"}}},{}]},{},[1])(1)});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(85);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ReactLoadableSSRAddon = _interopRequireDefault(__webpack_require__(92));

var _getBundles = _interopRequireDefault(__webpack_require__(99));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = _ReactLoadableSSRAddon["default"];
module.exports.getBundles = _getBundles["default"];

/***/ }),
/* 74 */
/***/ (function(module) {

module.exports = JSON.parse("{\"/slices-for-redux/\":{\"component\":\"c4f5d8e4\"},\"/slices-for-redux/docs/:route\":{\"component\":\"1be78505\",\"docsMetadata\":\"b1a03eb7\"},\"/slices-for-redux/docs/api/Slice\":{\"component\":\"17896441\",\"content\":\"7d169303\"},\"/slices-for-redux/docs/api/SliceGroup\":{\"component\":\"17896441\",\"content\":\"d6663db5\"},\"/slices-for-redux/docs/api/SliceParentInterface\":{\"component\":\"17896441\",\"content\":\"c13630ee\"},\"/slices-for-redux/docs/api/createSlice\":{\"component\":\"17896441\",\"content\":\"3f3374c0\"},\"/slices-for-redux/docs/api/createSliceGroup\":{\"component\":\"17896441\",\"content\":\"34c687fc\"},\"/slices-for-redux/docs/api/other-exports\":{\"component\":\"17896441\",\"content\":\"c31671b0\"},\"/slices-for-redux/docs/api/rootSliceGroup\":{\"component\":\"17896441\",\"content\":\"a382b2c0\"},\"/slices-for-redux/docs/concepts/mutable-reducers\":{\"component\":\"17896441\",\"content\":\"055cdc0f\"},\"/slices-for-redux/docs/internal/_extra\":{\"component\":\"17896441\",\"content\":\"0502ccef\"},\"/slices-for-redux/docs/internal/createMutableCombineReducer\":{\"component\":\"17896441\",\"content\":\"c9d20a96\"},\"/slices-for-redux/docs/internal/features\":{\"component\":\"17896441\",\"content\":\"316fce65\"},\"/slices-for-redux/docs/internal/procedureFilePattern\":{\"component\":\"17896441\",\"content\":\"76366398\"},\"/slices-for-redux/docs/internal/rootReducer\":{\"component\":\"17896441\",\"content\":\"0eabd596\"},\"/slices-for-redux/docs/introduction/quick-start\":{\"component\":\"17896441\",\"content\":\"572f3558\"}}");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(55);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _check = __webpack_require__(130);

var _check2 = _interopRequireDefault(_check);

var _x = __webpack_require__(131);

var _x2 = _interopRequireDefault(_x);

var _util = __webpack_require__(132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
    _this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.checked !== this.props.checked) {
        this.setState({ checked: !!this.props.checked });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var checkbox = this.input;
      if (event.target !== checkbox && !this.moved) {
        this.previouslyChecked = checkbox.checked;
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      var checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

      this.setState({ checked: checked });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.startX = (0, _util.pointerCoord)(event).x;
      this.activated = true;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (!this.activated) return;
      this.moved = true;

      if (this.startX) {
        var currentX = (0, _util.pointerCoord)(event).x;
        if (this.state.checked && currentX + 15 < this.startX) {
          this.setState({ checked: false });
          this.startX = currentX;
          this.activated = true;
        } else if (currentX - 15 > this.startX) {
          this.setState({ checked: true });
          this.startX = currentX;
          this.activated = currentX < this.startX + 5;
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      if (!this.moved) return;
      var checkbox = this.input;
      event.preventDefault();

      if (this.startX) {
        var endX = (0, _util.pointerCoord)(event).x;
        if (this.previouslyChecked === true && this.startX + 4 > endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: false });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        } else if (this.startX - 4 < endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: true });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        }

        this.activated = false;
        this.startX = null;
        this.moved = false;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      var onFocus = this.props.onFocus;


      if (onFocus) {
        onFocus(event);
      }

      this.setState({ hasFocus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;


      if (onBlur) {
        onBlur(event);
      }

      this.setState({ hasFocus: false });
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icons = this.props.icons;

      if (!icons) {
        return null;
      }
      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _icons = _props.icons,
          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);

      var classes = (0, _classnames2.default)('react-toggle', {
        'react-toggle--checked': this.state.checked,
        'react-toggle--focus': this.state.hasFocus,
        'react-toggle--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track' },
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-check' },
            this.getIcon('checked')
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-x' },
            this.getIcon('unchecked')
          )
        ),
        _react2.default.createElement('div', { className: 'react-toggle-thumb' }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'react-toggle-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Toggle;
}(_react.PureComponent);

exports.default = Toggle;


Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: _react2.default.createElement(_check2.default, null),
    unchecked: _react2.default.createElement(_x2.default, null)
  }
};

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  'aria-labelledby': _propTypes2.default.string,
  'aria-label': _propTypes2.default.string,
  icons: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    checked: _propTypes2.default.node,
    unchecked: _propTypes2.default.node
  })])
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footerLogoLink": "footerLogoLink_1Wg7"
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardAction = __webpack_require__(1);

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = __webpack_require__(3);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = __webpack_require__(4);

var _goodListener2 = _interopRequireDefault(_goodListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */
var Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    _createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(_tinyEmitter2.default);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

module.exports = Clipboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */
var ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

module.exports = ClipboardAction;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ })
/******/ ]);
});

/***/ }),
/* 80 */
/***/ (function(module, exports) {

function parsePart(str) {
  // just a number
  if(/^-?\d+$/.test(str)) {
    return parseInt(str, 10);
  }
  var m;
  // 1-5 or 1..5 (equivilant) or 1...5 (doesn't include 5)
  if((m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
    var lhs = m[1];
    var sep = m[2];
    var rhs = m[3];
    if(lhs && rhs) {
      lhs = parseInt(lhs);
      rhs = parseInt(rhs);
      var res = [];
      var incr = lhs < rhs ? 1 : -1;

      // Make it inclusive by moving the right 'stop-point' away by one.
      if(sep == '-' || sep == '..' || sep == '\u2025') {
        rhs += incr;
      }

      for(var i=lhs; i != rhs; i += incr) res.push(i);
      return res;
    }
  }
  return [];
}

module.exports.parse = function(str) {
  var parts = str.split(',');

  var toFlatten = parts.map(function(el) {
    return parsePart(el);
  });

  // reduce can't handle single element arrays
  if(toFlatten.length === 0) return [];
  if(toFlatten.length === 1) {
    if(Array.isArray(toFlatten[0]))
      return toFlatten[0];
    return toFlatten;
  }

  return toFlatten.reduce(function(lhs, rhs) {
    if(!Array.isArray(lhs)) lhs = [lhs];
    if(!Array.isArray(rhs)) rhs = [rhs];
    return lhs.concat(rhs);
  });
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};
module.exports = theme;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mdxCodeBlock": "mdxCodeBlock_iHAB"
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */module.exports=`
<!DOCTYPE html>
<html <%- htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="generator" content="Docusaurus">
    <%- headTags %>
    <%- chunkManifestScript %>
    <% metaAttributes.forEach((metaAttribute) => { %>
      <%- metaAttribute %>
    <% }); %>
    <% stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" type="text/css" href="<%= baseUrl %><%= stylesheet %>" />
    <% }); %>
  </head>
  <body <%- bodyAttributes %>>
    <%- preBodyTags %>
    <div id="__docusaurus">
      <%- appHtml %>
    </div>
    <% scripts.forEach((script) => { %>
      <script type="text/javascript" src="<%= baseUrl %><%= script %>"></script>
    <% }); %>
    <%- postBodyTags %>
  </body>
</html>
`;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(37),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(86);
} else {}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(37),m=__webpack_require__(1),aa=__webpack_require__(44);function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var u="function"===typeof Symbol&&Symbol.for,ba=u?Symbol.for("react.portal"):60106,v=u?Symbol.for("react.fragment"):60107,ca=u?Symbol.for("react.strict_mode"):60108,da=u?Symbol.for("react.profiler"):60114,x=u?Symbol.for("react.provider"):60109,ea=u?Symbol.for("react.context"):60110,fa=u?Symbol.for("react.concurrent_mode"):60111,ha=u?Symbol.for("react.forward_ref"):60112,B=u?Symbol.for("react.suspense"):60113,ia=u?Symbol.for("react.suspense_list"):60120,ja=u?Symbol.for("react.memo"):60115,ka=u?Symbol.for("react.lazy"):
60116,la=u?Symbol.for("react.fundamental"):60117,ma=u?Symbol.for("react.scope"):60119,C=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;C.hasOwnProperty("ReactCurrentDispatcher")||(C.ReactCurrentDispatcher={current:null});C.hasOwnProperty("ReactCurrentBatchConfig")||(C.ReactCurrentBatchConfig={suspense:null});
function na(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c)},function(c){0===a._status&&(a._status=2,a._result=c)})}}
function D(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case v:return"Fragment";case ba:return"Portal";case da:return"Profiler";case ca:return"StrictMode";case B:return"Suspense";case ia:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ea:return"Context.Consumer";case x:return"Context.Provider";case ha:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ja:return D(a.type);case ka:if(a=1===a._status?a._result:null)return D(a)}return null}var oa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}function pa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=oa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var qa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra=Object.prototype.hasOwnProperty,sa={},ta={};
function ua(a){if(ra.call(ta,a))return!0;if(ra.call(sa,a))return!1;if(qa.test(a))return ta[a]=!0;sa[a]=!0;return!1}function va(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wa(a,b,c,d){if(null===b||"undefined"===typeof b||va(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function J(a,b,c,d,f,h){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1)});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0)});var xa=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=xa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function ya(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||wa(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+"="+('"'+N(b)+'"')}return ua(a)?a+"="+('"'+N(b)+'"'):""}function za(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Aa="function"===typeof Object.is?Object.is:za,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(r(321));return O}function Ba(){if(0<V)throw Error(r(312));return{memoizedState:null,queue:null,next:null}}function Ca(){null===Q?null===P?(R=!1,P=Q=Ba()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ba()):(R=!0,Q=Q.next);return Q}function Da(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Ea(a,b){return"function"===typeof b?b(a):b}
function Fa(a,b,c){O=W();Q=Ca();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return[d,b]}return[Q.memoizedState,b]}a=a===Ea?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ga.bind(null,O,a);return[Q.memoizedState,a]}
function Ga(a,b,c){if(!(25>V))throw Error(r(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ha(){}
var X=0,Ia={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ca();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Fa,useRef:function(a){O=W();Q=Ca();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Fa(Ea,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ha,useEffect:Ha,useDebugValue:Ha,useResponder:function(a,b){return{props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return[function(a){a()},!1]}},Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ka(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var La={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ma=k({menuitem:!0},La),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Na=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Oa=/([A-Z])/g,Pa=/^ms-/,Z=m.Children.toArray,Qa=C.ReactCurrentDispatcher,Ra={listing:!0,pre:!0,textarea:!0},Sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ta={},Ua={};function Va(a){if(void 0===a||null===a)return a;var b="";m.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Wa=Object.prototype.hasOwnProperty,Xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ya(a,b){if(void 0===a)throw Error(r(152,D(b)||"Component"));}
function Za(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=pa(h,b,c,e),p=[],g=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===p)return null},enqueueReplaceState:function(a,c){g=!0;p=[c]},enqueueSetState:function(a,c){if(null===p)return null;p.push(c)}};if(e){if(e=new h(d.props,f,l),"function"===typeof h.getDerivedStateFromProps){var w=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=w&&(e.state=k({},e.state,w))}}else if(O={},e=h(d.props,
f,l),e=Da(h,d.props,e,f),null==e||null==e.render){a=e;Ya(a,h);return}e.props=d.props;e.context=f;e.updater=l;l=e.state;void 0===l&&(e.state=l=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),p.length){l=p;var t=
g;p=null;g=!1;if(t&&1===l.length)e.state=l[0];else{w=t?l[0]:e.state;var y=!0;for(t=t?1:0;t<l.length;t++){var q=l[t];q="function"===typeof q?q.call(e,w,d.props,f):q;null!=q&&(y?(y=!1,w=k({},w,q)):k(w,q))}e.state=w}}else p=null;a=e.render();Ya(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(r(108,D(h)||"Unknown",T));}A&&(b=k({},b,A))}for(;m.isValidElement(a);){var f=a,h=f.type;if("function"!==
typeof h)break;d(f,h)}return{child:a,context:b}}
var $a=function(){function a(a,b){m.isValidElement(a)?a.type!==v?a=[a]:(a=a.props.children,a=m.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ja.html,children:a,childIndex:0,context:oa,footer:""};var c=F[0];if(0===c){var d=F;c=d.length;var p=2*c;if(!(65536>=p))throw Error(r(304));var g=new Uint16Array(p);g.set(d);F=g;F[0]=c+1;for(d=c;d<p-1;d++)F[d]=d+1;F[p-1]=0}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;E(c,h);var p=c[h];this.contextStack[b]=c;this.contextValueStack[b]=p;c[h]=a.props.value};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Qa.current;Qa.current=Ia;try{for(var h=[""],p=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;F[g]=F[0];F[0]=g;break}var e=this.stack[this.stack.length-1];if(p||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===x)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=h.pop();if(p){p=!1;var n=e.fallbackFrame;if(!n)throw Error(r(303));this.stack.push(n);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=G}h[this.suspenseDepth]+=I}else{var l=e.children[e.childIndex++],
w="";try{w+=this.render(l,e.context,e.domNamespace)}catch(t){if(null!=t&&"function"===typeof t.then)throw Error(r(294));throw t;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=w}}return h[0]}finally{Qa.current=c,X=b}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Za(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return"";if(!m.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===ba)throw Error(r(257));throw Error(r(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ca:case fa:case da:case ia:case v:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(r(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ha:O={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ja:return a=[m.createElement(c.type,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case x:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ea:c=a.type;d=a.props;var g=this.threadID;E(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case la:throw Error(r(338));case ka:switch(c=a.type,na(c),c._status){case 1:return a=[m.createElement(c._result,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(r(295));
}case ma:throw Error(r(343));}throw Error(r(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ja.html&&Ka(c);if(!Ta.hasOwnProperty(c)){if(!Sa.test(c))throw Error(r(65,c));Ta[c]=!0}var d=a.props;if("input"===c)d=k({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
g)throw Error(r(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(r(93));e=e[0]}g=""+e}null==g&&(g="")}d=k({},d,{value:void 0,children:""+g})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=k({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Va(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;g=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){g=!0;break}}else g=""+e===G;d=k({selected:void 0,children:void 0},
d,{selected:g,children:I})}}if(g=d){if(Ma[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(r(137,c,""));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(r(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(r(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(r(62,""));}g=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in g)if(Wa.call(g,z)){var l=g[z];if(null!=l){if("style"===
z){n=void 0;var w="",t="";for(n in l)if(l.hasOwnProperty(n)){var y=0===n.indexOf("--"),q=l[n];if(null!=q){if(y)var A=n;else if(A=n,Ua.hasOwnProperty(A))A=Ua[A];else{var T=A.replace(Oa,"-$1").toLowerCase().replace(Pa,"-ms-");A=Ua[A]=T}w+=t+A+":";t=n;y=null==q||"boolean"===typeof q||""===q?"":y||"number"!==typeof q||0===q||Y.hasOwnProperty(t)&&Y[t]?(""+q).trim():q+"px";w+=y;t=";"}}l=w||null}n=null;b:if(y=c,q=g,-1===y.indexOf("-"))y="string"===typeof q.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0}y?Xa.hasOwnProperty(z)||(n=z,n=ua(n)&&null!=l?n+"="+('"'+N(l)+'"'):""):n=ya(z,l);n&&(G+=" "+n)}}e||I&&(G+=' data-reactroot=""');var z=G;g="";La.hasOwnProperty(c)?z+="/>":(z+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null}null!=e?(d=[],Ra[c]&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?Ka(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return z};return a}();function ab(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}
var bb=function(a){function b(b,c){var d=a.call(this,{})||this;d.partialRenderer=new $a(b,c);return d}ab(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a)};c._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(f){this.destroy(f)}};return b}(aa.Readable),cb={renderToString:function(a){a=new $a(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new $a(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(a){return new bb(a,
!1)},renderToStaticNodeStream:function(a){return new bb(a,!0)},version:"16.12.0"},db={default:cb},eb=db&&cb||db;module.exports=eb.default||eb;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(88);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(1);
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(90));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.defaultOptions = void 0;

var _fs = _interopRequireDefault(__webpack_require__(26));

var _path = _interopRequireDefault(__webpack_require__(3));

var _url = _interopRequireDefault(__webpack_require__(93));

var _utils = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PLUGIN_NAME = 'ReactLoadableSSRAddon';
var defaultOptions = {
  filename: 'assets-manifest.json',
  integrity: false,
  integrityAlgorithms: ['sha256', 'sha384', 'sha512'],
  integrityPropertyName: 'integrity'
};
exports.defaultOptions = defaultOptions;

var ReactLoadableSSRAddon = function () {
  function ReactLoadableSSRAddon(options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.compiler = null;
    this.stats = null;
    this.entrypoints = new Set();
    this.assetsByName = new Map();
    this.manifest = {};
  }

  var _proto = ReactLoadableSSRAddon.prototype;

  _proto.getAssets = function getAssets(assetsChunk) {
    for (var i = 0; i < assetsChunk.length; i += 1) {
      var chunk = assetsChunk[i];
      var id = chunk.id,
          files = chunk.files,
          _chunk$siblings = chunk.siblings,
          siblings = _chunk$siblings === void 0 ? [] : _chunk$siblings,
          hash = chunk.hash;
      var keys = this.getChunkOrigin(chunk);

      for (var j = 0; j < keys.length; j += 1) {
        this.assetsByName.set(keys[j], {
          id: id,
          files: files,
          hash: hash,
          siblings: siblings
        });
      }
    }

    return this.assetsByName;
  };

  _proto.getEntrypoints = function getEntrypoints(entrypoints) {
    var entry = Object.keys(entrypoints);

    for (var i = 0; i < entry.length; i += 1) {
      this.entrypoints.add(entry[i]);
    }

    return this.entrypoints;
  };

  _proto.getChunkOrigin = function getChunkOrigin(_ref) {
    var id = _ref.id,
        names = _ref.names,
        modules = _ref.modules;
    var origins = new Set();

    for (var i = 0; i < modules.length; i += 1) {
      var reasons = modules[i].reasons;

      for (var j = 0; j < reasons.length; j += 1) {
        var reason = reasons[j];
        var type = reason.dependency ? reason.dependency.type : null;
        var userRequest = reason.dependency ? reason.dependency.userRequest : null;

        if (type === 'import()') {
          origins.add(userRequest);
        }
      }
    }

    if (origins.size === 0) {
      return [names[0] || id];
    }

    if (this.entrypoints.has(names[0])) {
      origins.add(names[0]);
    }

    return Array.from(origins);
  };

  _proto.apply = function apply(compiler) {
    this.compiler = compiler;

    if (compiler.hooks) {
      compiler.hooks.emit.tapAsync(PLUGIN_NAME, this.handleEmit.bind(this));
    } else {
      compiler.plugin('emit', this.handleEmit.bind(this));
    }
  };

  _proto.getMinimalStatsChunks = function getMinimalStatsChunks(compilationChunks) {
    var compareId = function compareId(a, b) {
      if (typeof a !== typeof b) {
        return typeof a < typeof b ? -1 : 1;
      }

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };

    return compilationChunks.map(function (chunk) {
      var siblings = new Set();

      if (chunk.groupsIterable) {
        var chunkGroups = Array.from(chunk.groupsIterable);

        for (var i = 0; i < chunkGroups.length; i += 1) {
          var group = Array.from(chunkGroups[i].chunks);

          for (var j = 0; j < group.length; j += 1) {
            var sibling = group[j];
            if (sibling !== chunk) siblings.add(sibling.id);
          }
        }
      }

      return {
        id: chunk.id,
        names: chunk.name ? [chunk.name] : [],
        files: chunk.files.slice(),
        hash: chunk.renderedHash,
        siblings: Array.from(siblings).sort(compareId),
        modules: chunk.getModules()
      };
    });
  };

  _proto.handleEmit = function handleEmit(compilation, callback) {
    this.stats = compilation.getStats().toJson({
      all: false,
      entrypoints: true
    }, true);
    this.options.publicPath = (compilation.outputOptions ? compilation.outputOptions.publicPath : compilation.options.output.publicPath) || '';
    this.getEntrypoints(this.stats.entrypoints);
    this.getAssets(this.getMinimalStatsChunks(compilation.chunks));
    this.processAssets(compilation.assets);
    this.writeAssetsFile();
    callback();
  };

  _proto.processAssets = function processAssets(originAssets) {
    var _this = this;

    var assets = {};
    var origins = {};
    var entrypoints = this.entrypoints;
    this.assetsByName.forEach(function (value, key) {
      var files = value.files,
          id = value.id,
          siblings = value.siblings,
          hash = value.hash;

      if (!origins[key]) {
        origins[key] = [];
      }

      siblings.push(id);

      for (var i = 0; i < siblings.length; i += 1) {
        var sibling = siblings[i];

        if (!origins[key].includes(sibling)) {
          origins[key].push(sibling);
        }
      }

      for (var _i = 0; _i < files.length; _i += 1) {
        var file = files[_i];
        var currentAsset = originAssets[file] || {};
        var ext = (0, _utils.getFileExtension)(file).replace(/^\.+/, '').toLowerCase();

        if (!assets[id]) {
          assets[id] = {};
        }

        if (!assets[id][ext]) {
          assets[id][ext] = [];
        }

        if (!(0, _utils.hasEntry)(assets[id][ext], 'file', file)) {
          var shouldComputeIntegrity = Object.keys(currentAsset) && _this.options.integrity && !currentAsset[_this.options.integrityPropertyName];

          if (shouldComputeIntegrity) {
            currentAsset[_this.options.integrityPropertyName] = (0, _utils.computeIntegrity)(_this.options.integrityAlgorithms, currentAsset.source());
          }

          assets[id][ext].push({
            file: file,
            hash: hash,
            publicPath: _url["default"].resolve(_this.options.publicPath || '', file),
            integrity: currentAsset[_this.options.integrityPropertyName]
          });
        }
      }
    });
    this.manifest = {
      entrypoints: Array.from(entrypoints),
      origins: origins,
      assets: assets
    };
  };

  _proto.writeAssetsFile = function writeAssetsFile() {
    var filePath = this.manifestOutputPath;

    var fileDir = _path["default"].dirname(filePath);

    var json = JSON.stringify(this.manifest, null, 2);

    try {
      if (!_fs["default"].existsSync(fileDir)) {
        _fs["default"].mkdirSync(fileDir);
      }
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }

    _fs["default"].writeFileSync(filePath, json);
  };

  _createClass(ReactLoadableSSRAddon, [{
    key: "isRequestFromDevServer",
    get: function get() {
      if (process.argv.some(function (arg) {
        return arg.includes('webpack-dev-server');
      })) {
        return true;
      }

      var _this$compiler = this.compiler,
          outputFileSystem = _this$compiler.outputFileSystem,
          name = _this$compiler.outputFileSystem.constructor.name;
      return outputFileSystem && name === 'MemoryFileSystem';
    }
  }, {
    key: "manifestOutputPath",
    get: function get() {
      var filename = this.options.filename;

      if (_path["default"].isAbsolute(filename)) {
        return filename;
      }

      var _this$compiler2 = this.compiler,
          outputPath = _this$compiler2.outputPath,
          devServer = _this$compiler2.options.devServer;

      if (this.isRequestFromDevServer && devServer) {
        var devOutputPath = devServer.outputPath || outputPath || '/';

        if (devOutputPath === '/') {
          console.warn('Please use an absolute path in options.output when using webpack-dev-server.');
          devOutputPath = this.compiler.context || process.cwd();
        }

        return _path["default"].resolve(devOutputPath, filename);
      }

      return _path["default"].resolve(outputPath, filename);
    }
  }]);

  return ReactLoadableSSRAddon;
}();

var _default = ReactLoadableSSRAddon;
exports["default"] = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__webpack_require__(95));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function computeIntegrity(algorithms, source) {
  return Array.isArray(algorithms) ? algorithms.map(function (algorithm) {
    var hash = _crypto["default"].createHash(algorithm).update(source, 'utf8').digest('base64');

    return algorithm + "-" + hash;
  }).join(' ') : '';
}

var _default = computeIntegrity;
exports["default"] = _default;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function getFileExtension(filename) {
  if (!filename || typeof filename !== 'string') {
    return '';
  }

  var fileExtRegex = /\.\w{2,4}\.(?:map|gz)$|\.\w+$/i;
  var name = filename.split(/[?#]/)[0];
  var ext = name.match(fileExtRegex);
  return ext && ext.length ? ext[0] : '';
}

var _default = getFileExtension;
exports["default"] = _default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = unique;

function unique(array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = hasEntry;

function hasEntry(target, targetKey, searchFor) {
  if (!target) {
    return false;
  }

  for (var i = 0; i < target.length; i += 1) {
    var file = target[i][targetKey];

    if (file === searchFor) {
      return true;
    }
  }

  return false;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _utils = __webpack_require__(45);

function getBundles(manifest, chunks) {
  if (!manifest || !chunks) {
    return {};
  }

  var assetsKey = chunks.reduce(function (key, chunk) {
    if (manifest.origins[chunk]) {
      key = (0, _utils.unique)([].concat(key, manifest.origins[chunk]));
    }

    return key;
  }, []);
  return assetsKey.reduce(function (bundle, asset) {
    Object.keys(manifest.assets[asset]).forEach(function (key) {
      var content = manifest.assets[asset][key];

      if (!bundle[key]) {
        bundle[key] = [];
      }

      bundle[key] = (0, _utils.unique)([].concat(bundle[key], content));
    });
    return bundle;
  }, {});
}

var _default = getBundles;
exports["default"] = _default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(101)

var origCwd = process.cwd
var cwd = null

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
try {
  process.cwd()
} catch (er) {}

var chdir = process.chdir
process.chdir = function(d) {
  cwd = null
  chdir.call(process, d)
}

module.exports = patch

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs)
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs)
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown)
  fs.fchown = chownFix(fs.fchown)
  fs.lchown = chownFix(fs.lchown)

  fs.chmod = chmodFix(fs.chmod)
  fs.fchmod = chmodFix(fs.fchmod)
  fs.lchmod = chmodFix(fs.lchmod)

  fs.chownSync = chownFixSync(fs.chownSync)
  fs.fchownSync = chownFixSync(fs.fchownSync)
  fs.lchownSync = chownFixSync(fs.lchownSync)

  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  fs.stat = statFix(fs.stat)
  fs.fstat = statFix(fs.fstat)
  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchmodSync = function () {}
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchownSync = function () {}
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now()
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er)
            })
          }, backoff)
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er)
      })
    }})(fs.rename)
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) {
    function read (fd, buffer, offset, length, position, callback_) {
      var callback
      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0
        callback = function (er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter ++
            return fs$read.call(fs, fd, buffer, offset, length, position, callback)
          }
          callback_.apply(this, arguments)
        }
      }
      return fs$read.call(fs, fd, buffer, offset, length, position, callback)
    }

    // This ensures `util.promisify` works as it does for native `fs.read`.
    read.__proto__ = fs$read
    return read
  })(fs.read)

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          continue
        }
        throw er
      }
    }
  }})(fs.readSync)

  function patchLchmod (fs) {
    fs.lchmod = function (path, mode, callback) {
      fs.open( path
             , constants.O_WRONLY | constants.O_SYMLINK
             , mode
             , function (err, fd) {
        if (err) {
          if (callback) callback(err)
          return
        }
        // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.
        fs.fchmod(fd, mode, function (err) {
          fs.close(fd, function(err2) {
            if (callback) callback(err || err2)
          })
        })
      })
    }

    fs.lchmodSync = function (path, mode) {
      var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      var threw = true
      var ret
      try {
        ret = fs.fchmodSync(fd, mode)
        threw = false
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd)
          } catch (er) {}
        } else {
          fs.closeSync(fd)
        }
      }
      return ret
    }
  }

  function patchLutimes (fs) {
    if (constants.hasOwnProperty("O_SYMLINK")) {
      fs.lutimes = function (path, at, mt, cb) {
        fs.open(path, constants.O_SYMLINK, function (er, fd) {
          if (er) {
            if (cb) cb(er)
            return
          }
          fs.futimes(fd, at, mt, function (er) {
            fs.close(fd, function (er2) {
              if (cb) cb(er || er2)
            })
          })
        })
      }

      fs.lutimesSync = function (path, at, mt) {
        var fd = fs.openSync(path, constants.O_SYMLINK)
        var ret
        var threw = true
        try {
          ret = fs.futimesSync(fd, at, mt)
          threw = false
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd)
            } catch (er) {}
          } else {
            fs.closeSync(fd)
          }
        }
        return ret
      }

    } else {
      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
      fs.lutimesSync = function () {}
    }
  }

  function chmodFix (orig) {
    if (!orig) return orig
    return function (target, mode, cb) {
      return orig.call(fs, target, mode, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chmodFixSync (orig) {
    if (!orig) return orig
    return function (target, mode) {
      try {
        return orig.call(fs, target, mode)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }


  function chownFix (orig) {
    if (!orig) return orig
    return function (target, uid, gid, cb) {
      return orig.call(fs, target, uid, gid, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chownFixSync (orig) {
    if (!orig) return orig
    return function (target, uid, gid) {
      try {
        return orig.call(fs, target, uid, gid)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }

  function statFix (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options, cb) {
      if (typeof options === 'function') {
        cb = options
        options = null
      }
      function callback (er, stats) {
        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000
          if (stats.gid < 0) stats.gid += 0x100000000
        }
        if (cb) cb.apply(this, arguments)
      }
      return options ? orig.call(fs, target, options, callback)
        : orig.call(fs, target, callback)
    }
  }

  function statFixSync (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options) {
      var stats = options ? orig.call(fs, target, options)
        : orig.call(fs, target)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      return stats;
    }
  }

  // ENOSYS means that the fs doesn't support the op. Just ignore
  // that, because it doesn't matter.
  //
  // if there's no getuid, or if getuid() is something other
  // than 0, and the error is EINVAL or EPERM, then just ignore
  // it.
  //
  // This specific case is a silent failure in cp, install, tar,
  // and most other unix tools that manage permissions.
  //
  // When running as root, or if other types of errors are
  // encountered, then it's strict.
  function chownErOk (er) {
    if (!er)
      return true

    if (er.code === "ENOSYS")
      return true

    var nonroot = !process.getuid || process.getuid() !== 0
    if (nonroot) {
      if (er.code === "EINVAL" || er.code === "EPERM")
        return true
    }

    return false
  }
}


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(44).Stream

module.exports = legacy

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    })
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = clone

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: obj.__proto__ }
  else
    var copy = Object.create(null)

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
  })

  return copy
}


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const mkdirpSync = __webpack_require__(12).mkdirsSync
const utimesSync = __webpack_require__(50).utimesMillisSync
const stat = __webpack_require__(27)

function copySync (src, dest, opts) {
  if (typeof opts === 'function') {
    opts = { filter: opts }
  }

  opts = opts || {}
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  const { srcStat, destStat } = stat.checkPathsSync(src, dest, 'copy')
  stat.checkParentPathsSync(src, srcStat, dest, 'copy')
  return handleFilterAndCopy(destStat, src, dest, opts)
}

function handleFilterAndCopy (destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  const destParent = path.dirname(dest)
  if (!fs.existsSync(destParent)) mkdirpSync(destParent)
  return startCopy(destStat, src, dest, opts)
}

function startCopy (destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  return getStats(destStat, src, dest, opts)
}

function getStats (destStat, src, dest, opts) {
  const statSync = opts.dereference ? fs.statSync : fs.lstatSync
  const srcStat = statSync(src)

  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts)
  else if (srcStat.isFile() ||
           srcStat.isCharacterDevice() ||
           srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts)
  else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts)
}

function onFile (srcStat, destStat, src, dest, opts) {
  if (!destStat) return copyFile(srcStat, src, dest, opts)
  return mayCopyFile(srcStat, src, dest, opts)
}

function mayCopyFile (srcStat, src, dest, opts) {
  if (opts.overwrite) {
    fs.unlinkSync(dest)
    return copyFile(srcStat, src, dest, opts)
  } else if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

function copyFile (srcStat, src, dest, opts) {
  if (typeof fs.copyFileSync === 'function') {
    fs.copyFileSync(src, dest)
    fs.chmodSync(dest, srcStat.mode)
    if (opts.preserveTimestamps) {
      return utimesSync(dest, srcStat.atime, srcStat.mtime)
    }
    return
  }
  return copyFileFallback(srcStat, src, dest, opts)
}

function copyFileFallback (srcStat, src, dest, opts) {
  const BUF_LENGTH = 64 * 1024
  const _buff = __webpack_require__(109)(BUF_LENGTH)

  const fdr = fs.openSync(src, 'r')
  const fdw = fs.openSync(dest, 'w', srcStat.mode)
  let pos = 0

  while (pos < srcStat.size) {
    const bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw, _buff, 0, bytesRead)
    pos += bytesRead
  }

  if (opts.preserveTimestamps) fs.futimesSync(fdw, srcStat.atime, srcStat.mtime)

  fs.closeSync(fdr)
  fs.closeSync(fdw)
}

function onDir (srcStat, destStat, src, dest, opts) {
  if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts)
  if (destStat && !destStat.isDirectory()) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
  }
  return copyDir(src, dest, opts)
}

function mkDirAndCopy (srcStat, src, dest, opts) {
  fs.mkdirSync(dest)
  copyDir(src, dest, opts)
  return fs.chmodSync(dest, srcStat.mode)
}

function copyDir (src, dest, opts) {
  fs.readdirSync(src).forEach(item => copyDirItem(item, src, dest, opts))
}

function copyDirItem (item, src, dest, opts) {
  const srcItem = path.join(src, item)
  const destItem = path.join(dest, item)
  const { destStat } = stat.checkPathsSync(srcItem, destItem, 'copy')
  return startCopy(destStat, srcItem, destItem, opts)
}

function onLink (destStat, src, dest, opts) {
  let resolvedSrc = fs.readlinkSync(src)
  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
  }

  if (!destStat) {
    return fs.symlinkSync(resolvedSrc, dest)
  } else {
    let resolvedDest
    try {
      resolvedDest = fs.readlinkSync(dest)
    } catch (err) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlinkSync(resolvedSrc, dest)
      throw err
    }
    if (opts.dereference) {
      resolvedDest = path.resolve(process.cwd(), resolvedDest)
    }
    if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`)
    }

    // prevent copy if src is a subdir of dest since unlinking
    // dest in this case would result in removing src contents
    // and therefore a broken symlink would be created.
    if (fs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
    }
    return copyLink(resolvedSrc, dest)
  }
}

function copyLink (resolvedSrc, dest) {
  fs.unlinkSync(dest)
  return fs.symlinkSync(resolvedSrc, dest)
}

module.exports = copySync


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const invalidWin32Path = __webpack_require__(49).invalidWin32Path

const o777 = parseInt('0777', 8)

function mkdirs (p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    return callback(errInval)
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  callback = callback || function () {}
  p = path.resolve(p)

  xfs.mkdir(p, mode, er => {
    if (!er) {
      made = made || p
      return callback(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) return callback(er)
        mkdirs(path.dirname(p), opts, (er, made) => {
          if (er) callback(er, made)
          else mkdirs(p, opts, callback, made)
        })
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, (er2, stat) => {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) callback(er, made)
          else callback(null, made)
        })
        break
    }
  })
}

module.exports = mkdirs


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const invalidWin32Path = __webpack_require__(49).invalidWin32Path

const o777 = parseInt('0777', 8)

function mkdirsSync (p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
    errInval.code = 'EINVAL'
    throw errInval
  }

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  p = path.resolve(p)

  try {
    xfs.mkdirSync(p, mode)
    made = made || p
  } catch (err0) {
    if (err0.code === 'ENOENT') {
      if (path.dirname(p) === p) throw err0
      made = mkdirsSync(path.dirname(p), opts, made)
      mkdirsSync(p, opts, made)
    } else {
      // In the case of any other error, just see if there's a dir there
      // already. If so, then hooray!  If not, then something is borked.
      let stat
      try {
        stat = xfs.statSync(p)
      } catch (err1) {
        throw err0
      }
      if (!stat.isDirectory()) throw err0
    }
  }

  return made
}

module.exports = mkdirsSync


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable node/no-deprecated-api */
module.exports = function (size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    try {
      return Buffer.allocUnsafe(size)
    } catch (e) {
      return new Buffer(size)
    }
  }
  return new Buffer(size)
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const mkdirp = __webpack_require__(12).mkdirs
const pathExists = __webpack_require__(15).pathExists
const utimes = __webpack_require__(50).utimesMillis
const stat = __webpack_require__(27)

function copy (src, dest, opts, cb) {
  if (typeof opts === 'function' && !cb) {
    cb = opts
    opts = {}
  } else if (typeof opts === 'function') {
    opts = { filter: opts }
  }

  cb = cb || function () {}
  opts = opts || {}

  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  stat.checkPaths(src, dest, 'copy', (err, stats) => {
    if (err) return cb(err)
    const { srcStat, destStat } = stats
    stat.checkParentPaths(src, srcStat, dest, 'copy', err => {
      if (err) return cb(err)
      if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb)
      return checkParentDir(destStat, src, dest, opts, cb)
    })
  })
}

function checkParentDir (destStat, src, dest, opts, cb) {
  const destParent = path.dirname(dest)
  pathExists(destParent, (err, dirExists) => {
    if (err) return cb(err)
    if (dirExists) return startCopy(destStat, src, dest, opts, cb)
    mkdirp(destParent, err => {
      if (err) return cb(err)
      return startCopy(destStat, src, dest, opts, cb)
    })
  })
}

function handleFilter (onInclude, destStat, src, dest, opts, cb) {
  Promise.resolve(opts.filter(src, dest)).then(include => {
    if (include) return onInclude(destStat, src, dest, opts, cb)
    return cb()
  }, error => cb(error))
}

function startCopy (destStat, src, dest, opts, cb) {
  if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb)
  return getStats(destStat, src, dest, opts, cb)
}

function getStats (destStat, src, dest, opts, cb) {
  const stat = opts.dereference ? fs.stat : fs.lstat
  stat(src, (err, srcStat) => {
    if (err) return cb(err)

    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb)
    else if (srcStat.isFile() ||
             srcStat.isCharacterDevice() ||
             srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb)
    else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb)
  })
}

function onFile (srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return copyFile(srcStat, src, dest, opts, cb)
  return mayCopyFile(srcStat, src, dest, opts, cb)
}

function mayCopyFile (srcStat, src, dest, opts, cb) {
  if (opts.overwrite) {
    fs.unlink(dest, err => {
      if (err) return cb(err)
      return copyFile(srcStat, src, dest, opts, cb)
    })
  } else if (opts.errorOnExist) {
    return cb(new Error(`'${dest}' already exists`))
  } else return cb()
}

function copyFile (srcStat, src, dest, opts, cb) {
  if (typeof fs.copyFile === 'function') {
    return fs.copyFile(src, dest, err => {
      if (err) return cb(err)
      return setDestModeAndTimestamps(srcStat, dest, opts, cb)
    })
  }
  return copyFileFallback(srcStat, src, dest, opts, cb)
}

function copyFileFallback (srcStat, src, dest, opts, cb) {
  const rs = fs.createReadStream(src)
  rs.on('error', err => cb(err)).once('open', () => {
    const ws = fs.createWriteStream(dest, { mode: srcStat.mode })
    ws.on('error', err => cb(err))
      .on('open', () => rs.pipe(ws))
      .once('close', () => setDestModeAndTimestamps(srcStat, dest, opts, cb))
  })
}

function setDestModeAndTimestamps (srcStat, dest, opts, cb) {
  fs.chmod(dest, srcStat.mode, err => {
    if (err) return cb(err)
    if (opts.preserveTimestamps) {
      return utimes(dest, srcStat.atime, srcStat.mtime, cb)
    }
    return cb()
  })
}

function onDir (srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts, cb)
  if (destStat && !destStat.isDirectory()) {
    return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`))
  }
  return copyDir(src, dest, opts, cb)
}

function mkDirAndCopy (srcStat, src, dest, opts, cb) {
  fs.mkdir(dest, err => {
    if (err) return cb(err)
    copyDir(src, dest, opts, err => {
      if (err) return cb(err)
      return fs.chmod(dest, srcStat.mode, cb)
    })
  })
}

function copyDir (src, dest, opts, cb) {
  fs.readdir(src, (err, items) => {
    if (err) return cb(err)
    return copyDirItems(items, src, dest, opts, cb)
  })
}

function copyDirItems (items, src, dest, opts, cb) {
  const item = items.pop()
  if (!item) return cb()
  return copyDirItem(items, item, src, dest, opts, cb)
}

function copyDirItem (items, item, src, dest, opts, cb) {
  const srcItem = path.join(src, item)
  const destItem = path.join(dest, item)
  stat.checkPaths(srcItem, destItem, 'copy', (err, stats) => {
    if (err) return cb(err)
    const { destStat } = stats
    startCopy(destStat, srcItem, destItem, opts, err => {
      if (err) return cb(err)
      return copyDirItems(items, src, dest, opts, cb)
    })
  })
}

function onLink (destStat, src, dest, opts, cb) {
  fs.readlink(src, (err, resolvedSrc) => {
    if (err) return cb(err)
    if (opts.dereference) {
      resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
    }

    if (!destStat) {
      return fs.symlink(resolvedSrc, dest, cb)
    } else {
      fs.readlink(dest, (err, resolvedDest) => {
        if (err) {
          // dest exists and is a regular file or directory,
          // Windows may throw UNKNOWN error. If dest already exists,
          // fs throws error anyway, so no need to guard against it here.
          if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest, cb)
          return cb(err)
        }
        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest)
        }
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`))
        }

        // do not copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.
        if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`))
        }
        return copyLink(resolvedSrc, dest, cb)
      })
    }
  })
}

function copyLink (resolvedSrc, dest, cb) {
  fs.unlink(dest, err => {
    if (err) return cb(err)
    return fs.symlink(resolvedSrc, dest, cb)
  })
}

module.exports = copy


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const mkdir = __webpack_require__(12)
const remove = __webpack_require__(28)

const emptyDir = u(function emptyDir (dir, callback) {
  callback = callback || function () {}
  fs.readdir(dir, (err, items) => {
    if (err) return mkdir.mkdirs(dir, callback)

    items = items.map(item => path.join(dir, item))

    deleteItem()

    function deleteItem () {
      const item = items.pop()
      if (!item) return callback()
      remove.remove(item, err => {
        if (err) return callback(err)
        deleteItem()
      })
    }
  })
})

function emptyDirSync (dir) {
  let items
  try {
    items = fs.readdirSync(dir)
  } catch (err) {
    return mkdir.mkdirsSync(dir)
  }

  items.forEach(item => {
    item = path.join(dir, item)
    remove.removeSync(item)
  })
}

module.exports = {
  emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir,
  emptydir: emptyDir
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const assert = __webpack_require__(47)

const isWindows = (process.platform === 'win32')

function defaults (options) {
  const methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(m => {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })

  options.maxBusyTries = options.maxBusyTries || 3
}

function rimraf (p, options, cb) {
  let busyTries = 0

  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  assert(p, 'rimraf: missing path')
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string')
  assert.strictEqual(typeof cb, 'function', 'rimraf: callback function required')
  assert(options, 'rimraf: invalid options argument provided')
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object')

  defaults(options)

  rimraf_(p, options, function CB (er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
          busyTries < options.maxBusyTries) {
        busyTries++
        const time = busyTries * 100
        // try again, with the same exact callback as this one.
        return setTimeout(() => rimraf_(p, options, CB), time)
      }

      // already gone
      if (er.code === 'ENOENT') er = null
    }

    cb(er)
  })
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, (er, st) => {
    if (er && er.code === 'ENOENT') {
      return cb(null)
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb)
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb)
    }

    options.unlink(p, er => {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null)
        }
        if (er.code === 'EPERM') {
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        }
        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb)
        }
      }
      return cb(er)
    })
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')
  if (er) {
    assert(er instanceof Error)
  }

  options.chmod(p, 0o666, er2 => {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er)
    } else {
      options.stat(p, (er3, stats) => {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er)
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb)
        } else {
          options.unlink(p, cb)
        }
      })
    }
  })
}

function fixWinEPERMSync (p, options, er) {
  let stats

  assert(p)
  assert(options)
  if (er) {
    assert(er instanceof Error)
  }

  try {
    options.chmodSync(p, 0o666)
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  try {
    stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er)
  } else {
    options.unlinkSync(p)
  }
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  if (originalEr) {
    assert(originalEr instanceof Error)
  }
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, er => {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb)
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr)
    } else {
      cb(er)
    }
  })
}

function rmkids (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, (er, files) => {
    if (er) return cb(er)

    let n = files.length
    let errState

    if (n === 0) return options.rmdir(p, cb)

    files.forEach(f => {
      rimraf(path.join(p, f), options, er => {
        if (errState) {
          return
        }
        if (er) return cb(errState = er)
        if (--n === 0) {
          options.rmdir(p, cb)
        }
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  let st

  options = options || {}
  defaults(options)

  assert(p, 'rimraf: missing path')
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string')
  assert(options, 'rimraf: missing options')
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object')

  try {
    st = options.lstatSync(p)
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er)
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null)
    } else {
      options.unlinkSync(p)
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
    } else if (er.code !== 'EISDIR') {
      throw er
    }
    rmdirSync(p, options, er)
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)
  if (originalEr) {
    assert(originalEr instanceof Error)
  }

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options)
    } else if (er.code !== 'ENOENT') {
      throw er
    }
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options))

  if (isWindows) {
    // We only end up here once we got ENOTEMPTY at least once, and
    // at this point, we are guaranteed to have removed all the kids.
    // So, we know that it won't be ENOENT or ENOTDIR or anything else.
    // try really hard to delete stuff on windows, because it has a
    // PROFOUNDLY annoying habit of not closing handles promptly when
    // files are deleted, resulting in spurious ENOTEMPTY errors.
    const startTime = Date.now()
    do {
      try {
        const ret = options.rmdirSync(p, options)
        return ret
      } catch (er) { }
    } while (Date.now() - startTime < 500) // give up after 500ms
  } else {
    const ret = options.rmdirSync(p, options)
    return ret
  }
}

module.exports = rimraf
rimraf.sync = rimrafSync


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const file = __webpack_require__(114)
const link = __webpack_require__(115)
const symlink = __webpack_require__(116)

module.exports = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const path = __webpack_require__(3)
const fs = __webpack_require__(4)
const mkdir = __webpack_require__(12)
const pathExists = __webpack_require__(15).pathExists

function createFile (file, callback) {
  function makeFile () {
    fs.writeFile(file, '', err => {
      if (err) return callback(err)
      callback()
    })
  }

  fs.stat(file, (err, stats) => { // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback()
    const dir = path.dirname(file)
    pathExists(dir, (err, dirExists) => {
      if (err) return callback(err)
      if (dirExists) return makeFile()
      mkdir.mkdirs(dir, err => {
        if (err) return callback(err)
        makeFile()
      })
    })
  })
}

function createFileSync (file) {
  let stats
  try {
    stats = fs.statSync(file)
  } catch (e) {}
  if (stats && stats.isFile()) return

  const dir = path.dirname(file)
  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  fs.writeFileSync(file, '')
}

module.exports = {
  createFile: u(createFile),
  createFileSync
}


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const path = __webpack_require__(3)
const fs = __webpack_require__(4)
const mkdir = __webpack_require__(12)
const pathExists = __webpack_require__(15).pathExists

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    fs.link(srcpath, dstpath, err => {
      if (err) return callback(err)
      callback(null)
    })
  }

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    fs.lstat(srcpath, (err) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink')
        return callback(err)
      }

      const dir = path.dirname(dstpath)
      pathExists(dir, (err, dirExists) => {
        if (err) return callback(err)
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdir.mkdirs(dir, err => {
          if (err) return callback(err)
          makeLink(srcpath, dstpath)
        })
      })
    })
  })
}

function createLinkSync (srcpath, dstpath) {
  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  try {
    fs.lstatSync(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  const dir = path.dirname(dstpath)
  const dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: u(createLink),
  createLinkSync
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const path = __webpack_require__(3)
const fs = __webpack_require__(4)
const _mkdirs = __webpack_require__(12)
const mkdirs = _mkdirs.mkdirs
const mkdirsSync = _mkdirs.mkdirsSync

const _symlinkPaths = __webpack_require__(117)
const symlinkPaths = _symlinkPaths.symlinkPaths
const symlinkPathsSync = _symlinkPaths.symlinkPathsSync

const _symlinkType = __webpack_require__(118)
const symlinkType = _symlinkType.symlinkType
const symlinkTypeSync = _symlinkType.symlinkTypeSync

const pathExists = __webpack_require__(15).pathExists

function createSymlink (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err) return callback(err)
      srcpath = relative.toDst
      symlinkType(relative.toCwd, type, (err, type) => {
        if (err) return callback(err)
        const dir = path.dirname(dstpath)
        pathExists(dir, (err, dirExists) => {
          if (err) return callback(err)
          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback)
          mkdirs(dir, err => {
            if (err) return callback(err)
            fs.symlink(srcpath, dstpath, type, callback)
          })
        })
      })
    })
  })
}

function createSymlinkSync (srcpath, dstpath, type) {
  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  const relative = symlinkPathsSync(srcpath, dstpath)
  srcpath = relative.toDst
  type = symlinkTypeSync(relative.toCwd, type)
  const dir = path.dirname(dstpath)
  const exists = fs.existsSync(dir)
  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
  mkdirsSync(dir)
  return fs.symlinkSync(srcpath, dstpath, type)
}

module.exports = {
  createSymlink: u(createSymlink),
  createSymlinkSync
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(3)
const fs = __webpack_require__(4)
const pathExists = __webpack_require__(15).pathExists

/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */

function symlinkPaths (srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, (err) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink')
        return callback(err)
      }
      return callback(null, {
        'toCwd': srcpath,
        'toDst': srcpath
      })
    })
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    return pathExists(relativeToDst, (err, exists) => {
      if (err) return callback(err)
      if (exists) {
        return callback(null, {
          'toCwd': relativeToDst,
          'toDst': srcpath
        })
      } else {
        return fs.lstat(srcpath, (err) => {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink')
            return callback(err)
          }
          return callback(null, {
            'toCwd': srcpath,
            'toDst': path.relative(dstdir, srcpath)
          })
        })
      }
    })
  }
}

function symlinkPathsSync (srcpath, dstpath) {
  let exists
  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath)
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      'toCwd': srcpath,
      'toDst': srcpath
    }
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    exists = fs.existsSync(relativeToDst)
    if (exists) {
      return {
        'toCwd': relativeToDst,
        'toDst': srcpath
      }
    } else {
      exists = fs.existsSync(srcpath)
      if (!exists) throw new Error('relative srcpath does not exist')
      return {
        'toCwd': srcpath,
        'toDst': path.relative(dstdir, srcpath)
      }
    }
  }
}

module.exports = {
  symlinkPaths,
  symlinkPathsSync
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)

function symlinkType (srcpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type
  if (type) return callback(null, type)
  fs.lstat(srcpath, (err, stats) => {
    if (err) return callback(null, 'file')
    type = (stats && stats.isDirectory()) ? 'dir' : 'file'
    callback(null, type)
  })
}

function symlinkTypeSync (srcpath, type) {
  let stats

  if (type) return type
  try {
    stats = fs.lstatSync(srcpath)
  } catch (e) {
    return 'file'
  }
  return (stats && stats.isDirectory()) ? 'dir' : 'file'
}

module.exports = {
  symlinkType,
  symlinkTypeSync
}


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const jsonFile = __webpack_require__(38)

jsonFile.outputJson = u(__webpack_require__(121))
jsonFile.outputJsonSync = __webpack_require__(122)
// aliases
jsonFile.outputJSON = jsonFile.outputJson
jsonFile.outputJSONSync = jsonFile.outputJsonSync
jsonFile.writeJSON = jsonFile.writeJson
jsonFile.writeJSONSync = jsonFile.writeJsonSync
jsonFile.readJSON = jsonFile.readJson
jsonFile.readJSONSync = jsonFile.readJsonSync

module.exports = jsonFile


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var _fs
try {
  _fs = __webpack_require__(4)
} catch (_) {
  _fs = __webpack_require__(26)
}

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  if (typeof options === 'string') {
    options = {encoding: options}
  }

  options = options || {}
  var fs = options.fs || _fs

  var shouldThrow = true
  if ('throws' in options) {
    shouldThrow = options.throws
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    data = stripBom(data)

    var obj
    try {
      obj = JSON.parse(data, options ? options.reviver : null)
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message
        return callback(err2)
      } else {
        return callback(null, null)
      }
    }

    callback(null, obj)
  })
}

function readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var fs = options.fs || _fs

  var shouldThrow = true
  if ('throws' in options) {
    shouldThrow = options.throws
  }

  try {
    var content = fs.readFileSync(file, options)
    content = stripBom(content)
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message
      throw err
    } else {
      return null
    }
  }
}

function stringify (obj, options) {
  var spaces
  var EOL = '\n'
  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options.spaces
    }
    if (options.EOL) {
      EOL = options.EOL
    }
  }

  var str = JSON.stringify(obj, options ? options.replacer : null, spaces)

  return str.replace(/\n/g, EOL) + EOL
}

function writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }
  options = options || {}
  var fs = options.fs || _fs

  var str = ''
  try {
    str = stringify(obj, options)
  } catch (err) {
    // Need to return whether a callback was passed or not
    if (callback) callback(err, null)
    return
  }

  fs.writeFile(file, str, options, callback)
}

function writeFileSync (file, obj, options) {
  options = options || {}
  var fs = options.fs || _fs

  var str = stringify(obj, options)
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8')
  content = content.replace(/^\uFEFF/, '')
  return content
}

var jsonfile = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
}

module.exports = jsonfile


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(3)
const mkdir = __webpack_require__(12)
const pathExists = __webpack_require__(15).pathExists
const jsonFile = __webpack_require__(38)

function outputJson (file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  const dir = path.dirname(file)

  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return jsonFile.writeJson(file, data, options, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)
      jsonFile.writeJson(file, data, options, callback)
    })
  })
}

module.exports = outputJson


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const mkdir = __webpack_require__(12)
const jsonFile = __webpack_require__(38)

function outputJsonSync (file, data, options) {
  const dir = path.dirname(file)

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir)
  }

  jsonFile.writeJsonSync(file, data, options)
}

module.exports = outputJsonSync


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  moveSync: __webpack_require__(124)
}


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const copySync = __webpack_require__(48).copySync
const removeSync = __webpack_require__(28).removeSync
const mkdirpSync = __webpack_require__(12).mkdirpSync
const stat = __webpack_require__(27)

function moveSync (src, dest, opts) {
  opts = opts || {}
  const overwrite = opts.overwrite || opts.clobber || false

  const { srcStat } = stat.checkPathsSync(src, dest, 'move')
  stat.checkParentPathsSync(src, srcStat, dest, 'move')
  mkdirpSync(path.dirname(dest))
  return doRename(src, dest, overwrite)
}

function doRename (src, dest, overwrite) {
  if (overwrite) {
    removeSync(dest)
    return rename(src, dest, overwrite)
  }
  if (fs.existsSync(dest)) throw new Error('dest already exists.')
  return rename(src, dest, overwrite)
}

function rename (src, dest, overwrite) {
  try {
    fs.renameSync(src, dest)
  } catch (err) {
    if (err.code !== 'EXDEV') throw err
    return moveAcrossDevice(src, dest, overwrite)
  }
}

function moveAcrossDevice (src, dest, overwrite) {
  const opts = {
    overwrite,
    errorOnExist: true
  }
  copySync(src, dest, opts)
  return removeSync(src)
}

module.exports = moveSync


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
module.exports = {
  move: u(__webpack_require__(126))
}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const copy = __webpack_require__(51).copy
const remove = __webpack_require__(28).remove
const mkdirp = __webpack_require__(12).mkdirp
const pathExists = __webpack_require__(15).pathExists
const stat = __webpack_require__(27)

function move (src, dest, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  const overwrite = opts.overwrite || opts.clobber || false

  stat.checkPaths(src, dest, 'move', (err, stats) => {
    if (err) return cb(err)
    const { srcStat } = stats
    stat.checkParentPaths(src, srcStat, dest, 'move', err => {
      if (err) return cb(err)
      mkdirp(path.dirname(dest), err => {
        if (err) return cb(err)
        return doRename(src, dest, overwrite, cb)
      })
    })
  })
}

function doRename (src, dest, overwrite, cb) {
  if (overwrite) {
    return remove(dest, err => {
      if (err) return cb(err)
      return rename(src, dest, overwrite, cb)
    })
  }
  pathExists(dest, (err, destExists) => {
    if (err) return cb(err)
    if (destExists) return cb(new Error('dest already exists.'))
    return rename(src, dest, overwrite, cb)
  })
}

function rename (src, dest, overwrite, cb) {
  fs.rename(src, dest, err => {
    if (!err) return cb()
    if (err.code !== 'EXDEV') return cb(err)
    return moveAcrossDevice(src, dest, overwrite, cb)
  })
}

function moveAcrossDevice (src, dest, overwrite, cb) {
  const opts = {
    overwrite,
    errorOnExist: true
  }
  copy(src, dest, opts, err => {
    if (err) return cb(err)
    return remove(src, cb)
  })
}

module.exports = move


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(8).fromCallback
const fs = __webpack_require__(4)
const path = __webpack_require__(3)
const mkdir = __webpack_require__(12)
const pathExists = __webpack_require__(15).pathExists

function outputFile (file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = 'utf8'
  }

  const dir = path.dirname(file)
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return fs.writeFile(file, data, encoding, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)

      fs.writeFile(file, data, encoding, callback)
    })
  })
}

function outputFileSync (file, ...args) {
  const dir = path.dirname(file)
  if (fs.existsSync(dir)) {
    return fs.writeFileSync(file, ...args)
  }
  mkdir.mkdirsSync(dir)
  fs.writeFileSync(file, ...args)
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync
}


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '14', height: '11', viewBox: '0 0 14 11' },
    _react2.default.createElement(
      'title',
      null,
      'switch-check'
    ),
    _react2.default.createElement('path', { d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '10', height: '10', viewBox: '0 0 10 10' },
    _react2.default.createElement(
      'title',
      null,
      'switch-x'
    ),
    _react2.default.createElement('path', { d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointerCoord = pointerCoord;
// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts

function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    var changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      var touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    var pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {



/***/ }),
/* 134 */
/***/ (function(module, exports) {



/***/ }),
/* 135 */
/***/ (function(module, exports) {



/***/ }),
/* 136 */
/***/ (function(module, exports) {



/***/ }),
/* 137 */
/***/ (function(module, exports) {



/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/ejs/ejs.min.js
var ejs_min = __webpack_require__(71);
var ejs_min_default = /*#__PURE__*/__webpack_require__.n(ejs_min);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react-dom/server.js
var server = __webpack_require__(72);
var server_default = /*#__PURE__*/__webpack_require__.n(server);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/react-loadable-ssr-addon/lib/index.js
var lib = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var react_loadable_lib = __webpack_require__(22);
var react_loadable_lib_default = /*#__PURE__*/__webpack_require__.n(react_loadable_lib);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(3);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: ./node_modules/fs-extra/lib/index.js
var fs_extra_lib = __webpack_require__(40);
var fs_extra_lib_default = /*#__PURE__*/__webpack_require__.n(fs_extra_lib);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js


function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/theme-fallback/Loading/index.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ var Loading = (({error,retry,pastDelay})=>{if(error){return react_default.a.createElement("div",{style:{align:'center',color:'#fff',backgroundColor:'#fa383e',borderColor:'#fa383e',borderStyle:'solid',borderRadius:'0.25rem',borderWidth:'1px',boxSizing:'border-box',display:'block',padding:'1rem',flex:'0 0 50%',marginLeft:'25%',marginRight:'25%',marginTop:'5rem',maxWidth:'50%',width:'100%'}},react_default.a.createElement("p",null,error.message),react_default.a.createElement("div",null,react_default.a.createElement("button",{type:"button",onClick:retry},"Retry")));}if(pastDelay){return react_default.a.createElement("div",{style:{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}},react_default.a.createElement("svg",{id:"loader",style:{width:128,height:110,position:'absolute',top:'calc(100vh - 64%)'},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb"},react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},react_default.a.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},react_default.a.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),react_default.a.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),react_default.a.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),react_default.a.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},react_default.a.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),react_default.a.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),react_default.a.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),react_default.a.createElement("circle",{cx:"22",cy:"22",r:"8"},react_default.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})))));}return null;});
// EXTERNAL MODULE: ./.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(74);

// CONCATENATED MODULE: ./.docusaurus/registry.js
/* harmony default export */ var registry = ({'0502ccef':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(52))),"@site/docs/internal/_extra.md",/*require.resolve*/(52)],'055cdc0f':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(53))),"@site/docs/concepts/mutable-reducers.md",/*require.resolve*/(53)],'0eabd596':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(54))),"@site/docs/internal/rootReducer.md",/*require.resolve*/(54)],'17896441':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(70))),"@theme/DocItem",/*require.resolve*/(70)],'1be78505':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(69))),"@theme/DocPage",/*require.resolve*/(69)],'316fce65':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(56))),"@site/docs/internal/features.md",/*require.resolve*/(56)],'34c687fc':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(57))),"@site/docs/api/createSliceGroup.md",/*require.resolve*/(57)],'3f3374c0':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(58))),"@site/docs/api/createSlice.md",/*require.resolve*/(58)],'572f3558':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(59))),"@site/docs/introduction/quick-start.md",/*require.resolve*/(59)],'76366398':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(60))),"@site/docs/internal/procedureFilePattern.md",/*require.resolve*/(60)],'7d169303':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(61))),"@site/docs/api/Slice.md",/*require.resolve*/(61)],'a382b2c0':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(62))),"@site/docs/api/rootSliceGroup.md",/*require.resolve*/(62)],'b1a03eb7':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(63))),"~docs/slices-for-redux-docs-route-bf9.json",/*require.resolve*/(63)],'c13630ee':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(64))),"@site/docs/api/SliceParentInterface.md",/*require.resolve*/(64)],'c31671b0':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(65))),"@site/docs/api/otherExports.md",/*require.resolve*/(65)],'c4f5d8e4':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(66))),"@site/src/pages/index.js",/*require.resolve*/(66)],'c9d20a96':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(67))),"@site/docs/internal/createMutableCombineReducer.md",/*require.resolve*/(67)],'d6663db5':[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(68))),"@site/docs/api/SliceGroup.md",/*require.resolve*/(68)]});
// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/flat.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function flat(target){const delimiter='.';const output={};function step(object,prev){Object.keys(object).forEach(key=>{const value=object[key];const type=typeof value;const isObject=type==='object'&&!!value;const newKey=prev?prev+delimiter+key:key;if(isObject&&Object.keys(value).length){step(value,newKey);return;}output[newKey]=value;});}step(target);return output;}/* harmony default export */ var client_flat = (flat);
// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ComponentCreator.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ComponentCreator(path){// 404 page
if(path==='*'){return react_loadable_lib_default()({loading:Loading,loader:()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(39)))});}const chunkNames=routesChunkNames[path];const optsModules=[];const optsWebpack=[];const optsLoader={};/* Prepare opts data that react-loadable needs
  https://github.com/jamiebuilds/react-loadable#declaring-which-modules-are-being-loaded
  Example:
  - optsLoader:
  {
    component: () => import('./Pages.js'),
    content.foo: () => import('./doc1.md'),
  }
  - optsModules: ['./Pages.js', './doc1.md']
  - optsWebpack: [require.resolveWeak('./Pages.js'), require.resolveWeak('./doc1.md')]
  */const flatChunkNames=client_flat(chunkNames);Object.keys(flatChunkNames).forEach(key=>{const chunkRegistry=registry[flatChunkNames[key]];if(chunkRegistry){/* eslint-disable prefer-destructuring */optsLoader[key]=chunkRegistry[0];optsModules.push(chunkRegistry[1]);optsWebpack.push(chunkRegistry[2]);/* eslint-enable prefer-destructuring */}});return react_loadable_lib_default.a.Map({loading:Loading,loader:optsLoader,modules:optsModules,webpack:()=>optsWebpack,render:(loaded,props)=>{// clone the original object since we don't want to alter the original.
const loadedModules=JSON.parse(JSON.stringify(chunkNames));Object.keys(loaded).forEach(key=>{let val=loadedModules;const keyPath=key.split('.');for(let i=0;i<keyPath.length-1;i+=1){val=val[keyPath[i]];}val[keyPath[keyPath.length-1]]=loaded[key].default;const nonDefaultKeys=Object.keys(loaded[key]).filter(k=>k!=='default');if(nonDefaultKeys&&nonDefaultKeys.length){nonDefaultKeys.forEach(nonDefaultKey=>{val[keyPath[keyPath.length-1]][nonDefaultKey]=loaded[key][nonDefaultKey];});}});const Component=loadedModules.component;delete loadedModules.component;return react_default.a.createElement(Component,Object(esm_extends["a" /* default */])({},loadedModules,props));}});}/* harmony default export */ var exports_ComponentCreator = (ComponentCreator);
// CONCATENATED MODULE: ./.docusaurus/routes.js
/* harmony default export */ var _docusaurus_routes = ([{path:'/slices-for-redux/',component:exports_ComponentCreator('/slices-for-redux/'),exact:true},{path:'/slices-for-redux/docs/:route',component:exports_ComponentCreator('/slices-for-redux/docs/:route'),routes:[{path:'/slices-for-redux/docs/api/Slice',component:exports_ComponentCreator('/slices-for-redux/docs/api/Slice'),exact:true},{path:'/slices-for-redux/docs/api/SliceGroup',component:exports_ComponentCreator('/slices-for-redux/docs/api/SliceGroup'),exact:true},{path:'/slices-for-redux/docs/api/SliceParentInterface',component:exports_ComponentCreator('/slices-for-redux/docs/api/SliceParentInterface'),exact:true},{path:'/slices-for-redux/docs/api/createSlice',component:exports_ComponentCreator('/slices-for-redux/docs/api/createSlice'),exact:true},{path:'/slices-for-redux/docs/api/createSliceGroup',component:exports_ComponentCreator('/slices-for-redux/docs/api/createSliceGroup'),exact:true},{path:'/slices-for-redux/docs/api/other-exports',component:exports_ComponentCreator('/slices-for-redux/docs/api/other-exports'),exact:true},{path:'/slices-for-redux/docs/api/rootSliceGroup',component:exports_ComponentCreator('/slices-for-redux/docs/api/rootSliceGroup'),exact:true},{path:'/slices-for-redux/docs/concepts/mutable-reducers',component:exports_ComponentCreator('/slices-for-redux/docs/concepts/mutable-reducers'),exact:true},{path:'/slices-for-redux/docs/internal/_extra',component:exports_ComponentCreator('/slices-for-redux/docs/internal/_extra'),exact:true},{path:'/slices-for-redux/docs/internal/createMutableCombineReducer',component:exports_ComponentCreator('/slices-for-redux/docs/internal/createMutableCombineReducer'),exact:true},{path:'/slices-for-redux/docs/internal/features',component:exports_ComponentCreator('/slices-for-redux/docs/internal/features'),exact:true},{path:'/slices-for-redux/docs/internal/procedureFilePattern',component:exports_ComponentCreator('/slices-for-redux/docs/internal/procedureFilePattern'),exact:true},{path:'/slices-for-redux/docs/internal/rootReducer',component:exports_ComponentCreator('/slices-for-redux/docs/internal/rootReducer'),exact:true},{path:'/slices-for-redux/docs/introduction/quick-start',component:exports_ComponentCreator('/slices-for-redux/docs/introduction/quick-start'),exact:true}]},{path:'*',component:exports_ComponentCreator('*')}]);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/preload.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper function to make sure all async component for that particular route
 * is preloaded before rendering. This is especially useful to avoid loading screens
 *
 * @param {Array<RouteConfig>} routes react-router-config
 * @param {string} pathname the route pathname, example: /docs/installation
 * @returns {Promise} Promise object represents whether pathname has been preloaded
 */function preload(routes,pathname){const matches=Object(react_router_config["a" /* matchRoutes */])(routes,pathname);return Promise.all(matches.map(match=>{const{component}=match.route;if(component&&component.preload){return component.preload();}return undefined;}));}
// CONCATENATED MODULE: ./.docusaurus/docusaurus.config.js
/* harmony default export */ var docusaurus_config = ({"plugins":[],"themes":[],"customFields":{},"themeConfig":{"disableDarkMode":true,"prism":{"theme":{"plain":{"color":"#f8f8f2","backgroundColor":"#272822"},"styles":[{"types":["comment","prolog","doctype","cdata"],"style":{"color":"#778090"}},{"types":["punctuation"],"style":{"color":"#F8F8F2"}},{"types":["property","tag","constant","symbol","deleted"],"style":{"color":"#F92672"}},{"types":["boolean","number"],"style":{"color":"#AE81FF"}},{"types":["selector","attr-name","string","char","builtin","inserted"],"style":{"color":"#a6e22e"}},{"types":["operator","entity","url","variable"],"style":{"color":"#F8F8F2"}},{"types":["atrule","attr-value","function"],"style":{"color":"#E6D874"}},{"types":["keyword"],"style":{"color":"#F92672"}},{"types":["regex","important"],"style":{"color":"#FD971F"}}]}},"navbar":{"title":"Slices for Redux","logo":{"alt":"Slices for Redux Logo","src":"img/slices-for-redux.svg"},"links":[{"to":"docs/introduction/quick-start","label":"Quick Start","position":"right"},{"to":"docs/api/createSlice","label":"API","position":"right"},{"href":"https://github.com/vmware/slices-for-redux","label":"GitHub","position":"right"}]},"footer":{"style":"dark","links":[{"title":"Docs","items":[{"label":"Quick Start","to":"docs/introduction/quick-start"},{"label":"API Reference","to":"docs/api/createSlice"}]},{"title":"Community","items":[{"label":"Stack Overflow","href":"http://stackoverflow.com/questions/tagged/slices-for-redux"}]},{"title":"Social","items":[{"label":"GitHub","href":"https://github.com/vmware/slices-for-redux"}]}],"copyright":"Copyright © 2020 VMware, Inc. and other contributors."}},"title":"Slices for Redux","tagline":"Slices and SliceGroups that scale. Reduce boilerplate. Split code.","url":"https://vmware.github.io","baseUrl":"/slices-for-redux/","favicon":"img/favicon.ico","organizationName":"vmware","projectName":"slices-for-redux","presets":[["@docusaurus/preset-classic",{"docs":{"sidebarPath":"/Users/awyss/github/vmware/slices-for-redux/website/sidebars.js"},"theme":{"customCss":"/Users/awyss/github/vmware/slices-for-redux/website/src/css/custom.css"}}]]});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/context.js
var exports_context = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(35);
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// CONCATENATED MODULE: ./.docusaurus/client-modules.js
/* harmony default export */ var client_modules = ([__webpack_require__(135),__webpack_require__(136)]);
// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/client-lifecycles-dispatcher.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dispatchLifecycleAction(lifecycleAction,...args){client_modules.forEach(clientModule=>{const mod=clientModule.__esModule?clientModule.default:clientModule;if(mod&&mod[lifecycleAction]){mod[lifecycleAction](...args);}});}function createLifecyclesDispatcher(){// TODO: Not sure whether it's better to declare an explicit object
// with all the lifecycles. It's better for typing but quite verbose.
// On the other hand, there's some runtime cost generating this object
// on initial load.
return['onRouteUpdate','onRouteUpdateDelayed'].reduce((lifecycles,lifecycleAction)=>{// eslint-disable-next-line no-param-reassign
lifecycles[lifecycleAction]=function(...args){dispatchLifecycleAction(lifecycleAction,...args);};return lifecycles;},{});}/* harmony default export */ var client_lifecycles_dispatcher = (createLifecyclesDispatcher());
// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress_nprogress = __webpack_require__(137);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/PendingNavigation.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */nprogress_default.a.configure({showSpinner:false});class PendingNavigation_PendingNavigation extends react_default.a.Component{constructor(props){super(props);// previousLocation doesn't affect rendering, hence not stored in state.
this.previousLocation=null;this.progressBarTimeout=null;this.state={nextRouteHasLoaded:true};}// Intercept location update and still show current route until next route
// is done loading.
shouldComponentUpdate(nextProps,nextState){const routeDidChange=nextProps.location!==this.props.location;const{routes,delay=1000}=this.props;// If `routeDidChange` is true, means the router is trying to navigate to a new
// route. We will preload the new route.
if(routeDidChange){this.startProgressBar(delay);// Save the location first.
this.previousLocation=this.props.location;this.setState({nextRouteHasLoaded:false});// Load data while the old screen remains.
preload(routes,nextProps.location.pathname).then(()=>{client_lifecycles_dispatcher.onRouteUpdate({previousLocation:this.previousLocation,location:nextProps.location});// Route has loaded, we can reset previousLocation.
this.previousLocation=null;this.setState({nextRouteHasLoaded:true},this.stopProgressBar);const{hash}=nextProps.location;if(!hash){window.scrollTo(0,0);}else{const id=hash.substring(1);const element=document.getElementById(id);if(element)element.scrollIntoView();}}).catch(e=>console.warn(e));return false;}// There's a pending route transition. Don't update until it's done.
if(!nextState.nextRouteHasLoaded){return false;}// Route has loaded, we can update now.
return true;}clearProgressBarTimeout(){if(this.progressBarTimeout){clearTimeout(this.progressBarTimeout);this.progressBarTimeout=null;}}startProgressBar(delay){this.clearProgressBarTimeout();this.progressBarTimeout=setTimeout(()=>{client_lifecycles_dispatcher.onRouteUpdateDelayed({location:this.props.location});nprogress_default.a.start();},delay);}stopProgressBar(){this.clearProgressBarTimeout();nprogress_default.a.done();}render(){const{children,location}=this.props;return react_default.a.createElement(react_router["a" /* Route */],{location:location,render:()=>children});}}/* harmony default export */ var client_PendingNavigation = (Object(react_router["g" /* withRouter */])(PendingNavigation_PendingNavigation));
// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/App.js
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function App(){const[isClient,setIsClient]=Object(react["useState"])(false);Object(react["useEffect"])(()=>{setIsClient(true);},[]);return react_default.a.createElement(exports_context["a" /* default */].Provider,{value:{siteConfig: docusaurus_config,isClient}},react_default.a.createElement(client_PendingNavigation,{routes:_docusaurus_routes},Object(renderRoutes["a" /* default */])(_docusaurus_routes)));}/* harmony default export */ var client_App = (App);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/templates/ssr.html.template.js
var ssr_html_template = __webpack_require__(83);
var ssr_html_template_default = /*#__PURE__*/__webpack_require__.n(ssr_html_template);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/serverEntry.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Renderer for static-site-generator-webpack-plugin (async rendering via promises)
async function render(locals){const{routesLocation,headTags,preBodyTags,postBodyTags}=locals;const location=routesLocation[locals.path];await preload(_docusaurus_routes,location);const modules=new Set();const context={};const appHtml=server_default.a.renderToString(react_default.a.createElement(react_loadable_lib_default.a.Capture,{report:moduleName=>modules.add(moduleName)},react_default.a.createElement(react_router["c" /* StaticRouter */],{location:location,context:context},react_default.a.createElement(client_App,null))));const helmet=Helmet["Helmet"].renderStatic();const htmlAttributes=helmet.htmlAttributes.toString();const bodyAttributes=helmet.bodyAttributes.toString();const metaStrings=[helmet.title.toString(),helmet.meta.toString(),helmet.link.toString()];const metaAttributes=metaStrings.filter(Boolean);const{generatedFilesDir}=locals;const manifestPath=external_path_default.a.join(generatedFilesDir,'client-manifest.json');const manifest=JSON.parse((await fs_extra_lib_default.a.readFile(manifestPath,'utf8')));// chunkName -> chunkAssets mapping.
const chunkManifestPath=external_path_default.a.join(generatedFilesDir,'chunk-map.json');const chunkManifest=JSON.parse((await fs_extra_lib_default.a.readFile(chunkManifestPath,'utf8')));const chunkManifestScript=`<script type="text/javascript">`+`/*<![CDATA[*/window.__chunkMapping=${JSON.stringify(chunkManifest)};/*]]>*/`+`</script>`;// Get all required assets for this particular page based on client manifest information
const modulesToBeLoaded=[...manifest.entrypoints,...Array.from(modules)];const bundles=Object(lib["getBundles"])(manifest,modulesToBeLoaded);const stylesheets=(bundles.css||[]).map(b=>b.file);const scripts=(bundles.js||[]).map(b=>b.file);const{baseUrl}=locals;return ejs_min_default.a.render(ssr_html_template_default.a.trim(),{appHtml,baseUrl,chunkManifestScript,htmlAttributes:htmlAttributes||'',bodyAttributes:bodyAttributes||'',headTags,preBodyTags,postBodyTags,metaAttributes,scripts,stylesheets},{rmWhitespace:true});}

/***/ })
/******/ ]);