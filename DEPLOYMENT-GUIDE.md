# AI Editor RSP — 部署指南

## 项目信息
- **域名**: rspeditor.in
- **GitHub**: https://github.com/wangjun2968/ai-editor-rsp
- **GitHub Pages**: https://wangjun2968.github.io/ai-editor-rsp/

## 已完成的SEO矩阵

### 8大分类（32个工具页面）
| 分类 | 核心关键词 | 页面数 |
|------|-----------|--------|
| AI Photo Editor | ai photo editor free | 4 |
| CapCut Templates | capcut template new trend | 4 |
| Background Remover | background remover free | 4 |
| Festival Photo Editing | diwali photo editing, holi ai photo editing | 4 |
| Trending Reels Editing | trending reels editing | 4 |
| Aesthetic Photo Editing | aesthetic photo editing | 4 |
| Wedding Photo Editing | wedding photo editing ai | 4 |
| Vintage Photo Editing | vintage photo editing app | 4 |

### 每个页面包含
- ✅ 独立SEO Title（含关键词）
- ✅ 独立Meta Description
- ✅ 独立Meta Keywords
- ✅ Canonical URL
- ✅ 静态HTML文件（支持搜索引擎爬虫）
- ✅ React Router动态路由（支持用户浏览）

## 域名配置步骤

### 1. Cloudflare DNS 配置
登录 Cloudflare (soundxy9@gmail.com)，为域名 `rspeditor.in` 添加以下DNS记录：

```
类型: CNAME
名称: @
目标: wangjun2968.github.io
代理状态: 已代理（橙色云）
TTL: 自动

类型: CNAME
名称: www
目标: wangjun2968.github.io
代理状态: 已代理（橙色云）
TTL: 自动
```

### 2. GitHub Pages 自定义域名设置
1. 打开 https://github.com/wangjun2968/ai-editor-rsp/settings/pages
2. 在 "Custom domain" 输入 `rspeditor.in`
3. 点击 Save
4. 勾选 "Enforce HTTPS"

### 3. Google Analytics 配置
1. 访问 https://analytics.google.com
2. 使用 soundxy9@gmail.com 登录
3. 创建新属性 "AI Editor RSP"
4. 获取测量ID (格式: G-XXXXXXXXXX)
5. 替换 `index.html` 中的 `G-XXXXXXXXXX`
6. 重新部署

## 重新部署命令
```bash
cd /root/ai-editor-rsp
npm run build
node scripts/generate-static.cjs
npx gh-pages -d dist
git add . && git commit -m "update" && git push
```

## 下一步建议
1. 添加真实的AI编辑功能（调用AI API）
2. 添加Google AdSense广告位
3. 添加更多长尾关键词页面
4. 配置Google Search Console
5. 添加社交媒体分享功能
