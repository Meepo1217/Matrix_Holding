import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://matrixholding.com.vn";
const OUT_DIR = path.join(__dirname, "..", "public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images");

mkdirSync(OUT_DIR, { recursive: true });

const ASSETS = [
  { src: "/wp-content/uploads/logo.png", dest: "logo.png" },
  { src: "/wp-content/uploads/logo-white.png", dest: "logo-white.png" },
  { src: "/wp-content/uploads/hero-background.jpg", dest: "hero-bg.jpg" },
  { src: "/wp-content/uploads/about-image.jpg", dest: "about-image.jpg" },
  { src: "/wp-content/uploads/matrix-network.jpg", dest: "network-card.jpg" },
  { src: "/wp-content/uploads/matrix-connect.jpg", dest: "connect-card.jpg" },
  { src: "/wp-content/uploads/matrix-ventures.jpg", dest: "ventures-card.jpg" },
  { src: "/wp-content/uploads/news-featured.jpg", dest: "news-featured.jpg" },
  { src: "/wp-content/uploads/news-1.jpg", dest: "news-thumb-1.jpg" },
  { src: "/wp-content/uploads/news-2.jpg", dest: "news-thumb-2.jpg" },
  { src: "/wp-content/uploads/news-3.jpg", dest: "news-thumb-3.jpg" },
  { src: "/wp-content/uploads/faq-image.jpg", dest: "faq-illustration.jpg" },
  { src: "/wp-content/uploads/cta-background.jpg", dest: "cta-bg.jpg" },
];

async function downloadFile(url, destPath) {
  if (existsSync(destPath)) {
    console.log("already: " + path.basename(destPath));
    return;
  }
  return new Promise((resolve) => {
    const proto = url.startsWith("https") ? https : http;
    const file = createWriteStream(destPath);
    proto.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        downloadFile(res.headers.location, destPath).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        console.error("fail " + res.statusCode + " " + url);
        resolve();
        return;
      }
      pipeline(res, file)
        .then(() => { console.log("ok: " + path.basename(destPath)); resolve(); })
        .catch((e) => { console.error("err: " + e.message); resolve(); });
    }).on("error", (e) => { console.error("net: " + e.message); resolve(); });
  });
}

async function run() {
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    await Promise.all(batch.map(({ src, dest }) => {
      const url = src.startsWith("http") ? src : BASE_URL + src;
      return downloadFile(url, path.join(OUT_DIR, dest));
    }));
  }
  console.log("Done!");
}

run().catch(console.error);
