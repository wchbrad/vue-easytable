Vx.x.x(TPL)

-   Breaking Changes
-   Feature
-   Bug Fixes
-   Performance Improvements
-   Style
-   Dependencies Changes

V2.9.0

### Feature

-   添加设置行高亮的`setHighlightRow`实例方法。[参考示例]()

V2.8.3

### Bug Fixes

-   修复表格显示隐藏切换，右列固定效果消失的问题 #404

V2.8.2

### Bug Fixes

-   修复行 key 为 0 时，行高亮失效的问题

V2.8.1

### Bug Fixes

-   修复当数据为空时，虚拟滚动功能滚动条高度没有还原的问题 #403

V2.8.0

### Feature

-   编译支持 IE11 浏览器

V2.7.1

### Bug Fixes

-   修复设置了禁止选中，点击全选仍然会选中的问题 #397

V2.7.0

### Breaking Changes

-   调整了虚拟滚动功能默认最小行高度。由 “42px” 改为了 “40px”，你可以通过`minRowHeight`属性控制

### Feature

-   添加 scrollToRowKey 实例方法

### Bug Fixes

-   修复虚拟滚动功能最小高度 `minRowHeight`值与表格行高一样，滚动条高度没撑开的问题
-   修复虚拟滚动功能，浏览器窗口大小改变表格白屏的问题
-   修复长时间键盘操作（keycode 38 = Up）导致选中框消失的的问题

### Performance Improvements

-   优化虚拟滚动功能渲染速度。使用非响应式变量替代
-   优化虚拟滚动功能缓冲策略。将缓冲倍数改为缓冲行数
