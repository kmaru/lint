JavaScript static analysis
=====================================

JavaScriptの静的解析には[ESLint]を使用します。配置されている[ESLint]の設定では[Vue.js]の[シングルファイルコンポーネント](https://vuejs.org/v2/guide/single-file-components.html)にも対応しています。

設定方法
------------

1. config/.eslintrc.jsをプロジェクトのルートフォルダに配置します。
2. config/package.jsonに記載されているdevDependenciesとscriptsの内容をプロジェクトのpackage.jsonにコピーします。
3. コピーしたscriptsのlint要素の中にある `{search directory path}` の値を、プロジェクトでJavaScriptファイルおよびVueファイルが配置されているディレクトリに設定します。複数設定することが可能です。

実行方法
-----------
以下のコマンドで実行することが可能です。

```
npm run lint
```

補助ツール
---------------

### Visual Studio Code の 拡張機能

[ESLint 拡張機能]を利用することで、エディタ上にエラー及び警告を表示させることができます。

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

また、[ESLint 拡張機能]は[Vue.js]用の拡張機能である、[Vetur]とも連携しているため`.vue`ファイルの解析も行えます。

### webpack 実行時の解析によるビルドエラー化

[webpack]でビルドを行っている場合は、[eslint-loader]を利用することで、ビルド時にlintを実行することができます。

https://github.com/webpack-contrib/eslint-loader

以下に例を記載します。

```js
module: {
    rules: [
        {
            enforce: "pre",
            test: /\.(js)|(vue)$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }
    ]
}
```

[ESLint]:https://eslint.org/
[Vue.js]:https://vuejs.org/index.html
[ESLint 拡張機能]:https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[Vetur]:https://marketplace.visualstudio.com/items?itemName=octref.vetur
[webpack]:https://webpack.js.org/
[eslint-loader]:https://github.com/webpack-contrib/eslint-loader