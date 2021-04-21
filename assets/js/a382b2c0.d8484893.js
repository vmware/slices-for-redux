(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return d}));var o=t(3),n=t(7),a=(t(0),t(88)),c={id:"rootSliceGroup",title:"rootSliceGroup",sidebar_label:"rootSliceGroup"},i={unversionedId:"api/rootSliceGroup",id:"api/rootSliceGroup",isDocsHomePage:!1,title:"rootSliceGroup",description:"The rootSliceGroup is the default parent unless a different parent is given when creating a Slice or SliceGroup.",source:"@site/docs/api/rootSliceGroup.md",sourceDirName:"api",slug:"/api/rootSliceGroup",permalink:"/slices-for-redux/docs/api/rootSliceGroup",version:"current",sidebar_label:"rootSliceGroup",frontMatter:{id:"rootSliceGroup",title:"rootSliceGroup",sidebar_label:"rootSliceGroup"},sidebar:"docs",previous:{title:"Mutable Reducers",permalink:"/slices-for-redux/docs/concepts/mutable-reducers"},next:{title:"createSlice",permalink:"/slices-for-redux/docs/api/createSlice"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>addReducers</code>",id:"addreducers",children:[]},{value:"<code>path</code>",id:"path",children:[]},{value:"<code>reducer</code>",id:"reducer",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Other SliceGroups",id:"other-slicegroups",children:[]}],p={toc:l};function d(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup")," is the default ",Object(a.b)("inlineCode",{parentName:"p"},"parent")," unless a different ",Object(a.b)("inlineCode",{parentName:"p"},"parent")," is given when creating a ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(a.b)("inlineCode",{parentName:"a"},"Slice"))," or ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},Object(a.b)("inlineCode",{parentName:"a"},"SliceGroup")),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"reducer"),' is the "root-reducer" that must be passed to createStore from Redux or to configureStore from Redux Toolkit.'),Object(a.b)("p",null,"Other reducers are added to this ",Object(a.b)("inlineCode",{parentName:"p"},"reducer"),' (the "root-reducer") using the ',Object(a.b)("inlineCode",{parentName:"p"},"addReducers")," function of the ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup"),". But in most cases this will be done automatically when creating new ",Object(a.b)("inlineCode",{parentName:"p"},"Slices")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroups")," with ",Object(a.b)("inlineCode",{parentName:"p"},"createSlice")," and ",Object(a.b)("inlineCode",{parentName:"p"},"createSliceGroup"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup")," is an object that looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"{\n    addReducers: (reducers: Reducers) => void,\n    path: '/',\n    reducer: Reducer, // the \"root-reducer\"\n}\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"addreducers"},Object(a.b)("inlineCode",{parentName:"h3"},"addReducers")),Object(a.b)("p",null,'A function that adds one or more reducer to the "root-reducer".',Object(a.b)("br",{parentName:"p"}),"\n","Accepts an object where the keys are names and the values are reducer functions."),Object(a.b)("h3",{id:"path"},Object(a.b)("inlineCode",{parentName:"h3"},"path")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup"),"'s path value is: '/'"),Object(a.b)("h3",{id:"reducer"},Object(a.b)("inlineCode",{parentName:"h3"},"reducer")),Object(a.b)("p",null,'This is the "root-reducer".',Object(a.b)("br",{parentName:"p"}),"\n","This ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," must be passed to ",Object(a.b)("a",{href:"https://redux.js.org/api/createstore",target:"_blank"},"createStore"),"\nfrom Redux or to ",Object(a.b)("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},"configureStore"),"\nfrom Redux Toolkit. We recommend using ",Object(a.b)("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},"configureStore"),'\nfrom Redux Toolkit.\nThis reducer is a "mutable combine reducer".',Object(a.b)("br",{parentName:"p"}),"\n","Use the ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"addReducers")," function to add reducers to it."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { configureStore } from '@reduxjs/toolkit';\nimport { rootSliceGroup } from 'slices-for-redux';\n\n// Add reducers before creating the store\nrootSliceGroup.addReducers({\n  slice1: reducer1,\n});\n\nconst store = configureStore({\n  reducer: rootSliceGroup.reducer,\n});\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"// As needed add additional reducers after the store was created\n// E.g. when a lazy loaded module is loaded.\nrootSliceGroup.addReducers({\n  slice2: reducer2,\n});\n")),Object(a.b)("h2",{id:"other-slicegroups"},"Other SliceGroups"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup")," is the default top most group of Slices."),Object(a.b)("p",null,"By default ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/createSlice"},Object(a.b)("inlineCode",{parentName:"a"},"createSlice()"))," creates a ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(a.b)("inlineCode",{parentName:"a"},"Slice")),' that manages a "slice of state" that exists directly under the root of the store state object.'),Object(a.b)("p",null,"With ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/createSliceGroup"},Object(a.b)("inlineCode",{parentName:"a"},"createSliceGroup()"))," one can create other ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},Object(a.b)("inlineCode",{parentName:"a"},"SliceGroup"))," which allow grouping Slices under a group name.\nIn that case a ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(a.b)("inlineCode",{parentName:"a"},"Slice")),' will manage a "slice of state" that exists under that ',Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},Object(a.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s name."),Object(a.b)("p",null,"In the rare case (not recommended) where multiple Redux stores are used, one can still use the ",Object(a.b)("inlineCode",{parentName:"p"},"rootSliceGroup")," for one store, and then create another root ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},Object(a.b)("inlineCode",{parentName:"a"},"SliceGroup"))," for each additional store with ",Object(a.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/createSliceGroup"},Object(a.b)("inlineCode",{parentName:"a"},"createSliceGroup({ name: '/' })")),"."))}d.isMDXComponent=!0},88:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),d=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),b=o,m=u["".concat(c,".").concat(b)]||u[b]||s[b]||a;return t?n.a.createElement(m,i(i({ref:r},p),{},{components:t})):n.a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);