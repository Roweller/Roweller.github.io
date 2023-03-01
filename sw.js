/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/11/MySQL安装/index.html","9b632c994737a7af71cf0809a236081f"],["/2022/10/11/MySQL操作/index.html","61ce285c237f6d1dd0622b088eeaa43a"],["/2022/10/19/HTML5/index.html","af9ff26c58393fa8d89bc7ad0b6a02f3"],["/2022/10/22/CSS（一）/index.html","420f6df10158c7b4e375609ca249881d"],["/2022/10/26/二分查找/index.html","11a4527eb7d152e37ccbaa5e9a2db26f"],["/2022/10/26/双指针/index.html","3c7eba592347e75758c9198f8dbce041"],["/2022/10/29/CSS（二）/index.html","3bbc0e001a44f3477b6733455fefc804"],["/2022/10/29/哈希表/index.html","1f84056262dfe715f6b608b739c35162"],["/2022/10/30/CSS（三）/index.html","9aaa9128a5047f54e0e416f18f50e73d"],["/2022/11/06/CSS（四）/index.html","8a726d49d1779bbd85287e15f416bf72"],["/2022/11/07/A星算法/index.html","ba745592cf654a479846818983543c80"],["/2022/11/07/CSS（五）/index.html","aa704301ce42450d8bafec5a976a811d"],["/2022/11/07/遍历/index.html","90fef94b0fc972799738e6af394b8e38"],["/2022/11/08/CSS（六）/index.html","b94679c3872ed442e7edf8fa21a99f94"],["/2022/11/11/JavaScript/index.html","f854b3432ed46b9ea1cd10b9660ee59a"],["/2022/11/23/移动端/index.html","37305c96eb4993454b31a89f73708ce2"],["/2022/12/10/jQuery/index.html","b8f3aa9a2398a135107535617e9eb3a7"],["/2022/12/10/本地储存/index.html","cb9b37712e13c78edf42506d365c5575"],["/2023/01/02/Ajax/index.html","c855c8e1557a307277b84f84054998e7"],["/2023/01/24/微信小程序/index.html","9fbb2f92eff285dcfe7ef76e82943f83"],["/404/index.html","873554798746023433f7377cd25e5f3a"],["/about/index.html","8db92d936f7ed59d6c86c44d24b8d992"],["/archives/2022/10/index.html","f5fb0eed3533e7e47b9654a1c69b63a0"],["/archives/2022/11/index.html","8baceb8adb9fc656cfd6322789e4684c"],["/archives/2022/12/index.html","90fedf917a151fc8a983a67e2180b8ed"],["/archives/2022/index.html","f1acba24ea0a912e95b8c16bd32a7432"],["/archives/2022/page/2/index.html","b3bf37a559069e57540e675016f81079"],["/archives/2023/01/index.html","e41d0763321dd8b6d403e785129f1bd5"],["/archives/2023/index.html","69050272688e4f087689b8cc5c55ca77"],["/archives/index.html","170955a5905bb74fa7d2af966d7513f4"],["/archives/page/2/index.html","6ba8b1f2bd3242fa840b16f653f9bc21"],["/categories/index.html","4ee23633f0280641b409dcaa8102b774"],["/categories/前端/index.html","c3e1282a2a496d23168aa2f322bda522"],["/categories/前端/page/2/index.html","af462e8588032e9ceb9ad997e0ec0632"],["/categories/前端/数据交互/index.html","e6640723c0355dd5a3635ec96b5f24ac"],["/categories/微信小程序/index.html","c1a70a8be581742bcdebd878f8a750c4"],["/categories/数据库/index.html","7457ff290c06c845e3d41b1b2d4c1f1f"],["/categories/数据结构/index.html","78e898d5191f964af18f0a71d00d9397"],["/categories/算法/index.html","46608618114520ab42541bbcac14e36f"],["/css/FiraCode.css","5721e9035217ed14ca819e025db6bc74"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/flesx.css","c883b907e029239a4adbdcfb33d62990"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/loading.css","2103ed59c0acf36d30231c3403cafb4a"],["/css/matery.css","2f8e6048d8f577e6d69a476f5eb77659"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","eadb975d0707f519f026f12c4d369945"],["/css/prism-line-numbers.css","0810c0e4aa6528786cf1253de32ea115"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","9ab3c5a22b1b1a65e51b2d191fda0f51"],["/images/04_相对定位案例.png","350d435d021e5f13d11d1e3af8a11f5d"],["/images/05_绝对定位_父级无定位.png","115b92801a00e71844e4bf9f64f51843"],["/images/06_绝对定位_父级有定位.png","d2933e2a9ba973f31e21b0fd84b201b8"],["/images/08_固定定位案例.png","9983f1ca89a8021261c9c415f82a98b2"],["/images/1571299959992.png","89bf3fe602eb46906cb6a78233960f76"],["/images/1571300150618.png","8ec7a289cb6232735e8c4d03cfd10012"],["/images/1571300529539.png","e06dac111d8ba95b560704925e2308bd"],["/images/1571301270696.png","31bf9d0a9abb6d89b60f9eb453a6d161"],["/images/1571301357818.png","2ea234fe3674a68485e6a1887ee7cffc"],["/images/1571302032310.png","8eca1b7755b819d5ccf725341e4c87b2"],["/images/1571302286467.png","269006017164a326b635943b55c0ea5a"],["/images/1571303715362.png","b8b2c0d385e0e63465e225ea17137d24"],["/images/1571519368229.png","36b812fdff3b169a11a0f65bb3345225"],["/images/1571519724473.png","b238e6c9a8bbee8c7cf65e3fc5e6516e"],["/images/1571520092646.png","db16b45bb73698e98b0826d640012e3a"],["/images/1571520411345.png","a97379da5e1ad314ff9ffec6e5b06c08"],["/images/1571520554317.png","0e3b440d0f3b2950e91ec69a603b3d1f"],["/images/1571520965966.png","ca1ed591c389dfad818901f5bb59eefa"],["/images/1571522040645.png","f2add909624b7f64906b4cb7e2812d4e"],["/images/1571522683897.png","4b2ab976dfb8e6810e873e4a10eb7de4"],["/images/1571522761996.png","4571fffbc64c1fa9a5790f146238ba7f"],["/images/27子绝父相.png","0a9c253876a12cca4400c9f65d5c32bb"],["/images/Ajax.png","abbf67275dcf7f1fca4195922d752366"],["/images/A星.png","c028fb25f0360d8cb914952f98202d62"],["/images/BOM的构成.png","6dee3000859dc5158d2c3685ede54785"],["/images/DOM事件流.png","10dc7fe2c0bb2e0bb2838f6b2ee93d49"],["/images/DOM树.png","1203365077f2f127b259797237ed06f6"],["/images/HTTP协议.png","1484d84c7ae77d0cd9f5abf5ba90ddd3"],["/images/HTTP消息响应.png","9e3ed0df8bb5746dbe1e4b3cc29923e5"],["/images/HTTP状态模型.png","d5df529033697d9b41721775b101bc82"],["/images/HTTP请求体.png","dd1605c514f2bb324be7da8188fc6f69"],["/images/HTTP请求头部.png","5c4058ad26534c7200625babde313d60"],["/images/HTTP请求消息.png","8939f5382e14511d364b766d6b1f0fc9"],["/images/HTT协议.png","f286bcec3ab6fc37a1c1c1b7c63cc4b0"],["/images/JS执行机制1.png","373f8e7eaa3ce69275d5ad17546cc7c7"],["/images/JS执行机制2.png","037bd8e58831ed225a898ff379b01b4c"],["/images/MySQLdownload.png","db6c0387d9a82be60b1f77a212f72017"],["/images/MySQL的路径.png","f2f83bb82bbd8b0de86126d12d930545"],["/images/Postgetmanget.png","9e7ebadfcee8fe7646293d8611b870c9"],["/images/Postgetmanpost.png","b8f57775b24696427a47b04d397382fe"],["/images/SEO优化.png","66510257b5a06b0e905fbadb7089a935"],["/images/Swiper.png","554f1f3d753b634dfa5680589458f5d1"],["/images/Swiper引入.png","8347f5b0c5c0940225a5364d1eee89a1"],["/images/URL.png","a3a3f6f53e737ea7b08833c07a19b761"],["/images/URL组成.png","2c4a193d5e355e21786b3fb13e699593"],["/images/XMLHttpRequest.png","d528bba90eeddcafc196d366501ef184"],["/images/animation.png","c61e6298f7a46ce148fe34479bebabd3"],["/images/app.json.png","aa71f7ea3c8d84f1d140f61bdcd8ce8b"],["/images/bootstrap使用.png","8499e4c5ff824f8d6dc7e357b96c8c59"],["/images/button按钮.png","9721a8a7e4cd240b2c21a548941c5621"],["/images/flexalign.png","bd9c5f28eee83ea632175f9fe6e85223"],["/images/flex布局.png","13e319e1a9eb875f9a7a35d3534fb01b"],["/images/form-enctype.png","ebfdd579d33c1ac044e9dd0da84d56c5"],["/images/form属性.png","b70ebe9eb56b08a6d423f3242b5885e2"],["/images/import样式.png","fc5f6e178e1e21f028e0a4f97ef50c83"],["/images/input表单元素.png","5a6f361c39cff9372e7e21964fc5c5ee"],["/images/jQuery.png","068d0e5fcd60634b0e123b65b21aac72"],["/images/jQuery效果.png","8ced54559847a26fdf03390cf1f293dd"],["/images/less.png","955e996e4add7f0a6158be1b550aa692"],["/images/nth-child与nth-of-type区别.png","e473efc252658402285d2c650e71f252"],["/images/offset.png","9ba8e860ae9ad71949869bddba3d566f"],["/images/perspective.png","af22a2f85b302a028eb9e26be44d0e4a"],["/images/requset跳过.png","f159701ddb9dbcc641699adfae4b540d"],["/images/rich-text.png","ac702508615bdae9e8194506d5680dd8"],["/images/sample.gif","ddf4f9777e1782890f72f265f729000d"],["/images/scroll-view组件.png","75c9be97bff4623342cd18c10d506626"],["/images/scroll.png","ee05410173277deaf60c1d69cf99e3af"],["/images/scrool.png","ee05410173277deaf60c1d69cf99e3af"],["/images/select下拉列表元素.png","0caca94ad253aab7a4a81abc994e0570"],["/images/shortest-01.png","07d16070f9e69c77cdd60ec6f981559c"],["/images/sitemap.json.png","ed4fff47d02639fa1bf9a0a98760080b"],["/images/swiper和swiper-item.png","8313f56db2ec5b5dde1c347d27e8e28e"],["/images/tabBar.png","a68d58768cf977629515acff3f0130bf"],["/images/tabBar组成.png","2c1e864d0eb2504a7af11b6918e5e9d4"],["/images/textarea表单文本域元素.png","f2e77b57de230dfb0fd2752db96d625d"],["/images/transfrom-style.png","b713804b933a695fd1de2e913e66713c"],["/images/view组件.png","8f938ef5da1703cff961690fd4913ef7"],["/images/window.png","e38fbad8c89018ff1c05fb41c4658c6b"],["/images/全局数据共享.png","9e079c1973773d13cd6583cf9ca70dd4"],["/images/分包.png","84a2567a28a594a97c528b9cc7c7a053"],["/images/分包前.png","33eec3f16b25307fd4e27d50b257aed9"],["/images/分包后.png","b35aa40ed1f545986dd579be52c068be"],["/images/列偏移.png","f83d8963424b03685718abbc29bea0a4"],["/images/列嵌套.png","7ac91aefe24e161479d3e470f84f83c3"],["/images/列排序.png","2205e5de569d633af79f852cb11c2a45"],["/images/单独移动界面.png","5a875db5443de6cf20d528635cb5f2ad"],["/images/哈希函数.png","1fdd725bf8053ff54af870da0a56dc4f"],["/images/哈希碰撞.png","46e943e421368122527721a6b477d5a9"],["/images/字体图标加载的原理.gif","c1a61e8a79029819de4415c8cbce38e4"],["/images/小程序组成部分.png","a274043251b3b407167c76f8bfe0f0e6"],["/images/属性选择器.png","8b8a8a7a3f6df88e3d94eca98d10fca2"],["/images/布局视口.png","7d296c68ffc320e1738c636ac7eec75c"],["/images/常见移动端屏幕尺寸.png","9e8585367e1365613ed06dc8b67ddc1f"],["/images/微信小程序与网页的区别.png","a99bdc6aea26d289044419d9e8e0f2d4"],["/images/成员管理.png","4fc75e6717eca1553bb33692e02d5a7b"],["/images/拉伸法.png","bdb9e84ed8635ed5237f764ddada3a0e"],["/images/接口文档-1.png","4f30fb850eddcd57857bf7a5506b15a4"],["/images/接口文档-2.png","b7db49a34fa58a25127efe16588de581"],["/images/接口文档-3.png","93e3b3e64160d4c43875ec0538fd5fc5"],["/images/插槽.png","3663b6aef0088fdefebd26e786dedb42"],["/images/新增input表单.png","fb627fa7c7d2b6201eb3a25f4e3f88ff"],["/images/新建MySQL环境变量.png","9cc24ce7c50c1a401644d220e5fafbe4"],["/images/新建小程序页面.png","c209a3ad79f8883ac9903966927d4929"],["/images/无序列表.png","80c06739603280bf4d6dbc0b11744522"],["/images/有序列表.png","e320ee4c4820ddc9b21673556fda4340"],["/images/服务器和客户端.png","c4c1924b9e2e68a1eafde1049f71ccab"],["/images/注册MySQL.png","4cbe376be67b49487f93c45cae786b56"],["/images/流式布局.png","4e67eaaea2883ae8ddf83a643d01523d"],["/images/添加path.png","b4e3d6ffcfa4ea3cc3dd06b3e30e7ab1"],["/images/渲染层和逻辑层.png","457f66243c165df754362b92e212db7f"],["/images/独立分包.png","da1acbbf5bea0be7306ea9a3c96cf4b5"],["/images/生命周期.png","f7138b89f120e86a41d1ad17681f848a"],["/images/生成data.png","d0289c94768f58ce99c4200d10287c69"],["/images/盒子模型.png","d53e7006bb2d8341ed7fa21a37e9a560"],["/images/移动端浏览器.png","e499e6076b6a2af6fad4fa61d706bc4a"],["/images/线性探测法.png","1a204338bb0b6bc67da48bd0a7991824"],["/images/组织结构.png","f7dcebd81ce081cd9ddb9cb4f57fde3d"],["/images/结构伪类选择器-01.png","7b233d838b9186bedd32a2fc043713bb"],["/images/表单域案例.png","30042dd5f3da7106fd730095c7bda6de"],["/images/视觉视口.png","2774fc2d641958f9e9c3ddc7a3faa46e"],["/images/语义化标签.png","d91a0e3f0ebd7a4d9f0e4e44668ea6db"],["/images/跨域.png","1a974c2d7c3016e61aa88286dea6a906"],["/images/通信模型.png","f07df7054a6bd716a78529cf7ca3b036"],["/images/配置MySQL环境变量.png","878a79d52deb5d55ed9c269abe84871a"],["/images/防抖.png","0847cdc9d25257566efc3e207fd15287"],["/images/项目基本组成结构.png","a7c0a36143ac7a4fdf39efb8be23feca"],["/index.html","a4c9d4bcc665a4caf456cfd42277ffd3"],["/js/canvas_moving.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","930d039edbf8e501b6e9adaed2c7bd13"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","55f2d2a503aad4f9af5d3af66df912cf"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/buble.js","2e0024a9ce8eb997e7ed4a1b6e50053d"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","245f59c7a3ec2ba0cf0fe083bfef3938"],["/libs/others/popupText.js","c97c7674aa332424cd92cab87f7b9906"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","a433557d258cfdaee17c789a8c2f852c"],["/libs/others/snow.js","5a91ff407d3a50d4819d1f9a4a239b63"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","70e2a660be51d0a5b2c40c1bcdf04676"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","24361c381571dbf415de5d04f374f76d"],["/medias/banner/0.jpg","9e2e5ff9fb783c78c7bad47041787097"],["/medias/banner/1.jpg","d637331f15d889f30b5a8521c80fc98a"],["/medias/banner/2.jpg","064fb4f421d0620ddcb2b218dcc1bd0f"],["/medias/banner/3.jpg","445dcbe7944b2e3bd5d53b7bea04a1c8"],["/medias/banner/4.jpg","75a5278f36ab4f4a582d9a3456e6ccc6"],["/medias/banner/5.jpg","8319a1b033ffa1ae31b757d16390e69e"],["/medias/banner/6.jpg","c05af01523e2a870f2b3422a32db3f17"],["/medias/banner/7.jpg","32efa6109d97d92d0872c2a839d906d8"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/11.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/12.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/13.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/14.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/15.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/16.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/17.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/18.jpg","d4dd90742a91997034af2d85179b75fc"],["/medias/featureimages/19.jpg","ac70dc57ab0f13319bba5a5ee2218b79"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","cce91abdcfcb06940c331dc9c43ec8dd"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/6.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/7.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/8.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/9.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/denglong.png","9295f4c963dfd98831801da997152452"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","1ffc561fd76560579fc3c973c3badb89"],["/medias/reward/wechat.png","141ed126caffe1c8c76c2365acac1046"],["/page/2/index.html","928fef8b244275fb90d8032eae4ac26a"],["/sw-register.js","84db4d488a6b06091b4c59f078b83e51"],["/tags/Ajax/index.html","602eeeba54bee0836feb154d89822146"],["/tags/CSS/index.html","dace009c394a676cd2421b647065f30d"],["/tags/ES6/index.html","8894a9fd4a5e06c71cdbb25d7993b352"],["/tags/HTML5/index.html","4ee5a8d4f493177d9d5a18fa0ca75c1f"],["/tags/JavaScript/index.html","287dc9523644db6661a239c272392951"],["/tags/MySQL/index.html","2333f8d08e9140f8a822367b776d1178"],["/tags/index.html","3329dffb5e773537f073bc4a2dbe6729"],["/tags/jQuery/index.html","968153b2721553358b346410d872d45a"],["/tags/储存/index.html","70d495b39cda55b87a15c5e489fe7656"],["/tags/分包/index.html","487a40f71653130dadd9b7aafc0dff55"],["/tags/异步编程/index.html","ca59b38d6caecf77108335b8f28a0afc"],["/tags/数据请求/index.html","3bc99ee958a3d5a2e53f230f8c3184a5"],["/tags/替换/index.html","57684492cc3c4eca40c1724d75306cc1"],["/tags/查找/index.html","70d75610766862c20350504dd38de73d"],["/tags/移动端/index.html","61001f38245a5b0756de365bc8d411a1"],["/tags/移除/index.html","f6cfcb67268d2863e13afa174a2189c2"],["/tags/组件/index.html","cfd4c14d376f99bd1d5f6ff6fc7a97ce"],["/tags/翻转/index.html","2e8a962ed2a99041bb97cf43fed6debd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
