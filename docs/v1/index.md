<VersionOutdated />

# 暮雪酱 v1

暮雪酱 (YukiChan) 是一个全新开发的 QQ 平台聊天机器人 (Bot)，基于 .NET 6 + C#，框架使用 [Konata.Core](https://github.com/KonataDev/Konata.Core)。

## 为什么会有暮雪酱？

[lancelot.bot](https://docs.sorabs.cc/lancelot/) 是我在 bot 这个方向的第一个作品，基于 Node.js 和 TypeScript。随着时间的推移，也积累了不少用户。但由于当时各方面的经验不足，导致整个项目架构十分混乱，非常难以维护。经过考虑后，我决定吸取经验重写一次，也就有了现在的暮雪酱。暮雪酱选用更优雅的 C# 语言编写，相比 lancelot 在架构上有着很大的革新，可维护性也大大提升。

为保留用户习惯，暮雪酱沿袭了 lancelot 的大部分指令格式，但也有小部分差别，例如：指令前缀由 `/` 更改为 `#`；无法使用“横杠式”选项（如 `/a b30 --dark`），改为直接在指令后加选项全称（`#a b30 dark`）等等。详细差别请自行探索。

经过综合考虑，暮雪酱目前仍在小范围测试阶段，开放部分群聊使用，暂不接受好友或群聊申请。
