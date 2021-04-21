(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{65:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return d})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(0),t(88)),a={id:"mutable-reducers",title:"Mutable Reducers",sidebar_label:"Mutable Reducers"},i={unversionedId:"concepts/mutable-reducers",id:"concepts/mutable-reducers",isDocsHomePage:!1,title:"Mutable Reducers",description:"Now that we have come to appreciated the benefits of immutability,",source:"@site/docs/concepts/mutable-reducers.md",sourceDirName:"concepts",slug:"/concepts/mutable-reducers",permalink:"/slices-for-redux/docs/concepts/mutable-reducers",version:"current",sidebar_label:"Mutable Reducers",frontMatter:{id:"mutable-reducers",title:"Mutable Reducers",sidebar_label:"Mutable Reducers"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/slices-for-redux/docs/introduction/quick-start"},next:{title:"rootSliceGroup",permalink:"/slices-for-redux/docs/api/rootSliceGroup"}},d=[{value:"Example",id:"example",children:[]}],u={toc:d};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Now that we have come to appreciated the benefits of immutability,\nproposing the use of mutable reducers may, at first look, seen as an anti-pattern.",Object(c.b)("br",{parentName:"p"}),"\n","Please, read why maybe using mutable reducers may not be such a bad idea after all."),Object(c.b)("p",null,'Most applications create the "root-reducer" with ',Object(c.b)("a",{href:"https://redux.js.org/api/combinereducers",target:"_blank"},"combineReducers()"),' from Redux. Slice reducers are imported and combined when creating the rootReducer. This is often done in a "reducers.js" file.'),Object(c.b)("p",null,'Large applications use code splitting to incrementally load code chunks.\nCode inside a dynamically loaded chunk needs a way to add its slice reducers to the rootReducer.\nCurrent solutions involve creating a new "root-reducer" and calling ',Object(c.b)("a",{href:"https://redux.js.org/api/store#replacereducernextreducer",target:"_blank"},"store.replaceReducer(newReducer)"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Slices for Redux"),'\'s "root-reducer" is a combine reducer that is mutable. Slice reducers can be added to the "root-reducer" as needed. This not only simplifies the code that one writes but actually promotes code splitting to occur in the first place. Importing and combining reducers at startup can be avoided for the majority of slice reducers. Slice reducers can add themselves to the "root-reducer" when their code is loaded.'),Object(c.b)("p",null,'Only those reducers that are not adding themselves need to be imported and explicitly added to the rootReducer.\nThere is no longer the need to import and modify the "reducers.js" file each time a new reducer is written. This removes the boilerplate code inside the "reducers.js" file.'),Object(c.b)("p",null,"When slice reducers files are no longer imported in the reducers.js file,\nthe bundler will be able to defer more code, reducing the size of the first chunk."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Using the ",Object(c.b)("inlineCode",{parentName:"p"},"addReducers")," function of the ",Object(c.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},Object(c.b)("inlineCode",{parentName:"a"},"rootSliceGroup")),'\none can add one or more slice reducers to the "root-reducer" before and after the Redux store is created.'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit';\nimport { rootSliceGroup } from 'slices-for-redux';\n\n// Add initial reducers before creating the store\nrootSliceGroup.addReducers({\n  slice1: reducer1,\n});\n// Create the store\nconst store = configureStore({\n  reducer: rootSliceGroup.reducer,\n});\n\n// And later as lazy loaded module are loaded they can add their reducers to the \"root-reducer\".\nrootSliceGroup.addReducers({ [sliceName]: sliceReducer });\n\nrootSliceGroup.addReducers({ slice2: sliceReducer2, slice3: sliceReducer3 });\n")))}s.isMDXComponent=!0},88:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=s(t),b=n,m=l["".concat(a,".").concat(b)]||l[b]||p[b]||c;return t?o.a.createElement(m,i(i({ref:r},u),{},{components:t})):o.a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);