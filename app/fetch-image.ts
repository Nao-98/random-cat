"use server"; // fetchImage関数は常にサーバーサイドで実行される

// import { CAT_API_KEY } from "./env";

// 画像情報の型定義
type Image = {
    url: string;
};

// APIから画像を取得する関数
export async function fetchImage(): Promise<Image> {

    // 直接 Vercel の環境変数を探しに行き、無ければ "DEMO_KEY" を使う
    const apiKey = process.env.CAT_API_KEY || "DEMO_KEY";
    
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {"x-api-key": CAT_API_KEY },
    });
    const images = await res.json();
    console.log("fetchImage: 画像情報を取得しました", images);
    return images[0]; // 画像情報の配列から最初の要素を返す
  }
