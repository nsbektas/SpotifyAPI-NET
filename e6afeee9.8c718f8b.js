(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),a=(r(0),r(186)),i=r(188),c={id:"example_blazor",title:"Blazor ServerSide"},l={id:"example_blazor",title:"Blazor ServerSide",description:"Description",source:"@site/docs/example_blazor.md",permalink:"/SpotifyAPI-NET/docs/next/example_blazor",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_blazor.md",version:"next",lastUpdatedBy:"Calle",lastUpdatedAt:1592000848,sidebar:"docs",previous:{title:"Blazor WASM",permalink:"/SpotifyAPI-NET/docs/next/example_blazor_wasm"},next:{title:"CLI - Custom HTML",permalink:"/SpotifyAPI-NET/docs/next/example_cli_custom_html"}},p=[{value:"Description",id:"description",children:[]},{value:"Run it",id:"run-it",children:[]}],s={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Very similar to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/next/example_blazor_wasm"}),"Blazor WASM Example"),", but runs code on the server side and pushes view updates to the client."),Object(a.b)("img",{alt:"ASP Blazor Example - Home",src:Object(i.a)("img/asp_blazor_example_home.png")}),Object(a.b)("h2",{id:"run-it"},"Run it"),Object(a.b)("p",null,"Before running it, make sure you created an app in your ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/dashboard/"}),"spotify dashboard")," and ",Object(a.b)("inlineCode",{parentName:"p"},"https://localhost:5001")," is a redirect uri of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.ASPBlazor\ndotnet restore\n\nSPOTIFY_CLIENT_ID=YourClientId SPOTIFY_CLIENT_SECRET=YourClientSecret dotnet run\n\n# Visit https://localhost:5001\n")))}u.isMDXComponent=!0},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(b,c({ref:t},p,{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},187:function(e,t,r){"use strict";var n=r(0),o=r(49);t.a=function(){return Object(n.useContext)(o.a)}},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(189);var n=r(187);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},189:function(e,t,r){"use strict";var n=r(17),o=r(35),a=r(190),i="".startsWith;n(n.P+n.F*r(191)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},190:function(e,t,r){var n=r(69),o=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},191:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);