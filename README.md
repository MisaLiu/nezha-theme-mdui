# nezha-theme-mdui

自行制作的另一个哪吒面板 MDUI 主题。

## Preview

![服务器列表截图](/screenshot/server.png "服务器列表截图")
![服务列表截图](/screenshot/service.png "服务列表截图")

## Usage

1. 下载仓库到本地
2. 复制本仓库的 `theme-custom` 和 `static-custom` 文件夹，替换你面板所在服务器的 `/opt/nezha/dashboard/` 文件夹内的同名文件夹
3. 重启面板
4. 登陆面板后台，选择主题为 `Custom(local)`
5. 刷新前台，应该就能看到效果了

### 额外注意

由于哪吒面板 [v0.15.17](https://github.com/naiba/nezha/releases/v0.15.17) 版更新中修改了第三方主题的静态文件挂载方式，而本主题高度依赖本地静态文件，故会出现安装后不加载 css 样式/自定义 js 脚本的问题。解决方法如下：

* 如果你是从之前的版本升级上来的：
    1. 停止运行面板，然后删除 `/opt/nezha/dashboard/theme-custom` 文件夹
    2. 下载本主题最新的 release，然后上传至 `/opt/nezha/dashboard` 并解压
    3. 打开 `/opt/nezha/dashboard/docker-compose.yaml` 文件，更新其中挂载目录的部分：   
        旧的挂载配置内容：
        ```yaml
        #...
        volumes:
          - ./data:/dashboard/data
          - ./theme-custom/template:/dashboard/resource/template/theme-custom:ro
          - ./theme-custom/static:/dashboard/resource/static/theme-custom:ro
          - ./dashboard-custom/template:/dashboard/resource/template/dashboard-custom:ro
          - ./dashboard-custom/static:/dashboard/resource/static/dashboard-custom:ro
        #...
        ```
        将此段更新为新版的内容：
        ```yaml
        #...
        volumes:
          - ./data:/dashboard/data
          - ./static-custom/static:/dashboard/resource/static/custom:ro
          - ./theme-custom/template:/dashboard/resource/template/theme-custom:ro
          - ./dashboard-custom/template:/dashboard/resource/template/dashboard-custom:ro
        #...
        ```
    3. 启动面板，登陆面板后台，选择前台主题为 `Custom(local)`，此时应该恢复正常了
* 如果你是全新安装的 v0.15.17 及其之后的版本：
    * 请停止面板后删除旧版本的主题文件（如果有）然后直接安装本主题 v1.0.3 及其更新的版本即可

## Thanks

* [MDUI](https://mdui.org)

## License
```
The MIT License (MIT)
Copyright © 2023 HIMlaoS_Misa<misaliu@misaliu.top>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```