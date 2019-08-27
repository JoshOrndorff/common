(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{282:function(t,s,a){"use strict";a.r(s);var r=a(38),e=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("h1",{attrs:{id:"external-module-promisify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-module-promisify","aria-hidden":"true"}},[t._v("#")]),t._v(' External module: "promisify"')])]),t._v(" "),a("h2",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[t._v("#")]),t._v(" Index")]),t._v(" "),a("h3",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces","aria-hidden":"true"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/util/interfaces/_promisify_.promisifyfn.html"}},[t._v("PromisifyFn")])],1)]),t._v(" "),a("h3",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/util/modules/_promisify_.html#promisify"}},[t._v("promisify")])],1)]),t._v(" "),a("h2",{attrs:{id:"functions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("h3",{attrs:{id:"promisify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promisify","aria-hidden":"true"}},[t._v("#")]),t._v(" promisify")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("promisify")]),t._v("("),a("code",[t._v("self")]),t._v(": any, "),a("code",[t._v("fn")]),t._v(": "),a("router-link",{attrs:{to:"/util/interfaces/_promisify_.promisifyfn.html"}},[t._v("PromisifyFn")]),t._v(", ..."),a("code",[t._v("params")]),t._v(": ParamType): "),a("em",[t._v("Promise‹any›")])],1),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/a8b28a2/packages/util/src/promisify.ts#L35",target:"_blank",rel:"noopener noreferrer"}},[t._v("promisify.ts:35"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("name")])]),t._v(" promisify")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("summary")])]),t._v(" Wraps an async callback into a "),a("code",[t._v("Promise")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("description")])]),t._v("\nWraps the supplied async function "),a("code",[t._v("fn")]),t._v(" that has a standard JS callback "),a("code",[t._v("(error: Error, result: any)")]),t._v(" into a "),a("code",[t._v("Promise")]),t._v(", passing the supplied parameters. When "),a("code",[t._v("error")]),t._v(" is set, the Promise is rejected, else the Promise resolves with the "),a("code",[t._v("result")]),t._v(" value.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])]),t._v(" "),a("BR")],1),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" promisify "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promisify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves with `true`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promisify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rejects with `error!`")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("self")])]),t._v(" "),a("td",[t._v("any")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("fn")])]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/util/interfaces/_promisify_.promisifyfn.html"}},[t._v("PromisifyFn")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("...params")])]),t._v(" "),a("td",[t._v("ParamType")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("Promise‹any›")])])])},[],!1,null,null,null);s.default=e.exports}}]);