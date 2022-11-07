/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/11/MySQL安装/index.html","8d1b34fef8f862d996729dbe48e7a4fd"],["/2022/10/11/MySQL操作/index.html","dfc68bbaa3b6e96ab01f25ed3f7a235a"],["/2022/10/19/HTML5/index.html","0d2ca3903d4d7a8b4f23601d670930c9"],["/2022/10/22/CSS学习（一）/index.html","6afaf4c2abbe7370bc226316c7653ac4"],["/2022/10/26/二分查找/index.html","9748bc32f75555b0040c4093110d6f2b"],["/2022/10/26/双指针/index.html","383d2b379ed3c09fde483d3f680b6c93"],["/2022/10/29/CSS学习（二）/index.html","9348623b875bb39122442de736449191"],["/2022/10/29/哈希表/index.html","00388a9d8e495ec199eb897d9120fda3"],["/2022/10/30/CSS学习（三）/index.html","e3a445f6c08bcf06785aaff8cda6133a"],["/2022/11/06/CSS学习（四）/index.html","5007ccedc0fd0544e8688ca93ea50a54"],["/2022/11/07/A-算法/index.html","ffcc53fff5de1bfe6c64669efbddbf42"],["/2022/11/07/遍历/index.html","1c151bfc24ecf2fd5dad9555160aa153"],["/about/index.html","6b88160ea78858f47e03ccac0e1063c4"],["/archives/2022/10/index.html","08cdce795ad9beebb191b6e05c0d1329"],["/archives/2022/11/index.html","5b0a0f8eacfa1a19e5138d4bfb920768"],["/archives/2022/index.html","468dd15449fa6f2ca6575d28f211ac41"],["/archives/2022/page/2/index.html","89bbab6f541d51468762daf9d0a01147"],["/archives/index.html","f56500bae9dfcd83ce7eabee6782929a"],["/archives/page/2/index.html","57cec18553edf2c4f8765e61ffc31e89"],["/categories/index.html","23f34f0c8b2b8d2628a199fd48519673"],["/categories/web前端/index.html","f52d90644eb303c7055a52283e798cf9"],["/categories/数据库/index.html","078ea15045ec0024ac87aa6fd93e96c6"],["/categories/数据结构/index.html","98965eaff7cf01f90a99c7a45f73fa70"],["/categories/算法/index.html","29985f9804b2968a11c01d523033ba1f"],["/css/FiraCode.css","5721e9035217ed14ca819e025db6bc74"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/flesx.css","c883b907e029239a4adbdcfb33d62990"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/loading.css","2103ed59c0acf36d30231c3403cafb4a"],["/css/matery.css","8899bad4379b60a3bcb6400fd021b378"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","8c0ce9f6e20f041b99135f1a3145f6aa"],["/css/prism-line-numbers.css","0810c0e4aa6528786cf1253de32ea115"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/images/04_相对定位案例.png","350d435d021e5f13d11d1e3af8a11f5d"],["/images/05_绝对定位_父级无定位.png","115b92801a00e71844e4bf9f64f51843"],["/images/06_绝对定位_父级有定位.png","d2933e2a9ba973f31e21b0fd84b201b8"],["/images/07_子绝父相截图.png","a659f0059c79ad3e161b4069f390c938"],["/images/1571299959992.png","89bf3fe602eb46906cb6a78233960f76"],["/images/1571300150618.png","8ec7a289cb6232735e8c4d03cfd10012"],["/images/1571300529539.png","e06dac111d8ba95b560704925e2308bd"],["/images/1571301270696.png","31bf9d0a9abb6d89b60f9eb453a6d161"],["/images/1571301357818.png","2ea234fe3674a68485e6a1887ee7cffc"],["/images/1571302032310.png","8eca1b7755b819d5ccf725341e4c87b2"],["/images/1571302286467.png","269006017164a326b635943b55c0ea5a"],["/images/1571303715362.png","b8b2c0d385e0e63465e225ea17137d24"],["/images/27子绝父相.png","0a9c253876a12cca4400c9f65d5c32bb"],["/images/A星.png","c028fb25f0360d8cb914952f98202d62"],["/images/MySQLdownload.png","db6c0387d9a82be60b1f77a212f72017"],["/images/MySQL的路径.png","f2f83bb82bbd8b0de86126d12d930545"],["/images/input表单元素.png","5a6f361c39cff9372e7e21964fc5c5ee"],["/images/sample.gif","ddf4f9777e1782890f72f265f729000d"],["/images/select下拉列表元素.png","0caca94ad253aab7a4a81abc994e0570"],["/images/shortest-01.png","07d16070f9e69c77cdd60ec6f981559c"],["/images/textarea表单文本域元素.png","f2e77b57de230dfb0fd2752db96d625d"],["/images/哈希函数.png","1fdd725bf8053ff54af870da0a56dc4f"],["/images/哈希碰撞.png","46e943e421368122527721a6b477d5a9"],["/images/拉伸法.png","bdb9e84ed8635ed5237f764ddada3a0e"],["/images/新建MySQL环境变量.png","9cc24ce7c50c1a401644d220e5fafbe4"],["/images/无序列表.png","80c06739603280bf4d6dbc0b11744522"],["/images/有序列表.png","e320ee4c4820ddc9b21673556fda4340"],["/images/注册MySQL.png","4cbe376be67b49487f93c45cae786b56"],["/images/添加path.png","b4e3d6ffcfa4ea3cc3dd06b3e30e7ab1"],["/images/生成data.png","d0289c94768f58ce99c4200d10287c69"],["/images/盒子模型.png","d53e7006bb2d8341ed7fa21a37e9a560"],["/images/线性探测法.png","1a204338bb0b6bc67da48bd0a7991824"],["/images/表单域案例.png","30042dd5f3da7106fd730095c7bda6de"],["/images/配置MySQL环境变量.png","878a79d52deb5d55ed9c269abe84871a"],["/index.html","be12c7dbe98e898734c2c6ec590c4c14"],["/js/canvas_moving.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","8e457bb0f1cbfcd882aac4b41fa000c1"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","55f2d2a503aad4f9af5d3af66df912cf"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/buble.js","2e0024a9ce8eb997e7ed4a1b6e50053d"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","245f59c7a3ec2ba0cf0fe083bfef3938"],["/libs/others/popupText.js","c97c7674aa332424cd92cab87f7b9906"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","a433557d258cfdaee17c789a8c2f852c"],["/libs/others/snow.js","5a91ff407d3a50d4819d1f9a4a239b63"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","24361c381571dbf415de5d04f374f76d"],["/medias/banner/0.jpg","9e2e5ff9fb783c78c7bad47041787097"],["/medias/banner/1.jpg","d637331f15d889f30b5a8521c80fc98a"],["/medias/banner/2.jpg","064fb4f421d0620ddcb2b218dcc1bd0f"],["/medias/banner/3.jpg","445dcbe7944b2e3bd5d53b7bea04a1c8"],["/medias/banner/4.jpg","75a5278f36ab4f4a582d9a3456e6ccc6"],["/medias/banner/5.jpg","8319a1b033ffa1ae31b757d16390e69e"],["/medias/banner/6.jpg","c05af01523e2a870f2b3422a32db3f17"],["/medias/banner/7.jpg","32efa6109d97d92d0872c2a839d906d8"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/11.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/12.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/13.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/14.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/15.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/16.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/17.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/18.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/19.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/6.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/7.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/8.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/9.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/sw-register.js","37f6da77e6c1fc6dbede4493fdd19183"],["/tags/CSS/index.html","8272c4290d09cc6eb55d5129b0ca909c"],["/tags/HTML5/index.html","b79c2898281af89caaab08864f0831a5"],["/tags/MySQL/index.html","b0ede1b294048756ade0032bed0b86de"],["/tags/index.html","721e67c5aa6672713a734010b810497a"],["/tags/替换/index.html","d4efc8564e291aaaf9f00167e5d99508"],["/tags/查找/index.html","2f0109712561f10382720a20e3e1aa6d"],["/tags/移除/index.html","dbde6d8edf219fb95113fad353ddd9d1"],["/tags/翻转/index.html","e663a0ab8bcee09fd46eb09b1f652a34"]];
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
