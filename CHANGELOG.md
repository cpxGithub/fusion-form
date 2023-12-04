## [1.3.1](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.3.0...v1.3.1) (2023-08-28)


### Bug Fixes

* value、defaultvalue ts类型修改为any ([1d59e2e](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/1d59e2ebf032b556291945d182c0e2c022f857ce))



# [1.3.0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.2.1...v1.3.0) (2023-07-28)


### Bug Fixes

* FormItems组件ts修改 ([661592e](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/661592ed3046622b420234aa3fd3783eaafc3a16))
* FormItems组件typescript不生效 ([cbeb8ec](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/cbeb8ec68ae6c65e929d81df6f1d64282f68a5b0))
* 预览态下，展示值设置换行 ([5f74391](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/5f74391de9768eb483ed117efb62dc3c2ca30c18))


### Features

* 修改formItem children不等于undefined时才渲染自定义内容 ([4f998f0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/4f998f05e27c3776fe17162573a34df4050402d6))
* 修改FormItems为class组件 ([c287036](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/c287036a213592ed8f0c3ed1e77f16380ed44c25))
* 动态表单添加最小、最大数量限制 ([4e6b89d](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/4e6b89d17fd14a6816d98e0f23e42506953eedb1))
* 添加date、dateRange选择最小、最大值快捷属性 ([9d1a2b0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/9d1a2b095f149b179ad5bdb5f97f0694bcc17222))
* 添加select提供快捷showSearch属性、input 提供快捷trim和clear属性支持 ([b718b14](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/b718b14730c90ab0fcc6f74c0c23fd78c2f16d98))
* 添加singleLine属性 ([e3526be](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/e3526be0e5b1ae215170a5a780c43595730d0f24))
* 组件拆分 ([e55ac36](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/e55ac364ee7a0e92b978ee78bd5a5e0b6e3f8c1f))
* 表单项中多个表单抽成组件 ([4d4d7b0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/4d4d7b09dd29de7d300b2563bc83435bf8c3b979))



## [1.2.1](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.2.0...v1.2.1) (2023-06-28)


### Bug Fixes

* colon属性设置不生效，原因Fusion只能第一级 有效 ([b36f517](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/b36f51741efe25e0c90cb9744dc77e30d118ff8a))
* Major问题 ([6759402](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/6759402d6c3ffe7322ca39596a4b8f41d89d37ad))



# [1.2.0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.1.2...v1.2.0) (2023-06-12)


### Bug Fixes

* checkbox单词编写错误 ([3439b26](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/3439b263e27a7244448a43f86a0f05807442e76a))
* checkbox拼写错误 ([ee438ac](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/ee438ac9d266b8cb644ef248936c13d1176e4f90))
* 使用value属性在弹窗下不生效问题 ([1602240](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/16022402310487e10601de57b1aae51101bc49d7))


### Features

* demo添加 ([063aa68](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/063aa681770f257472cb55f3660690a7b118a1ec))
* ts修改 ([b79fa07](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/b79fa0766048afbed22298e7881be4dbae648e95))
* useDeepCompareEffect hook修改 ([3bf508d](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/3bf508da135e09fec9e778c26c0e4eb5a2e456b4))
* 修改onChange value ts为any ([b052d73](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/b052d737133b6190894e95e1be39550988385b8e))
* 动态表单修改 ([dd37751](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/dd37751bcdb542ec555865a405cfaab9a3ca652f))
* 动态表单实现设置默认值 ([6d7b306](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/6d7b30667617943f5344805a2228ee10d4feca6f))
* 动态表单设置默认值，form属性透传 ([73cd814](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/73cd81493bb27cf2a2329edc8bb6fc788cad1ed4))
* 将一个表单项中多个表单项封装为组件 ([86c7228](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/86c7228ae5abe5544cc8b45f8d47176ea0b67e78))
* 添加useDeepCompareEffect hook ([2d55b85](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/2d55b85b44c75054f04ada92180381d8b162b41c))
* 添加动态表单 ([8bb2425](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/8bb2425f59e428f4a5b657159c1bd39954288c3b))
* 添加表单内置Feild ([277d3b6](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/277d3b62fdaa1c8983c12a7131de3a2a308d2e22))
* 预览态下去掉新增、删除按钮 ([cf05bbe](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/cf05bbe288eac75fee9e27b0725f47bdde21db3d))



## [1.1.2](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.1.1...v1.1.2) (2023-05-25)


### Bug Fixes

* 表单项中多个输入元素，marginBottom间距过大 ([6eca82b](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/6eca82b8d22d5a689b3b526ab93f20984ac77d7f))



## [1.1.1](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.1.0...v1.1.1) (2023-05-24)


### Features

* ts ([fd8b0cb](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/fd8b0cb82a6771326e15052ae6407fd7917f71c8))



# [1.1.0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.0.6...v1.1.0) (2023-05-24)


### Bug Fixes

* FormItem name属性设置 ([43c62a3](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/43c62a3cac9157d2bf5fc507c5ff3a8786758df6))


### Features

* labelCol设置默认值 ([9c53501](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/9c535013a92c07ddbc4a7d9d866df4aa8eae18b6))
* ts修改 ([af11ffc](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/af11ffc1e6a0d826c8c5eea902c9e4dc60559936))
* 添加classname ([cca16c1](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/cca16c155b32a9ddd0b5a416f07b4bdfa080db2f))
* 添加hidden功能 ([d76c634](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/d76c634bcfa1bdafeae7745a0a19e4da3fea9254))
* 添加label设置 ([c698352](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/c6983524096c6d7e3e9a0e251267272c99405ae9))
* 添加表单项支持多个输入 ([b2eff0b](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/b2eff0bfcc3dfda4fa519957ae3ab8f0c4108e54))



## [1.0.6](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.0.5...v1.0.6) (2023-05-10)


### Features

* 将表单项列表实现封装成组件 ([b11faf5](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/b11faf505433f135ce7baf7ca3e4488558f92480))
* 添加label顶部支持 ([0c0ae8a](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/0c0ae8ade992d3d01b59b4af4d16dda6ec1a31d8))



## [1.0.5](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.0.4...v1.0.5) (2023-05-04)


### Features

* ts抽离 ([67a10d0](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/67a10d0debc0953759adf3974fdc661435914d54))
* 删除注释 ([ddc1a1a](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/ddc1a1a36dec730fd9c9b6d9172f8d1cf1f90159))
* 导出ts抽取到一个文件中 ([eb69c9f](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/eb69c9fbf5fa2cd2c83052e49cb8ef94944b1c61))



## [1.0.4](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.0.3...v1.0.4) (2023-04-27)


### Features

* 添加className功能 ([ddcb20c](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/ddcb20ca5749db9fb0dd541a3d94ebc30b904495))



## [1.0.3](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/v1.0.2...v1.0.3) (2023-04-20)


### Bug Fixes

* 修改文档错误信息 ([a0ded33](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/a0ded333054bffc23c9f62c54c9e3f6fab9b7009))


### Features

* 修改homepage ([c15fdf3](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/c15fdf37c1bf24495fd7f093a249a43f6081b171))
* 修改ts导出、修改组件map ([85124f3](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/85124f3821b3be0612b1684780f78d2829317741))
* 修改默认主题使用数字化门户主题 ([27dd3ba](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/27dd3ba2637992b77d2a9a3d37934f9d85fa3912))
* 取消默认主题 ([bda04c9](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/bda04c92e3e877693c5cdd5ef9b9766f3a10176b))
* 同步物料到站点 ([4e58868](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/4e588680f18b3e655bdf780ebeae70ba42e9779b))
* 组件ts导出 ([3a61932](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/3a61932c18491cd9f6698b8a837c4bbf61c2f27e))



## [1.0.2](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/compare/5ffa73c3438ada8f911a83864bb8b7afe18853ea...v1.0.2) (2023-04-20)


### Features

* 修改@types/lodash-es位置 ([13b4898](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/13b4898d7416fe20b28da3aed76f5445159533f4))
* 实现defaultValue功能、封装FormItem支持不同类型数据输入 ([ea527ab](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/ea527abd4d1ae8e42c00cd4dcf0b4dbecf905eeb))
* 实现Input、Select等组件支持其他属性 ([7451690](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/7451690818fe5d202d1524e84fa34c7aef88cc89))
* 实现select多选、添加password类型支持 ([6d45c82](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/6d45c8222be94ef48c0694a561f724523bbf06fa))
* 实现Switch设置默认值、实现表单项children、设置日期输出格式 ([6a7d25c](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/6a7d25c26a32485d4791212f476330c6f091d2eb))
* 实现提示信息功能 ([2c66a35](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/2c66a3560780f3cff9f2c7322b14bb90a6e22f8a))
* 实现标单项后支持自定义内容 ([2602c66](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/2602c6675a7eafe1d1dc6b20ecc0205869c8c883))
* 实现预览、禁用功能 ([1a7ffe5](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/1a7ffe5cb77010f211bb9dda74cf489ac215702a))
* 封装FormItem组件 ([5ffa73c](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/5ffa73c3438ada8f911a83864bb8b7afe18853ea))
* 提交Input支持innerBefore、innerAfter功能 ([5e9ebff](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/5e9ebff81bf0e6064c6bfa370496480ac2d3f01a))
* 提交表格封装组件 ([a770942](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/a7709420bc497843b5d7fd2a769434de0c9b0bd1))
* 添加placeholder功能 ([e06bfd5](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/e06bfd528b3acce5ea4a89f4b3d9782f0f3f2a7a))
* 添加响应式布局 ([54dfbb8](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/54dfbb86f946b8461eba7f0e60bd72e3595ea5c6))
* 设置select默认开启hasClear ([7cf5eea](https://gitlab.alibaba-inc.com/banma-f2e/fusion-form/commit/7cf5eeaecc0d71393344cd3857b3637f9fdcd49d))



