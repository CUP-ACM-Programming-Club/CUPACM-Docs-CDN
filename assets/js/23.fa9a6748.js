(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{229:function(s,t,a){"use strict";a.r(t);var e=a(17),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("本文档由VuePress框架进行构建，关于VuePress框架的介绍，请跳转至"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress"),a("OutboundLink")],1),s._v("进行学习使用")]),s._v(" "),a("p",[s._v("本文档使用VuePress的默认主题。若您有更加适合的用于本文档的主题构建，请Fork本仓库，配置好GitHub Pages供预览后，在本仓库新建一条issue并附上Github Pages地址。")]),s._v(" "),a("p",[s._v("本文档中的所有内容遵循CC-BY-SA 4.0协议，开源代码部分遵循MIT License，请知悉。")]),s._v(" "),a("h2",{attrs:{id:"本文档是如何构建的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文档是如何构建的？"}},[s._v("#")]),s._v(" 本文档是如何构建的？")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("本文档默认您对Markdown语法、Git工具的使用、持续集成工具(CI)、VuePress有一定的了解，若您是上面几项技能的初学者，请先通过搜索引擎简单学习相关知识，再阅读以下部分。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("本文档采用了Travis CI进行自动构建。当本文档仓库主分支产生新的Pull Request，Travis CI会根据您提交的副本进行构建测试。若您的模板无法通过正常的构建测试，我们将不会把您的Pull Request合并到主分支中，请知悉。")])]),s._v(" "),a("p",[s._v("本文档使用了全自动的部署构建，若你想帮助完善本文档，只需要简单的几步，您的更改就会自动更新到页面中。")]),s._v(" "),a("h3",{attrs:{id:"fork副本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork副本"}},[s._v("#")]),s._v(" Fork副本")]),s._v(" "),a("p",[s._v("正如其他开源项目的开发流程，您先需要将本文档Fork到您的个人仓库中。您可以通过对该副本的内容进行修改，再通过Pull Request将改动推回原始仓库。")]),s._v(" "),a("h3",{attrs:{id:"文档目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档目录结构"}},[s._v("#")]),s._v(" 文档目录结构")]),s._v(" "),a("h4",{attrs:{id:"docs-文档内容目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs-文档内容目录"}},[s._v("#")]),s._v(" "),a("code",[s._v("docs")]),s._v(" 文档内容目录")]),s._v(" "),a("p",[s._v("本文档docs目录下的结构如下所示，随着内容的更新，部分结构可能存在缺失，欢迎您对此进行补充。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("若您需要维护文档内容，请仅更新docs目录下的文件。若需要对文档的配置进行更新，请修改后在Pull Request中详细说明更改的部分并附上更改后的效果样本")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("该树形结构使用"),a("code",[s._v("tree")]),s._v("命令生成，macOS用户可以使用brew进行安装")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── README.md\n├── code_template\n│   └── index.md\n└── contribute\n    └── guide.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("您应把代码模板放在"),a("code",[s._v("code_template")]),s._v("中，把构建文档放在"),a("code",[s._v("contribute")]),s._v("目录中。")]),s._v(" "),a("p",[s._v("在根目录下的内容是由初始开发者构建好的部分，若没有必要的原因请不要修改。")]),s._v(" "),a("h4",{attrs:{id:"根目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根目录"}},[s._v("#")]),s._v(" 根目录")]),s._v(" "),a("p",[s._v("根目录下的文件是本项目的基础配置文件。包括:")]),s._v(" "),a("ul",[a("li",[s._v(".travis.yml Travis CI持续构建配置")]),s._v(" "),a("li",[s._v("LICENSE 本项目的开源协议")]),s._v(" "),a("li",[s._v("package.json 本项目的依赖")]),s._v(" "),a("li",[s._v("package-lock.json 本项目的依赖树(自动生成，请勿手动修改)")]),s._v(" "),a("li",[s._v("README.md Github Repo README文件")])]),s._v(" "),a("h4",{attrs:{id:"deploy目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy目录"}},[s._v("#")]),s._v(" "),a("code",[s._v("deploy")]),s._v("目录")]),s._v(" "),a("p",[s._v("本目录下的文件是Travis CI构建使用的shell文件，若需要添加新的构建命令，请将文件放置在本目录，并执行命令:")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-index --chmod"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("+x path/to/file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("请将其中的"),a("code",[s._v("path/to/file")]),s._v("更换成您需要执行的文件。")]),s._v(" "),a("h4",{attrs:{id:"node-module目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-module目录"}},[s._v("#")]),s._v(" "),a("code",[s._v("node_module")]),s._v("目录")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("本目录为npm根据package.json中依赖所安装的依赖库文件目录，请不要擅自更改。")])]),s._v(" "),a("h4",{attrs:{id:"travis目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis目录"}},[s._v("#")]),s._v(" "),a("code",[s._v(".travis")]),s._v("目录")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("本目录包含自动提交的密钥文件，请不要擅自更改。")])]),s._v(" "),a("h3",{attrs:{id:"编写文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写文档"}},[s._v("#")]),s._v(" 编写文档")]),s._v(" "),a("p",[s._v("您可以在"),a("code",[s._v("docs")]),s._v("文档下新建一个Markdown文件。\n该文档的title(如本页面左侧导航栏的"),a("strong",[s._v("更新本文档")]),s._v(")放置在文档开头，使用Front Matter语法编写。")]),s._v(" "),a("p",[s._v("如以下示例")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 更新本文档\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("对于每一个文档，构建工具在生成的时候会根据其在文档中的目录结构生成一个对应的html文件。如本文档在目录中的地址为")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("/contribute/guide.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("那么，在构建后，您则可以通过以下方式访问本文档")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("/contribute/guide\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 您也可以使用/contribute/guide.html")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("框架会自动帮您转换文档的后缀")]),s._v(" "),a("p",[s._v("对于您需要在文档中添加附件或图片的，请将这些文件放在"),a("code",[s._v(".vuepress/public")]),s._v("文件夹下，如本文档所示，"),a("code",[s._v("public")]),s._v("文件夹中的目录格式和"),a("code",[s._v("docs")]),s._v("下的文件夹是一一对应的，\n您可参照"),a("RouterLink",{attrs:{to:"/solution/icpc2019shanghai/"}},[s._v("ICPC2019上海")]),s._v("中pdf的链接格式，在本项目中定位文件，对如何引入这类文件有更加深入的理解。")],1),s._v(" "),a("h3",{attrs:{id:"附加功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加功能"}},[s._v("#")]),s._v(" 附加功能")]),s._v(" "),a("p",[s._v("您在目录下添加文件夹时，为了实现一些扩展特性，可以在文件夹目录下添加"),a("code",[s._v("manifest.js")]),s._v("文件。")]),s._v(" "),a("p",[s._v("文件的内容模板如下:")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("sortFn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("sort")]),s._v(": 要求对该文件夹下的文件进行排序。排序函数若未给出，则根据字典序进行排序。")]),s._v(" "),a("p",[s._v("若需要使用自定义排序函数，请添加"),a("code",[s._v("sortFn")]),s._v("属性，包含一个传入"),a("code",[s._v("sort()")]),s._v("中的比较函数。一个典型的比较函数写法如上述代码中的"),a("code",[s._v("sortFn")])]),s._v(" "),a("h3",{attrs:{id:"预览文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预览文档"}},[s._v("#")]),s._v(" 预览文档")]),s._v(" "),a("p",[s._v("通过VuePress的构建工具，我们可以一边编写文档，一边在浏览器中查看文档经过编译的结果。")]),s._v(" "),a("p",[s._v("您需要通过执行")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动热更新模式。在开发环境启动完成后，程序会返回一个本地预览地址，您可以通过该地址访问您本地构建的文档。")]),s._v(" "),a("p",[s._v("脚手架会监听文档目录下文件的变动情况，在您保存文件后，VuePress会自动进行编译，并把内容推送到本地测试地址的页面中。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("由于webpack热更新的限制，暂时无法自动更新侧边栏，因此若想浏览侧边栏的效果，请重启脚本并刷新页面。")])]),s._v(" "),a("h3",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),a("p",[s._v("当您完成对文档更改，并通过Git提交到您的Github fork repo以后，请给主仓库推一个Pull Request,必要的时候可以要求管理员对您的更改进行Review。")]),s._v(" "),a("p",[a("strong",[s._v("新手务必指定管理员进行Code Review,以保证提交格式合法规范。")])]),s._v(" "),a("p",[s._v("Github Actions会对您的PR进行打包测试。打包测试通过以后管理员才会考虑将您的更改合并到主分支。")]),s._v(" "),a("p",[s._v("管理员在同意您的PR后，Github Actions会根据您更新的内容进行一次完整构建，并将编译好的"),a("code",[s._v("dist")]),s._v("文件夹下的文件推送至主仓库的"),a("code",[s._v("gh-pages")]),s._v("分支下。您可以查看commit log确认更新推送情况。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Pull Request请尽量用于合并变更到主分支，其他情况下尽可能使用本地git进行版本管理\n为保证您的分支清爽整洁，请善用"),a("code",[s._v("git pull --rebase")]),s._v("命令。")])]),s._v(" "),a("p",[s._v("在构建完成后，您便可以通过本文档的地址查看更改后的最新的内容。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("预定义构建脚本使用了JsDelivr作为CDN加速本文档静态文件(除html)的访问速度，由于发布存在延迟，CDN的资源库不能及时更新。\n请等待约15分钟直到CDN节点完成缓存分发任务")])])])}),[],!1,null,null,null);t.default=v.exports}}]);