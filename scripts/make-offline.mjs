import { readFile, writeFile } from "node:fs/promises";

// 构建结果只有一个 IIFE 脚本，无模块导入。普通 defer 脚本支持 file:// 离线打开。
const indexPath = new URL("../dist/index.html", import.meta.url);
const html = await readFile(indexPath, "utf8");
const offlineHtml = html
  .replace(/<script type="module" crossorigin/g, "<script defer")
  .replace(/<link rel="stylesheet" crossorigin/g, '<link rel="stylesheet"');
await writeFile(indexPath, offlineHtml);
console.log("离线入口已生成：dist/index.html，可直接双击打开。");
