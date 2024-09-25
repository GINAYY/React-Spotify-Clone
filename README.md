
![image](https://github.com/user-attachments/assets/733a77a3-2794-4c91-b6a6-645caadb9f65)


# 创建项目
```
npm create vite@latest spotify-clone -- --template react
cd spotify-clone
```
# 安装 Tailwind CSS
https://tailwindcss.com/docs/installation

按照 Tailwind CSS 官方文档 的指导进行安装。

文档使用+Quick Search
https://tailwindcss.com/docs/width
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# 配置 Tailwind CSS
编辑 tailwind.config.js 文件，添加你的项目中的内容路径：

```
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# 在 src/index.css 中引入 Tailwind：
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# 删除APP.CSS
# 下载插件 ES7
![image](https://github.com/user-attachments/assets/a707b754-e1e1-4cc5-879f-caa542ac92d3)

# 启动项目：
```
npm install
npm run dev
npm install react-router-dom
```



