const earth = require('../assets/earth.png')
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

----

# 场景 THREE.Scene

> 场景允许你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。

<pre>

世界坐标系  采用右手坐标系

相机 — 决定哪些东西要渲染到屏幕上

光源 — 对材质如何显示，及阴影生成产生影响

物体 — Mesh对象，在相机视图里主要的渲染对象，如方块、球体等
变量
scene.children.length; //场景中物体的个数
 
函数
scene.add(obj);	//向场景中添加物体
scene.remove(obj); //删除场景中的物体
scene.children();	//获取场景中的所有子对象
scene.getChildByName(name);	//通过名称获取场景中的物体对象


</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

----

# 相机 Camera 
> 在Threejs中相机的表示是THREE.Camera，它是相机的抽象基类，其子类有两种相机，分别是正投影相机THREE.OrthographicCamera和透视投影相机THREE.PerspectiveCamera。类图如下所示：
<pre>
<div><img src="http://www.hewebgl.com/attached/image/20130530/20130530145028_752.png" alt=""></div>
<div>正投影相机有时候也叫正交投影摄像机，下图显示了正交摄像机投影和透视投影之间的差别。</div>
<div><img src="http://www.hewebgl.com/attached/image/20130530/20130530145454_509.png" alt=""> </div>
<p>区别：正投影和透视投影的区别是：透视投影有一个基本点，就是远处的物体比近处的物体小。 </p>
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

----

# 正投影相机 OrthographicCamera 
> 正投影的构造函数：OrthographicCamera( left, right, top, bottom, near, far )：结合下面一个图，我们来看看，各个参数的意思。
<pre>
<div><img style="height: 150px" src="http://www.hewebgl.com//attached/image/20130530/20130530145859_920.jpg" alt=""></div>
1、 left参数
left：左平面距离相机中心点的垂直距离。从图中可以看出，左平面是屏幕里面的那个平面。
2、 right参数
right：右平面距离相机中心点的垂直距离。从图中可以看出，右平面是屏幕稍微外面一点的那个平面。
3、 top参数
top：顶平面距离相机中心点的垂直距离。上图中的顶平面，是长方体头朝天的平面。
4、 bottom参数
bottom：底平面距离相机中心点的垂直距离。底平面是头朝地的平面。
5、near参数
near：近平面距离相机中心点的垂直距离。近平面是左边竖着的那个平面。
6、far参数
far：远平面距离相机中心点的垂直距离。远平面是右边竖着的那个平面。

有了这些参数和相机中心点，我们这里将相机的中心点又定义为相机的位置。通过这些参数，
我们就能够在三维空间中唯一的确定上图的一个长方体。这个长方体也叫做视景体。
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

----

# 透视相机 PerspectiveCamera 
> 透视相机的构造函数：PerspectiveCamera( fov, aspect, near, far )：结合下面一个图，我们来看看，各个参数的意思。
<pre>
<div><img style="height: 150px" src="http://www.hewebgl.com/attached/image/20130530/20130530151418_279.jpg" alt=""></div>
1、视角fov：这个最难理解,我的理解是,眼睛睁开的角度,即,视角的大小,如果设置为0,相当你闭上眼睛了,所以什么也看不到,如果为180,
那么可以认为你的视界很广阔,但是在180度的时候，往往物体很小，因为他在你的整个可视区域中的比例变小了。

2、近平面near：这个呢，表示你近处的裁面的距离。补充一下，也可以认为是眼睛距离近处的距离，假设为10米远，
请不要设置为负值，Three.js就傻了,不知道怎么算了,

3、远平面far：这个呢，表示你远处的裁面,

4、纵横比aspect：实际窗口的纵横比，即宽度除以高度。这个值越大，说明你宽度越大，那么你可能看的是宽银幕电影了，如果这个值小于1，
那么可能你看到的是如下的图中的LED屏幕了。


透视投影是更符合我们视觉的投影，当你凝视一个女人时，就是因为远近高低各不同，女人才显得美丽，
叫你看一个正投影的女人，估计连胸部都分不清，那么也没什么看头。

正因为，透视相机这么有魅力，所以在各种应用中运用非常广泛。
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

----
# 世界有了光，就不在黑暗-光源
<pre> 

#### 1、 光源基类
在Threejs中，光源用Light表示，它是所有光源的基类。它的构造函数是：

THREE.Light ( hex )

它有一个参数hex，接受一个16进制的颜色值。例如要定义一种红色的光源，我们可以这样来定义：

Var redLight = new THREE.Light(0xFF0000);

#### 2、 由基类派生出来的其他种类光源
THREE.Light只是其他所有光源的基类，要让光源除了具有颜色的特性之外，我们需要其他光源。看看，下面的类图，是目前光源的继承结构。
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->
------

# 世界有了光，就不在黑暗-光源

<pre > 
    <img src='http://www.hewebgl.com/attached/image/20130515/20130515163339_12.jpg' />
</pre>

------

# 世界有了光，就不在黑暗-环境光 AmbientLight

<pre > 
环境光是经过多次反射而来的光称为环境光，无法确定其最初的方向。环境光是一种无处不在的光。环境光源放出的光线被认为来自任何方向。
因此，当你仅为场景指定环境光时，所有的物体无论法向量如何，都将表现为同样的明暗程度。 （这是因为，反射光可以从各个方向进入您的眼睛）

环境光用THREE.AmbientLight来表示，它的构造函数如下所示：

THREE.AmbientLight( hex )

它仍然接受一个16进制的颜色值，作为光源的颜色。环境光将照射场景中的所有物体，让物体显示出某种颜色。环境光的使用例子如下所示：

var light = new THREE.AmbientLight( 0xff0000 );

scene.add( light );
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------

# 世界有了光，就不在黑暗-区域光 AreaLight

<pre > 
平面光光源从一个矩形平面上均匀地发射光线。这种光源可以用来模拟像明亮的窗户或者条状灯光光源。
构造函数：
RectAreaLight( color : Integer, intensity : Float, width : Float, height : Float )
color - (可选参数) 十六进制数字表示的光照颜色。缺省值为 0xffffff (白色)
intensity - (可选参数) 光源强度／亮度 。缺省值为 1。
width - (可选参数) 光源宽度。缺省值为 10。
height - (可选参数) 光源高度。缺省值为 10。

代码示例：

var width = 10;
var height = 10;
var intensity = 1;
var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
rectLight.position.set( 5, 5, 0 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight )

rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
scene.add( rectLightHelper );

</pre>

<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------

# 世界有了光，就不在黑暗-点光源 PointLight

<pre > 
点光源：由这种光源放出的光线来自同一点，且方向辐射自四面八方。例如蜡烛放出的光，萤火虫放出的光。

点光源用PointLight来表示，它的构造函数如下所示：

PointLight( color, intensity, distance )

这个类的参数稍微复杂一些，我们花点时间来解释一下：

Color：光的颜色

Intensity：光的强度，默认是1.0,就是说是100%强度的灯光，

distance：光的距离，从光源所在的位置，经过distance这段距离之后，光的强度将从Intensity衰减为0。 
默认情况下，这个值为0.0，表示光源强度不衰减。
</pre>

<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------

# 世界有了光，就不在黑暗-方向光 DirectionLight

<pre > 
平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果; 
太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。
方向光的构造函数是：
DirectionalLight(color, intensity)

color：聚光灯发出的颜色，如0xFFFFFF

intensity：光源的强度，默认是1.0，如果为0.5，则强度是一半，意思是颜色会淡一些。

Three.js 的平行光常见的困惑是设置旋转没有效果。这是因为 three.js 的平行光类似与其他引擎的"目标平行光"。

这意味着它的方向是从一个平行光的位置 position 到 target的位置。 (而不是一个只有旋转分量的'自由平行光')。

</pre>

<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------

# 世界有了光，就不在黑暗-聚光灯 SpotLight

<pre > 
聚光灯的构造函数是：

THREE.SpotLight( hex, intensity, distance, angle, exponent )

函数的参数如下所示：

Hex：聚光灯发出的颜色，如0xFFFFFF

Intensity：光源的强度，默认是1.0，如果为0.5，则强度是一半，意思是颜色会淡一些。

Distance：光线的强度，从最大值衰减到0，需要的距离。 默认为0，表示光不衰减，如果非0，则表示从光源的位置到Distance的距离，光都在线性衰减。到离光源距离Distance时，光源强度为0.

Angle：聚光灯着色的角度，用弧度作为单位，这个角度是和光源的方向形成的角度。

exponent：光源模型中，衰减的一个参数，越大衰减约快。
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------


------

# 网格对象 MESH

<pre > 
创建一个网格需要一个几何体，以及一个或多个材质。当网格创建好之后，我们就可以将它添加到场景中并进行渲染。
网格对象提供了几个属性和方法用于改变它在场景中的位置和显示效果。 如下：

<img src='https://img.jbzj.com/file_images/article/201709/2017927102810198.jpg?201782710296' />

### 构造器
> Mesh( geometry : Geometry, material : Material )
### 示例代码
var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------

# 材质 Material

<pre> 

材质是啥子（四川话），材质就是物体的质地。我们可以用撤分文字的方法来理解。材质就是材料和质感的完美结合。
如果你还不理解，那么看看下面我引用的这段话：
在渲染程序中，它是表面各可视属性的结合，这些可视属性是指表面的色彩、纹理、光滑度、透明度、反射率、折射率、发光度等。
正是有了这些属性，才能让我们识别三维中的模型是什么做成的，也正是有了这些属性，我们计算机三维的虚拟世界才会和真实世界一样缤纷多彩。

这就是材质的真相吗？答案是否定的。不要奇怪，我们必须仔细分析产生不同材质的原因，才能让我们更好的把握质感。那么，材质的真相到底是什么呢？
仍然是光，离开光材质是无法体现的。举例来说，借助夜晚微弱的天空光，
我们往往很难分辨物体的材质，因为他们很多都表现出黑色，我们难以区分是铝合金，还是塑料的。
而在正常的照明条件下，则很容易分辨。另外，在彩色光源的照射下，我们也很难分辨物体表面的颜色，在白色光源的照射下则很容易。这种情况表明了物体的材质与光的微妙关系。
最常见的材质之一就是Lambert材质，这是在灰暗的或不光滑的表面产生均匀散射而形成的材质类型。比如一张纸就是Lambert表面。 
首先它粗糙不均匀，不会产生镜面效果。我们在阅读书籍的时候，没有发现书上一处亮，一处不亮吧，它非常均匀，这就是兰伯特材质。

有的朋友觉得纸不粗糙啊，你怎么说它粗糙吗？人的肉眼是不好分辨出来，它粗不粗糙的。

Lambert材质表面会在所有方向上均匀地散射灯光，这就会使颜色看上去比较均匀。想想一张纸，无论什么颜色，是不是纸的各个部分颜色都比较均匀呢。
<img src="http://www.hewebgl.com/attached/image/20130515/20130515170358_794.jpg"/>
Lambert材质会受环境光的影响，呈现环境光的颜色，与材质本身颜色关系不大。



</pre>
<!-- style: background: #4fc08d; color: white; text-algin: left; -->


------
# 几何体 Geometry

<pre>
<h3> 基类 BufferGeometry </h4>
构造器
BoxBufferGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
width — X轴上面的宽度，默认值为1。
height — Y轴上面的高度，默认值为1。
depth — Z轴上面的深度，默认值为1。
widthSegments — （可选）宽度的分段数，默认值是1。
heightSegments — （可选）宽度的分段数，默认值是1。
depthSegments — （可选）宽度的分段数，默认值是1。

常见
文本几何体（TextGeometry）
球形几何体 (SphereGeometry)
立方几何体（BoxGeometry）
平面几何体（PlaneGeometry）
圆环几何体（RingGeometry）
网格几何体（WireframeGeometry）
</pre>



<!-- style: background: #4fc08d; color: white; text-algin: left; -->

------

# 谢谢观看
### 讲述人-Hank
`
