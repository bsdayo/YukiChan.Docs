# Docker

暮雪酱可以使用 Docker 进行方便的容器化部署。

::: warning
本页面所有操作都默认是 **Linux** 环境，在 Windows 上暂时需要自行探索。（可能以后会添加相关说明？）
:::

[[toc]]

## 启动

Docker Compose 和手动启动选择其一即可。

### Docker Compose

暮雪酱提供了一个写好的 Docker Compose 配置文件，可以直接使用：

```shell
# 下载 docker-compose.yml 配置文件
curl -O https://ghproxy.com/https://raw.githubusercontent.com/bsdayo/YukiChanR/dev/docker-compose.yml

# 启动容器
docker compose up -d
```

默认情况下，三个容器都使用具名挂载，之后需要使用 `docker volume inspect` 来查看挂载的具体路径。如果想要将数据目录挂载到自定义路径，你可以通过编辑 `docker-compose.yml` 来自定义：

```yaml
# 示例配置文件，省去了大部分内容

services:
  yukichan-r:
    image: bsdayo/yukichan-r:latest
    volumes:
      - ykr:/data // [!code --]
      - /apps/ykr:/data // [!code ++]
  
  postgres:
    image: postgres:15
    volumes:
      - ykr-pg:/var/lib/postgresql/data // [!code --]
      - /apps/ykr-pg:/var/lib/postgresql/data // [!code ++]
  
  go-cqhttp:
    image: silicer/go-cqhttp:latest
    volumes:
      - ykr-gocq:/data // [!code --]
      - /apps/ykr-gocq:/data // [!code ++]

volumes:  // [!code --]
  ykr: // [!code --]
  ykr-pg: // [!code --]
  ykr-gocq: // [!code --]
```

### 手动启动

首先创建一个用于暮雪酱服务间通信的网络：

```shell
docker network create ykr-net
```

暮雪酱需要三个容器：
- `bsdayo/yukichan-r:latest` - 暮雪酱本体
- `postgres:15` - PostgreSQL 数据库
- `silicer/go-cqhttp:latest` - go-cqhttp

其中，镜像 `bsdayo/yukichan-r` 的标签默认情况保持 `latest` 即可。如果需要指定版本，可以前往 [Release 页](https://github.com/bsdayo/YukiChanR/releases) 查看对应的构建信息。

依次启动三个容器：

::: tip
这里将三个容器的数据目录挂载到了 `/apps/<NAME>` 下，也可以自行挂载到其他位置。
:::

```shell
# go-cqhttp
docker run \
    -dit \
    --name ykr-gocq \
    --network ykr-net \
    -v /apps/ykr-gocq:/data \
    silicer/go-cqhttp:latest
```

```shell
# PostgreSQL
docker run \
    -dit \
    --name ykr-pg \
    --network ykr-net \
    -e POSTGRES_PASSWORD=postgres \
    -v /apps/ykr-pg:/var/lib/postgresql/data \
    postgres:15
```

```shell
# 暮雪酱
docker run \
    -dit \
    --name ykr \
    --network ykr-net \
    -e "Database:Host=ykr-pg" \
    -e "Adapters:OneBot:Bots:0:Endpoint=ws://ykr-gocq:8080" \
    -v /apps/ykr:/data \
    bsdayo/yukichan-r:latest
```

## 配置

进入 go-cqhttp 的容器，生成一下配置文件：

```shell
docker attach ykr-gocq
# 此时不会显示任何信息

# 输入 2 并回车
2

# Ctrl+C 退出容器
```

编辑 `/apps/ykr-gocq/config.yml`，更改以下配置：

```yaml
account:
  uin: 1234567890        # QQ号
  password: password     # 密码
```

重启 go-cqhttp 容器：

```shell
docker restart ykr-gocq
```

暮雪酱的配置文件可以在 `<YKR_VOLUME>/configs/` 目录找到。
