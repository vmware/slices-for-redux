(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(88)),c={id:"createSlice",title:"createSlice",sidebar_label:"createSlice",hide_title:!0},o={unversionedId:"api/createSlice",id:"api/createSlice",isDocsHomePage:!1,title:"createSlice",description:"createSlice",source:"@site/docs/api/createSlice.md",slug:"/api/createSlice",permalink:"/slices-for-redux/docs/api/createSlice",version:"current",sidebar_label:"createSlice",sidebar:"docs",previous:{title:"rootSliceGroup",permalink:"/slices-for-redux/docs/api/rootSliceGroup"},next:{title:"Slice",permalink:"/slices-for-redux/docs/api/Slice"}},p=[{value:"Parameters",id:"parameters",children:[{value:"<code>actionTypeFormat</code>",id:"actiontypeformat",children:[]},{value:"<code>initialState</code>",id:"initialstate",children:[]},{value:"<code>immer</code>",id:"immer",children:[]},{value:"<code>name</code>",id:"name",children:[]},{value:"<code>parent</code>",id:"parent",children:[]}]},{value:"Return Value",id:"return-value",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"createslice"},Object(i.b)("inlineCode",{parentName:"h1"},"createSlice")),Object(i.b)("p",null,"A function that accepts a ",Object(i.b)("em",{parentName:"p"},"name"),", an ",Object(i.b)("em",{parentName:"p"},"initialState"),", and optionally a ",Object(i.b)("em",{parentName:"p"},"parent")," and creates a ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(i.b)("inlineCode",{parentName:"a"},"Slice"))," object. The default ",Object(i.b)("em",{parentName:"p"},"parent")," is the ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},Object(i.b)("inlineCode",{parentName:"a"},"rootSliceGroup")),"."),Object(i.b)("p",null,"Note that case-reducers and extraReducers are added to the slice object after it has been created. This is in contrast to the RTK ",Object(i.b)("a",{href:"https://redux-toolkit.js.org/api/createSlice",target:"_blank"},"createSlice")," where case-reducers and extraReducers are part of the configuration object."),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createSlice")," accepts a single configuration object parameter, with the following options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"function createSlice({\n  /**\n   * Optional - Defines how an _actionType_ is generated given\n   * the _actionKey_ and the names.\n   */\n  actionTypeFormat?: 'RTK' | ActionTypeFormatFunc;\n\n  /**\n   * Optional - The Slice's reducer uses, or not uses 'immer'.\n   */\n  immer?: boolean;\n\n  /**\n   * The initial state returned by the Slice's reducer and selector\n   * when the store state has no value for this slice of state.\n   */\n  initialState: any;\n\n  /**\n   * The Slice's name.\n   */\n  name: string;\n\n  /**\n   * Optional - The Slice's parent.\n   */\n  parent?: SliceParent | string;\n})\n")),Object(i.b)("h3",{id:"actiontypeformat"},Object(i.b)("inlineCode",{parentName:"h3"},"actionTypeFormat")),Object(i.b)("p",null,"Optional - Defines how an ",Object(i.b)("em",{parentName:"p"},"actionType")," is generated given\nthe ",Object(i.b)("em",{parentName:"p"},"actionKey")," and the names.",Object(i.b)("br",{parentName:"p"}),"\n","The names is the list of the ancestors SliceGroups' ",Object(i.b)("em",{parentName:"p"},"name")," and the Slice's ",Object(i.b)("em",{parentName:"p"},"name"),"."),Object(i.b)("p",null,"The default format is: ",Object(i.b)("inlineCode",{parentName:"p"},"${actionKey}_${[...names].reverse().join('_')}"),Object(i.b)("br",{parentName:"p"}),"\n","When value is: 'RTK' it uses Redux Toolkit convention: ",Object(i.b)("inlineCode",{parentName:"p"},"${names.join('/')}/${actionKey}")),Object(i.b)("p",null,"Otherwise the value must be a function with this signature:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"(actionKey: string, names: string[]) => string")),Object(i.b)("h3",{id:"initialstate"},Object(i.b)("inlineCode",{parentName:"h3"},"initialState")),Object(i.b)("p",null,"The initial state value for this slice of state.\nIt is returned by the Slice's ",Object(i.b)("em",{parentName:"p"},"reducer")," and ",Object(i.b)("em",{parentName:"p"},"selector"),"\nwhen the store state has no value for this slice of state."),Object(i.b)("h3",{id:"immer"},Object(i.b)("inlineCode",{parentName:"h3"},"immer")),Object(i.b)("p",null,"Optional - The Slice's reducer uses ",Object(i.b)("a",{href:"https://github.com/immerjs/immer",target:"_blank"},"immer"),".",Object(i.b)("br",{parentName:"p"}),"\n","Default value is: ",Object(i.b)("strong",{parentName:"p"},"true"),Object(i.b)("br",{parentName:"p"}),"\n","When migrating to ",Object(i.b)("strong",{parentName:"p"},"Slices for Redux"),", if you discover that some some of your existing code is not compatible with immer you can\n",Object(i.b)("strong",{parentName:"p"},"temporarily ignore")," it by set the ",Object(i.b)("em",{parentName:"p"},"immer")," option to false until you can fix it.",Object(i.b)("br",{parentName:"p"}),"\n","When ",Object(i.b)("em",{parentName:"p"},"immer")," is false, a warning will appear in the console."),Object(i.b)("h3",{id:"name"},Object(i.b)("inlineCode",{parentName:"h3"},"name")),Object(i.b)("p",null,"A string name for this slice of state.\nAlso used by ",Object(i.b)("em",{parentName:"p"},"actionTypeFormat")," to generated the ",Object(i.b)("em",{parentName:"p"},"actionType")," constants."),Object(i.b)("h3",{id:"parent"},Object(i.b)("inlineCode",{parentName:"h3"},"parent")),Object(i.b)("p",null,"Optional - The Slice's parent."),Object(i.b)("p",null,"Default value is: ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},Object(i.b)("inlineCode",{parentName:"a"},"rootSliceGroup")),Object(i.b)("br",{parentName:"p"}),"\n","When ",Object(i.b)("em",{parentName:"p"},"parent")," is ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},Object(i.b)("inlineCode",{parentName:"a"},"rootSliceGroup"))," the created ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(i.b)("inlineCode",{parentName:"a"},"Slice")),"'s ",Object(i.b)("em",{parentName:"p"},"reducer"),' will be added to the "root-reducer" (the reducer of the rootSliceGroup).',Object(i.b)("br",{parentName:"p"}),"\n","When ",Object(i.b)("em",{parentName:"p"},"parent")," is a ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceParent"},Object(i.b)("inlineCode",{parentName:"a"},"SliceParent")),", the created ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(i.b)("inlineCode",{parentName:"a"},"Slice")),"'s ",Object(i.b)("em",{parentName:"p"},"reducer")," will be added to that parent's ",Object(i.b)("em",{parentName:"p"},"reducer"),".",Object(i.b)("br",{parentName:"p"}),"\n","When ",Object(i.b)("em",{parentName:"p"},"parent")," is a string, it represents the parent's path, and the created\n",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(i.b)("inlineCode",{parentName:"a"},"Slice")),"'s reducer will need to be manually added to that parent's reducer."),Object(i.b)("h2",{id:"return-value"},"Return Value"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createSlice")," returns a ",Object(i.b)("a",{parentName:"p",href:"/slices-for-redux/docs/api/Slice"},Object(i.b)("inlineCode",{parentName:"a"},"Slice"))," object."))}b.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,u=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);