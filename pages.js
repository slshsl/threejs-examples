// 多页配置
module.exports = {
    // 页面名称（对应 chunk 名）
    index: {
        ts: "./src/index/index.ts", // 页面入口js
        html: "./src/index/index.html", // 页面使用的html模板
        out: "index.html", // 输出目录中的页面文件名,
        title: "index"
    },
    creatingAScene: {
        ts: "./src/pages/e01_creatingAScene/index.ts", // 页面入口js
        html: "./src/pages/e01_creatingAScene/index.html", // 页面使用的html模板
        out: "creatingAScene.html", // 输出目录中的页面文件名,
        title: "CreatingAScene"
    }
};
