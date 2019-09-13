# react-redux-practice1

## フォルダ構成

```
src
├── actions                    // 使用可能なアクション（イベント）を作成する。action creator
├── components                 // redux storeを利用してしてviewを構築する
├── reducers                   //
│   ├── hoge.js                // 複数存在する。アクションを受け取り現在の状態（viewに表示されている値）を変更する
│   └── index.js               // 各reducerをcombineReducersによって1つのreducerにまとめ上げて、外部からアクセスしやすい形にする
├── index.css                  //
├── index.js                   // 各componentがreduxの機構（redux store）を使用できるようにProviderによって宣言する場所
                               // createStoreによって1つにまとめあげられたreducerをredux storeに取り込む
└── serviceWorker.js           //
```