# PWA
Progressive web app
*用户协议必须为 `https://`*
## Web app manifest
 允许用户的浏览器将站点添加到手机屏幕上
 
## Service Worker
> + 浏览器在后台独立运行的脚本
> + 拦截和处理网络请求 操作缓存
支持Push api  ,notification api 等
后台同步，
  
## Web App Manifest
- 唯一的图标和名称区分站点
- 控制从主屏幕启动时的内容，避免生硬的过渡-- 开机动画
- 隐藏浏览器相关的UI

### 实现manifest部署
```json
{
  name: '百度天气',
  short_name: '天气',
  display: 'standalone',
  start_url: '/?from=homescreen',
  icons:[],
  background_color: '#123456',
  theme_color: '#2f3ba2'
}
<link rel="manifest" href="/assets/manifest.json">
```
### 调试Web App Manifest
- 在Chrome的开发者工具中查看 Web App Manifest设置 - Chrome Application中查看
- 某些ROM下需要打开浏览器添加到桌面权限
- 在手机上设置代理查看本地站点- charles fiddler

参数解释：

  - display 
    + fullscreen
    + standalone 浏览器相关ui(导航栏 工具栏)将会被隐藏
    + minimal-ui 不同浏览器略有差异
    + browser 与浏览器展示一样
 - start_url
    + 可以添加参数用于来源统计
    + 如果为空默认使用用户打开的当前页面为首屏
 - icons
 设置启动画面中的图标
 
 ### 网站显示应用安装横幅的条件
 + 部署manifest.json 且正确配置属性
 + 注册Service Worker
 + 支持HTTPS访问
 + 用户在同一浏览器至少访问两次，间隔不少于5mins
     
    