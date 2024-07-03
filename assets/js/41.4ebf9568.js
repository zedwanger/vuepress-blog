(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{490:function(t,s,e){t.exports=e.p+"assets/img/1.f0570125.png"},491:function(t,s,e){t.exports=e.p+"assets/img/2.5596631a.png"},492:function(t,s,e){t.exports=e.p+"assets/img/3.15d9566b.png"},566:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),s("p",[t._v("在前几篇文章中，我们介绍了"),s("code",[t._v("Vue")]),t._v("中的虚拟"),s("code",[t._v("DOM")]),t._v("以及虚拟"),s("code",[t._v("DOM")]),t._v("的"),s("code",[t._v("patch")]),t._v("(DOM-Diff)过程，而虚拟"),s("code",[t._v("DOM")]),t._v("存在的必要条件是得先有"),s("code",[t._v("VNode")]),t._v("，那么"),s("code",[t._v("VNode")]),t._v("又是从哪儿来的呢？这就是接下来几篇文章要说的模板编译。你可以这么理解：把用户写的模板进行编译，就会产生"),s("code",[t._v("VNode")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_2-什么是模板编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是模板编译"}},[t._v("#")]),t._v(" 2. 什么是模板编译")]),t._v(" "),s("p",[t._v("我们知道，在日常开发中，我们把写在"),s("code",[t._v("<template></template>")]),t._v("标签中的类似于原生"),s("code",[t._v("HTML")]),t._v("的内容称之为模板。这时你可能会问了，为什么说是“类似于原生"),s("code",[t._v("HTML")]),t._v("的内容”而不是“就是"),s("code",[t._v("HTML")]),t._v("的内容”？因为我们在开发中，在"),s("code",[t._v("<template></template>")]),t._v("标签中除了写一些原生"),s("code",[t._v("HTML")]),t._v("的标签，我们还会写一些变量插值，如"+t._s(t.xxx)+"，或者写一些"),s("code",[t._v("Vue")]),t._v("指令，如"),s("code",[t._v("v-on")]),t._v("、"),s("code",[t._v("v-if")]),t._v("等。而这些东西都是在原生"),s("code",[t._v("HTML")]),t._v("语法中不存在的，不被接受的。但是事实上我们确实这么写了，也被正确识别了，页面也正常显示了，这又是为什么呢？")]),t._v(" "),s("p",[t._v("这就归功于"),s("code",[t._v("Vue")]),t._v("的模板编译了，"),s("code",[t._v("Vue")]),t._v("会把用户在"),s("code",[t._v("<template></template>")]),t._v("标签中写的类似于原生"),s("code",[t._v("HTML")]),t._v("的内容进行编译，把原生"),s("code",[t._v("HTML")]),t._v("的内容找出来，再把非原生"),s("code",[t._v("HTML")]),t._v("找出来，经过一系列的逻辑处理生成渲染函数，也就是"),s("code",[t._v("render")]),t._v("函数，而"),s("code",[t._v("render")]),t._v("函数会将模板内容生成对应的"),s("code",[t._v("VNode")]),t._v("，而"),s("code",[t._v("VNode")]),t._v("再经过前几篇文章介绍的"),s("code",[t._v("patch")]),t._v("过程从而得到将要渲染的视图中的"),s("code",[t._v("VNode")]),t._v("，最后根据"),s("code",[t._v("VNode")]),t._v("创建真实的"),s("code",[t._v("DOM")]),t._v("节点并插入到视图中， 最终完成视图的渲染更新。")]),t._v(" "),s("p",[t._v("而把用户在"),s("code",[t._v("<template></template>")]),t._v("标签中写的类似于原生"),s("code",[t._v("HTML")]),t._v("的内容进行编译，把原生"),s("code",[t._v("HTML")]),t._v("的内容找出来，再把非原生"),s("code",[t._v("HTML")]),t._v("找出来，经过一系列的逻辑处理生成渲染函数，也就是"),s("code",[t._v("render")]),t._v("函数的这一段过程称之为模板编译过程。")]),t._v(" "),s("h2",{attrs:{id:"_3-整体渲染流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-整体渲染流程"}},[t._v("#")]),t._v(" 3. 整体渲染流程")]),t._v(" "),s("p",[t._v("所谓渲染流程，就是把用户写的类似于原生"),s("code",[t._v("HTML")]),t._v("的模板经过一系列处理最终反应到视图中称之为整个渲染流程。这个流程在上文中其实已经说到了，下面我们以流程图的形式宏观的了解一下，流程图如下：\n"),s("img",{attrs:{src:e(490),alt:""}})]),t._v(" "),s("p",[t._v("从图中我们也可以看到，模板编译过程就是把用户写的模板经过一系列处理最终生成"),s("code",[t._v("render")]),t._v("函数的过程。")]),t._v(" "),s("h2",{attrs:{id:"_4-模板编译内部流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-模板编译内部流程"}},[t._v("#")]),t._v(" 4. 模板编译内部流程")]),t._v(" "),s("p",[t._v("那么模板编译内部是怎么把用户写的模板经过处理最终生成"),s("code",[t._v("render")]),t._v("函数的呢？这内部的过程是怎样的呢？")]),t._v(" "),s("h3",{attrs:{id:"_4-1-抽象语法树ast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-抽象语法树ast"}},[t._v("#")]),t._v(" 4.1 抽象语法树AST")]),t._v(" "),s("p",[t._v("我们知道，用户在"),s("code",[t._v("<template></template>")]),t._v("标签中写的模板对"),s("code",[t._v("Vue")]),t._v("来说就是一堆字符串，那么如何解析这一堆字符串并且从中提取出元素的标签、属性、变量插值等有效信息呢？这就需要借助一个叫做抽象语法树的东西。")]),t._v(" "),s("p",[t._v("所谓抽象语法树，在计算机科学中，"),s("strong",[t._v("抽象语法树")]),t._v("（"),s("strong",[t._v("A")]),t._v("bstract"),s("strong",[t._v("S")]),t._v("yntax"),s("strong",[t._v("T")]),t._v("ree，AST），或简称"),s("strong",[t._v("语法树")]),t._v("（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。比如，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现；而类似于if-condition-then这样的条件跳转语句，可以使用带有两个分支的节点来表示。——来自百度百科")]),t._v(" "),s("p",[t._v("我就知道，这段话贴出来也是白贴，因为看了也看不懂，哈哈。那么我们就以最直观的例子来理解什么是抽象语法树。请看下图：\n"),s("img",{attrs:{src:e(491),alt:""}})]),t._v(" "),s("p",[t._v("从图中我们可以看到，一个简单的"),s("code",[t._v("HTML")]),t._v("标签的代码被转换成了一个"),s("code",[t._v("JS")]),t._v("对象，而这个对象中的属性代表了这个标签中一些关键有效信息。如图中标识。\n有兴趣的同学可以在这个网站在线转换试试：https://astexplorer.net/")]),t._v(" "),s("h3",{attrs:{id:"_4-2-具体流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-具体流程"}},[t._v("#")]),t._v(" 4.2 具体流程")]),t._v(" "),s("p",[t._v("将一堆字符串模板解析成抽象语法树"),s("code",[t._v("AST")]),t._v("后，我们就可以对其进行各种操作处理了，处理完后用处理后的"),s("code",[t._v("AST")]),t._v("来生成"),s("code",[t._v("render")]),t._v("函数。其具体流程可大致分为三个阶段：")]),t._v(" "),s("ol",[s("li",[t._v("模板解析阶段：将一堆模板字符串用正则等方式解析成抽象语法树"),s("code",[t._v("AST")]),t._v("；")]),t._v(" "),s("li",[t._v("优化阶段：遍历"),s("code",[t._v("AST")]),t._v("，找出其中的静态节点，并打上标记；")]),t._v(" "),s("li",[t._v("代码生成阶段：将"),s("code",[t._v("AST")]),t._v("转换成渲染函数；")])]),t._v(" "),s("p",[t._v("这三个阶段在源码中分别对应三个模块，下面给出三个模块的源代码在源码中的路径：")]),t._v(" "),s("ol",[s("li",[t._v("模板解析阶段——解析器——源码路径："),s("code",[t._v("src/compiler/parser/index.js")]),t._v(";")]),t._v(" "),s("li",[t._v("优化阶段——优化器——源码路径："),s("code",[t._v("src/compiler/optimizer.js")]),t._v(";")]),t._v(" "),s("li",[t._v("代码生成阶段——代码生成器——源码路径："),s("code",[t._v("src/compiler/codegen/index.js")]),t._v(";\n其对应的源码如下：")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 源码位置: /src/complier/index.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createCompiler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCompilerCreator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baseCompile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CompilerOptions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CompiledResult "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优化阶段：遍历AST，找出其中的静态节点，并打上标记；")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码生成阶段：将AST转换成渲染函数；")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("staticRenderFns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staticRenderFns\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[t._v("可以看到 "),s("code",[t._v("baseCompile")]),t._v(" 的代码非常的简短主要核心代码。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("const ast =parse(template.trim(), options)")]),t._v(":"),s("code",[t._v("parse")]),t._v(" 会用正则等方式解析 "),s("code",[t._v("template")]),t._v(" 模板中的指令、"),s("code",[t._v("class")]),t._v("、"),s("code",[t._v("style")]),t._v("等数据，形成"),s("code",[t._v("AST")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("optimize(ast, options)")]),t._v(": "),s("code",[t._v("optimize")]),t._v(" 的主要作用是标记静态节点，这是 "),s("code",[t._v("Vue")]),t._v(" 在编译过程中的一处优化，挡在进行"),s("code",[t._v("patch")]),t._v(" 的过程中， "),s("code",[t._v("DOM-Diff")]),t._v(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 "),s("code",[t._v("patch")]),t._v(" 的性能。")]),t._v(" "),s("li",[s("strong",[t._v("const code =generate(ast, options)")]),t._v(": 将 "),s("code",[t._v("AST")]),t._v(" 转化成 "),s("code",[t._v("render")]),t._v("函数字符串的过程，得到结果是 "),s("code",[t._v("render")]),t._v("函数 的字符串以及 "),s("code",[t._v("staticRenderFns")]),t._v(" 字符串。")])]),t._v(" "),s("p",[t._v("最终 "),s("code",[t._v("baseCompile")]),t._v(" 的返回值")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ast")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("staticRenderFns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staticRenderFns\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("最终返回了抽象语法树( ast )，渲染函数( render )，静态渲染函数( staticRenderFns )，且"),s("code",[t._v("render")]),t._v(" 的值为"),s("code",[t._v("code.render")]),t._v("，"),s("code",[t._v("staticRenderFns")]),t._v(" 的值为"),s("code",[t._v("code.staticRenderFns")]),t._v("，也就是说通过 "),s("code",[t._v("generate")]),t._v("处理 "),s("code",[t._v("ast")]),t._v("之后得到的返回值 "),s("code",[t._v("code")]),t._v(" 是一个对象。")]),t._v(" "),s("p",[t._v("下面再给出模板编译内部具体流程图，便于理解。流程图如下：\n"),s("img",{attrs:{src:e(492),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_5-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5. 总结")]),t._v(" "),s("p",[t._v("本篇文章首先引出了为什么会有模板编译，因为有了模板编译，才有了虚拟"),s("code",[t._v("DOM")]),t._v("，才有了后续的视图更新。接着介绍了什么是模板编译，以及介绍了把用户所写的模板经过层层处理直到最终渲染的视图中这个整体的渲染流程；最后介绍了模板编译过程中所需要使用的抽象语法树的概念以及分析了模板编译的具体实施流程，其流程大致分为三个阶段，分别是模板解析阶段、优化阶段和代码生成阶段。那么接下来的几篇文章将会把这三个阶段逐一进行分析介绍。")])])}),[],!1,null,null,null);s.default=n.exports}}]);