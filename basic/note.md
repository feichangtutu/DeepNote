## 事件委托是什么？
## window.onload 和 domcontentloaded 谁先谁后？
> 当初始的 HTML 文档被完全加载和解析完成之后，[DOMContentLoaded](https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded) 
事件被触发，而无需等待样式表、图像和子框架的完成加载.

> 在文档装载完成后会触发  load 事件。此时，在文档中的所有对象都在DOM中，所有图片，脚本，链接以及子框都完成了装载。 

>so, *一般情况下，DOMContentLoaded事件要在window.onload之前执行，* 
当DOM树构建完成的时候就会执行 DOMContentLoaded事件，而window.onload是在页面载入完成的时候，才执行,

>这其中包括图片等元素。大多数时候我们只是想在 DOM树构建完成后，绑定事件到元素，我们并不需要图片元素，加上有时候加载外域图片的速度非常缓慢。

>JavaScript 可以阻塞 DOM 的生成，也就是说当浏览器在解析 HTML 文档时，如果遇到 <script>，
便会 *停下* 对 HTML 文档的解析，转而去处理脚本。如果脚本是内联的，浏览器会先去执行这段内联的脚本，如果是外链的，那么先会去加载脚本，然后执行。
在处理完脚本之后，浏览器便继续解析 HTML 文档.

> 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；如果文档中包含脚本，则脚本会阻塞文档的解析，
而脚本需要等 CSSOM 构建完成才能执行。在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。