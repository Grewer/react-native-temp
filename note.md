
## react-native-navigation	

为纯 RN 编写的应用而生，渲染效果更好	强依赖 Native 端框架实现各种效果，顶部导航栏定制性不高


必须在 JS 端注册所有业务 Screen Component, 顶部导航栏定制性不够高。


优点: 

- 使用原生编写
- 性能较好, 原生的特性能够利用, 比如原生 modal
- 配置方式不那么中心化


缺点:

- 导航栏只能传图片, 不能用 jsx
- 底部图片同上
- registerScreens 太过聚集
- 缺少实例
