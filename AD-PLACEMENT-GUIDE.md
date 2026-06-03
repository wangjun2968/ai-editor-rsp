# AI Editor RSP — 广告位配置指南

## 已部署的广告位

### 首页 (HomePage)
| 位置 | 广告类型 | Slot ID | 尺寸 |
|------|---------|---------|------|
| Hero下方 | 横幅广告 | `1234567890` | Auto |
| 分类和热门工具之间 | 矩形广告 | `2345678901` | 300x250 |
| 热门工具和特性之间 | 横幅广告 | `3456789012` | Auto |
| 页面底部 | 横幅广告 | `4567890123` | Auto |

### 分类页 (CategoryPage)
| 位置 | 广告类型 | Slot ID | 尺寸 |
|------|---------|---------|------|
| 分类描述下方 | 横幅广告 | `cat-{categoryId}-top` | Auto |
| 工具卡片中间 | 矩形广告 | `cat-{categoryId}-mid` | 300x250 |
| 页面底部 | 横幅广告 | `cat-{categoryId}-bottom` | Auto |

### 工具页 (ToolPage)
| 位置 | 广告类型 | Slot ID | 尺寸 |
|------|---------|---------|------|
| 页面顶部 | 横幅广告 | `tool-{toolId}-top` | Auto |
| 侧边栏 (桌面端) | 竖幅广告 | `tool-{toolId}-sidebar` | 160x600 |
| 移动端替代 | 矩形广告 | `tool-{toolId}-mobile` | 300x250 |
| 页面底部 | 横幅广告 | `tool-{toolId}-bottom` | Auto |

## Google AdSense 配置步骤

### 1. 注册 Google AdSense
1. 访问 https://www.google.com/adsense
2. 使用 `soundxy9@gmail.com` 登录
3. 添加网站 `rspeditor.in`
4. 获取发布商ID: `ca-pub-XXXXXXXXXXXXXXXX`

### 2. 替换代码中的占位符

#### 文件 1: `src/components/AdBanner.tsx`
```tsx
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // 替换为你的发布商ID
```

#### 文件 2: `src/components/AdInFeed.tsx`
```tsx
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // 替换为你的发布商ID
```

#### 文件 3: `src/components/AdScript.tsx`
```tsx
script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX'
script.dataset.adClient = 'ca-pub-XXXXXXXXXXXXXXXX'
```

#### 文件 4: `index.html`
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

### 3. 获取真实广告位 Slot ID
在 AdSense 后台创建广告单元，获取每个广告位的真实 `data-ad-slot` ID，替换代码中的占位符。

### 4. 重新部署
```bash
cd /root/ai-editor-rsp
npm run build
node scripts/generate-static.cjs
npx gh-pages -d dist
git add . && git commit -m "Update AdSense IDs" && git push
```

## 广告优化建议

1. **Auto Ads**: 考虑开启 AdSense Auto Ads，让Google自动优化广告位置
2. **A/B测试**: 测试不同广告位置对收入和用户体验的影响
3. **响应式**: 当前广告位已适配移动端和桌面端
4. **广告密度**: 当前每页2-4个广告位，符合AdSense政策

## 注意事项
- 确保网站有足够内容（已满足，40+页面）
- 遵守 AdSense 政策，不点击自己的广告
- 等待 AdSense 审核通过（通常1-2周）
