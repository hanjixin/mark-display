const earth = require('../assets/earth.png');
export default `
# 开启Threejs之旅
### 带你打开3D世界的大门
<!-- style: background: #4fc08d; color: white; -->


---

# 1.WebGL简介

<img src="${earth}" style="width: 30%;">

<div style="font-size: 20px; margin-top: 30px; text-algin: left;" >
WebGL（全写Web Graphics Library）是一种3D绘图协议，这种绘图技术标准允许把JavaScript和OpenGL ES 2.0结合在一起，通过增加OpenGL ES 2.0的一个JavaScript绑定，WebGL可以为HTML5 Canvas提供硬件3D加速渲染，这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示3D场景和模型了，还能创建复杂的导航和数据视觉化。显然，WebGL技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂3D结构的网站页面，甚至可以用来设计3D网页游戏等等。

</div>


<!-- style: background: #4fc08d; color: white; -->

----
# 2.认识Three.js

* 地址 https://github.com/mrdoob/three.js
* 剖析源目录结构
* 写第一个例子

<!-- style: background: #4fc08d; color: white; text-algin: left; -->

</div>

----

# 3.Three.js 三大组建

* 场景 THREE.Scene
* 相机 camera PerspectiveCamera
* 渲染器 renderer
<pre>
var scene = new THREE.Scene();  // 场景
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);// 透视相机
var renderer = new THREE.WebGLRenderer();   // 渲染器
renderer.setSize(window.innerWidth, window.innerHeight);    // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
document.body.appendChild(renderer.domElement);
</pre>

<!-- style: background: #4fc08d; color: white; text-algin: left; -->

</div>



`;
