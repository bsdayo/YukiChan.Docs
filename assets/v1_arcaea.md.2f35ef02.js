import{_ as a,c as s,o as n,a as e}from"./app.fbe2a338.js";const h=JSON.parse('{"title":"Arcaea - Arcaea 相关功能","description":"","frontmatter":{},"headers":[{"level":2,"title":"指令帮助","slug":"指令帮助","link":"#指令帮助","children":[{"level":3,"title":"#a bind - 绑定 Arcaea 账号","slug":"a-bind-绑定-arcaea-账号","link":"#a-bind-绑定-arcaea-账号","children":[]},{"level":3,"title":"#a unbind - 取消绑定 Arcaea 账号","slug":"a-unbind-取消绑定-arcaea-账号","link":"#a-unbind-取消绑定-arcaea-账号","children":[]},{"level":3,"title":"#a b30 - 查询 Best30 成绩","slug":"a-b30-查询-best30-成绩","link":"#a-b30-查询-best30-成绩","children":[]},{"level":3,"title":"#a best - 查询单曲最高分","slug":"a-best-查询单曲最高分","link":"#a-best-查询单曲最高分","children":[]},{"level":3,"title":"#a recent - 查询最近成绩","slug":"a-recent-查询最近成绩","link":"#a-recent-查询最近成绩","children":[]},{"level":3,"title":"#a info - 查询曲目信息","slug":"a-info-查询曲目信息","link":"#a-info-查询曲目信息","children":[]},{"level":3,"title":"#a guesscover - 猜曲绘小游戏","slug":"a-guesscover-猜曲绘小游戏","link":"#a-guesscover-猜曲绘小游戏","children":[]},{"level":3,"title":"#a random - 随机曲目","slug":"a-random-随机曲目","link":"#a-random-随机曲目","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"怎么没有 official 模式查分？","slug":"怎么没有-official-模式查分","link":"#怎么没有-official-模式查分","children":[]}]}],"relativePath":"v1/arcaea.md","lastUpdated":1674770563000}'),l={name:"v1/arcaea.md"},t=e(`<h1 id="arcaea-arcaea-相关功能" tabindex="-1">Arcaea - Arcaea 相关功能 <a class="header-anchor" href="#arcaea-arcaea-相关功能" aria-hidden="true">#</a></h1><h2 id="指令帮助" tabindex="-1">指令帮助 <a class="header-anchor" href="#指令帮助" aria-hidden="true">#</a></h2><p><strong>注：暮雪酱的 Arcaea 功能尚未完全开发完成</strong></p><p>不同于 lancelot，暮雪对于 Arcaea 模块仅提供一种根指令：<code>#a</code>。</p><p>指令格式中，中括号 <code>[]</code> 中的内容为<strong>可选参数</strong>，尖括号 <code>&lt;&gt;</code> 中的内容为<strong>必选参数</strong>。</p><h3 id="a-bind-绑定-arcaea-账号" tabindex="-1">#a bind - 绑定 Arcaea 账号 <a class="header-anchor" href="#a-bind-绑定-arcaea-账号" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a bind &lt;名称/好友代码&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a bind ToasterKoishi</span></span>
<span class="line"><span style="color:#abb2bf;">#a bind 114514191</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="a-unbind-取消绑定-arcaea-账号" tabindex="-1">#a unbind - 取消绑定 Arcaea 账号 <a class="header-anchor" href="#a-unbind-取消绑定-arcaea-账号" aria-hidden="true">#</a></h3><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a unbind</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="a-b30-查询-best30-成绩" tabindex="-1">#a b30 - 查询 Best30 成绩 <a class="header-anchor" href="#a-b30-查询-best30-成绩" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a b30 [名称/好友代码] [dark]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>简写形式</strong></p><p><code>查b30</code></p><p><strong>选项说明</strong></p><p><code>dark</code>: 生成暗色 B30 图片。</p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">- 查询自己的 Best30 成绩（需先绑定）</span></span>
<span class="line"><span style="color:#abb2bf;">#a b30</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询玩家 Nagiha0798 的 Best30 成绩</span></span>
<span class="line"><span style="color:#abb2bf;">#a b30 191981011</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询好友代码为 191981011 的 Best30 成绩</span></span>
<span class="line"><span style="color:#abb2bf;">#a b30 191981011</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="a-best-查询单曲最高分" tabindex="-1">#a best - 查询单曲最高分 <a class="header-anchor" href="#a-best-查询单曲最高分" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a best [名称/好友代码] &lt;曲名&gt; [难度(默认Future)]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>简写形式</strong></p><p><code>查最高</code></p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">- 查询自己 Pentiment FTR 最高分（需先绑定）</span></span>
<span class="line"><span style="color:#abb2bf;">#a best pentiment</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询自己 Arcana Eden BYD 最高分（需先绑定）</span></span>
<span class="line"><span style="color:#abb2bf;">#a best arcaeaeden byd</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询用户 ToasterKoishi 的 Testify BYD 最高分</span></span>
<span class="line"><span style="color:#abb2bf;">#a best ToasterKoishi testify byd</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="a-recent-查询最近成绩" tabindex="-1">#a recent - 查询最近成绩 <a class="header-anchor" href="#a-recent-查询最近成绩" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a recent [名称/好友代码]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>可用简写</strong></p><p><code>#a</code></p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">- 查询自己的最近一条成绩（需先绑定）</span></span>
<span class="line"><span style="color:#abb2bf;">#a</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询玩家 Nagiha0798 的最近一条成绩</span></span>
<span class="line"><span style="color:#abb2bf;">#a recent Nagiha0798</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="a-info-查询曲目信息" tabindex="-1">#a info - 查询曲目信息 <a class="header-anchor" href="#a-info-查询曲目信息" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a info &lt;曲目名称&gt; [details]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>简写形式</strong></p><p><code>查定数</code></p><p><strong>选项说明</strong></p><p><code>details</code>: 查询详细信息，包括每个难度的曲师、谱师等等。</p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">- 查询 Sheriruth 的信息</span></span>
<span class="line"><span style="color:#abb2bf;">#a info sheriruth</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询 Sheriruth 的信息，使用简写和曲目别名</span></span>
<span class="line"><span style="color:#abb2bf;">查定数 对立削苹果</span></span>
<span class="line"><span style="color:#abb2bf;">- 查询 Testify 的详细信息</span></span>
<span class="line"><span style="color:#abb2bf;">查定数 testify details</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="a-guesscover-猜曲绘小游戏" tabindex="-1">#a guesscover - 猜曲绘小游戏 <a class="header-anchor" href="#a-guesscover-猜曲绘小游戏" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a guesscover [模式关键字|回答|排名|rank|信息|info] [all|模式关键字]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><em>看格式可能不太好看懂 推荐直接看下面示例</em></p><p><strong>简写形式</strong></p><p><code>猜曲绘</code></p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">- 开始猜曲绘游戏，模式为默认的 Normal (正常模式)</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘</span></span>
<span class="line"><span style="color:#abb2bf;">- 开始猜曲绘游戏，模式为 Hard (困难模式)；更多模式可见下表。</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘 hard</span></span>
<span class="line"><span style="color:#abb2bf;">- （若正在游戏中）提交猜测答案，如 testify</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘 testify</span></span>
<span class="line"><span style="color:#abb2bf;">- 查看今日群内猜曲绘排名，模式为默认的 Normal (正常模式)</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘排名</span></span>
<span class="line"><span style="color:#abb2bf;">- 查看今日群内猜曲绘排名，模式为 Flash (闪照模式)</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘排名 f</span></span>
<span class="line"><span style="color:#abb2bf;">- 查看自己今日猜曲绘信息</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘信息</span></span>
<span class="line"><span style="color:#abb2bf;">- 查看自己所有时间内的猜曲绘信息</span></span>
<span class="line"><span style="color:#abb2bf;">猜曲绘信息 all</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>模式列表</strong></p><table><thead><tr><th style="text-align:center;">模式名称</th><th style="text-align:center;">模式关键字</th><th style="text-align:center;">模式信息</th></tr></thead><tbody><tr><td style="text-align:center;">简单</td><td style="text-align:center;">e 或 easy</td><td style="text-align:center;">100x100 大小</td></tr><tr><td style="text-align:center;">正常</td><td style="text-align:center;">n 或 normal</td><td style="text-align:center;">64x64 大小</td></tr><tr><td style="text-align:center;">困难</td><td style="text-align:center;">h 或 hard</td><td style="text-align:center;">40x40 大小</td></tr><tr><td style="text-align:center;">闪照</td><td style="text-align:center;">f 或 flash</td><td style="text-align:center;">100x100 大小，通过闪照发送</td></tr><tr><td style="text-align:center;">灰度</td><td style="text-align:center;">g 或 gray 或 grayscale</td><td style="text-align:center;">100x100 大小，且曲绘为灰度图（黑白）</td></tr><tr><td style="text-align:center;">反色</td><td style="text-align:center;">i 或 invert</td><td style="text-align:center;">100x100 大小，且曲绘反色</td></tr></tbody></table><h3 id="a-random-随机曲目" tabindex="-1">#a random - 随机曲目 <a class="header-anchor" href="#a-random-随机曲目" aria-hidden="true">#</a></h3><p><strong>指令格式</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">#a random [起始难度] [最高难度]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>简写形式</strong></p><p><code>随机曲目</code></p><p><strong>使用示例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">- 随机 9 级曲目</span></span>
<span class="line"><span style="color:#abb2bf;">#a random 9</span></span>
<span class="line"><span style="color:#abb2bf;">- 随机曲目，范围为 9 ~ 10+，使用简写</span></span>
<span class="line"><span style="color:#abb2bf;">随机曲目 9 10+</span></span>
<span class="line"><span style="color:#abb2bf;">- 全曲随机（Future 难度）</span></span>
<span class="line"><span style="color:#abb2bf;">随机曲目</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p><strong>备注</strong></p><p>若输入了起始难度但没有输入最高难度，则会在起始难度中随机抽取。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a></h2><h3 id="怎么没有-official-模式查分" tabindex="-1">怎么没有 official 模式查分？ <a class="header-anchor" href="#怎么没有-official-模式查分" aria-hidden="true">#</a></h3><p>开发中，敬请期待</p>`,67),p=[t];function o(c,r,i,b,d,g){return n(),s("div",null,p)}const f=a(l,[["render",o]]);export{h as __pageData,f as default};