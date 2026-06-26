import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  //           ^^^^^ asyncキーワードを追加
  // ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  // APIから画像を取得
  const image = await fetchImage();

  // 画像URLをコンソールに表示
  console.log("Home: 画像情報を取得しました", image.name);
  // 画像のURLを渡す
  return <CatImage url={image.url} />;
}