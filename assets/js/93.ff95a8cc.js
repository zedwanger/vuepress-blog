(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{598:function(t,s,a){"use strict";a.r(s);var r=a(1),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"设置本地数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置本地数据源"}},[t._v("#")]),t._v(" 设置本地数据源")]),t._v(" "),s("p",[s("strong",[t._v("设计器")]),t._v(" -> "),s("strong",[t._v("菜单栏")]),t._v(" -> "),s("strong",[t._v("服务器")]),t._v(" -> "),s("strong",[t._v("定义数据连接")]),t._v("\n数据连接最好与服务器的数据连接保持一致, 这样在本地设计完报表之后, 可以直接把.cpt文件迁移到服务器模板目录下。\n"),s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02cgHw.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"熟悉设计器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#熟悉设计器"}},[t._v("#")]),t._v(" 熟悉设计器")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02cAnc.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"页面设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面设置"}},[t._v("#")]),t._v(" 页面设置")]),t._v(" "),s("p",[t._v("将页面设置大一点，这样预览的时候，可以看完整的报表\n"),s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02chU6.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"报表样式设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报表样式设计"}},[t._v("#")]),t._v(" 报表样式设计")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02c5cf.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"配置动态报表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置动态报表"}},[t._v("#")]),t._v(" 配置动态报表")]),t._v(" "),s("p",[t._v("所谓的动态报表就是根据不同的参数组合动态生成SQL语句去查询结果集, 生成动态SQL需要配置参数, FR参数可以分为: "),s("strong",[t._v("数据集参数")]),t._v("、"),s("strong",[t._v("模板参数")]),t._v("、"),s("strong",[t._v("全局参数")])]),t._v(" "),s("ul",[s("li",[s("blockquote",[s("p",[s("a",{attrs:{href:"https://help.fanruan.com/finereport/doc-view-156.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FR参数种类与区别"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[t._v("顾名思义, 数据集参数就是以数据集为粒度的参数, 模板参数就是以模板为粒度的参数, 全局参数就是以全局为粒度的参数。按作用域分就是："),s("strong",[t._v("全局参数")]),t._v(" > "),s("strong",[t._v("模板参数")]),t._v(" > "),s("strong",[t._v("数据集参数")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02cHte.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02c82O.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02cxQQ.png",alt:""}})]),t._v(" "),s("p",[t._v("到目前为止, 我在数据集和模板参数中都配置了zhLabel这个动态参数, 但是目前有一个问题就是, 如果zhLabel为空我想查询全部的数据该怎么办?")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rmw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rms_site "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" zh_label "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${zhLabel}'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("使用IF函数")]),s("br"),t._v("\n注意：帆软对查询数据上限是有限制的, 如果SQL的查询数据过多会触发保护机制, 因为浏览器和后台程序不能够缓存太大的数据, 这是一种良好的优化,后面会解释到帆软如何处理这样的场景, 目前我们先限制一下查询数据行数。")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rmw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rms_site "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n${"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zhLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"and zh_label = \'"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" zhLabel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\'"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("}\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" rownum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 查看执行SQL结果：select * from rmw.rms_site where 1=1 and zh_label = '测试' and rownum <= 200")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"控件的初级使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控件的初级使用"}},[t._v("#")]),t._v(" 控件的初级使用")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://v1.ax1x.com/2023/03/24/02cWL3.png",alt:""}}),s("br")]),t._v(" "),s("ul",[s("li",[s("blockquote",[s("p",[s("a",{attrs:{href:"https://help.fanruan.com/finereport/doc-view-4193.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FR控件的使用"),s("OutboundLink")],1),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"模板下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板下载"}},[t._v("#")]),t._v(" 模板下载")]),t._v(" "),s("p",[t._v("145服务器 "),s("strong",[t._v("/usr/local/tomcat-linux/webapps/webroot/WEB-INF/reportlets/test/rms_site.cpt")]),t._v(" 路径下载"),s("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);