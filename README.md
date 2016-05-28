<a href="http://www.html-js.com/article/2494" taregt="_blank">关于专栏刚上线的新功能【评注】</a>

今天下午突然蹦出个点子，想给专栏加一个任意点评的功能。这种点评不止是针对整个文章的评论，而是更有针对性的直接指出文章某个位置的问题或者讨论。

于是，晚上跟朋友喝完烧酒吃完火锅回家后，开动。

然后等大家都睡了的时候，新功能就这样上线了。

基本的动效就是这样的，因为时间紧，各种粗暴：

enter image description here

可以添加，也可以评论，新加标注的时候作者会收到一封邮件通知，所以也别太频繁的标注了哦。

以下是几个效果，欢迎大家多多使用，这种标注方式真心很有用的。

enter image description here

enter image description here

本站专栏文章皆为原创，转载请注明出处（带有 前端乱炖 字样）和本文的显式链接(http://www.html-js.com/article/2494)，本站和作者保留随时要求删除文章的权利！


//
juli-so
评注功能源代码在：
1.https://github.com/juli-so/htmljs/blob/master/assets/js/tips.js
2.https://github.com/juli-so/htmljs/commit/6f5f4d3f4583e192c7aae6a7ee9874007f81703e 
via juli-so's search:
1.https://github.com/xinyu198736/htmljs/search?utf8=%E2%9C%93&q=%E8%AF%84%E6%B3%A8
2.https://github.com/xinyu198736/htmljs/search?utf8=%E2%9C%93&q=hide_tip&type=Code
and then go to https://github.com/juli-so/htmljs/tree/master/assets/js
and then find out:
1.https://github.com/juli-so/htmljs/blob/master/assets/js/tips.js
2.https://github.com/juli-so/htmljs/commit/6f5f4d3f4583e192c7aae6a7ee9874007f81703e
//


htmljs
======

前端乱炖博客的repo。http://www.html-js.com

本站代码仅供参考，缺少配置文件在本地不能运行，基于express，rainbow，sequelize，jade，coffeescript，less，moment等技术和框架。

update:本站代码比较老，建议参考RabbitJS的实现思路，更清晰，原理与此相同：https://github.com/xinyu198736/Rabbit.js

约定模式：
==
* 整个系统从数据到最终逻辑分为五层：1.models，2.functions，3.filters，4.routes，5.views
d
各部分的功能：
==
* models，使用sequelize将数据库操作抽象化，使用其规定格式定义数据对象，完全不需要关心数据库的问题。
* functions，在sequelize上又一层操作封装，主要是各种数据操作，将其封装，供不同的routes或者filters调用。
* filters，一些复用route的合集，例如用户检查，权限检查，通用module，总之就是各种抽象。
* routes，逻辑的最顶层，负责请求调度，一个请求经过filters，获取到通用数据，然后进去各自的routes，在routes里调用functions方法操作和获取models定义的数据。然后把数据显示在views上或者直接返回给用户。
* views，在routes里调用，使用数据渲染页面


全局方法：
==
使用封装的几个全局方法可以节省大量重复代码。

* __M 调用方法即可返回一个Model对象，此对象是一个sequelize的model对象，可以直接操作数据库。省去了写初始化配置的代码。
* __F 调用方法即可返回一个function对象，从functions文件夹里寻找。
* __FC 调用此方法，可以给某个function生成一些常用的操作方法：getById，getAll，add，update，count，delete
* __R 未实现，调用方法直接生成常用route，大量节省普通crud的代码量

特点：
==
* 不需要写routes配置，routes是按照controllers中的文件夹和文件结构自动生成的，这样一是不需手写配置，二是方便逻辑分离和维护。
* 无需关心数据库，所有数据的东西都用sequelize来操作。
* 一些全局方法，自动完成冗余代码，减少重复劳动。

其他：
==
* libs 通用的库
* uploads 上传临时文件
* assets 静态文件，使用less直接编译
* run.js 启动
* config.coffee 配置信息
