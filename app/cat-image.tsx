"use client"; // use clientを指定

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

// コンポーネントの引数を定義する
type CatImageProps = {
    url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    // useStateを使って状態を管理
    // imageUrlは状態変数で、現在の猫画像のURLを保持する
    // setImageUrlは状態を更新するための関数
    const [imageUrl, setImageUrl] = useState(url);

    // 画像を取得する非同期関数を定義
    // asyncをつけているのは、関数内でfetchImageをawaitしているため
    // refreshImageをCatImage関数内に書いているのは、setImageUrl関数を使うため
    const refreshImage = async () => {
        setImageUrl(""); // 画像URLを初期化
        const image = await fetchImage();
        // imageUrl状態変数が更新され、コンポーネントが再レンダリングされる
        setImageUrl(image.url);
    };

    return (
        <div className={styles.page}>
            {/* ボタンの表示 */}
            <button onClick={refreshImage} className={styles.button}>他のにゃんこも見る</button>
            <div className={styles.frame}>
            {/* 画像の表示 (技法：条件付きレンダリング) */}
            {imageUrl && <img src={imageUrl} className={styles.img} />}
            </div>
        </div>
    );
}