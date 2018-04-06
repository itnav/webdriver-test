### Webdriver.io動かすまで
1. npm install
2. npm run selenium-install
ドライバインストール
3. npm run selenium-start
seleniumサーバーのスタート
4. npm run test
2つめのターミナルを開きテスト実行

### テストケース
test/specs/test.js内にテスト内容記述
現状では、フォームに指定された文字列を入力し、classのattributeをconsole.logしている

### apiについて
公式HPに記述されているAPI集
(http://webdriver.io/api.html)

### スクリーンショットについて
デフォルトで、テストが完了しなかった場合スクリーンショットが取られる
screenshotPath: './errorShots/'

## wdio.conf.jsについて
テスト実行に関わるコンフィグ

### 接続先を変える場合
baseUrlを、テストを実行したいurlに変更する
あるいはテストコードのファイル内で指定

### テストブラウザの設定
browserNameの部分を編集することで変えられる

### ヘッドレスでの実行
browserName以下にあるchromeOptionsを設定

### タイムアウトの設定
テストケースに時間がかかる場合、waitforTimeoutを長めに変える

### テストケースの保存先を変える
specs内に記述されているpathを、テストケースを記述したフォルダに変更する

##その他
### レポーターについて
wdio.conf.js内でレポーターを指定できる
デフォルトはdotを用いていて、dotで進行度を示すだけ
(http://webdriver.io/guide/reporters/dot.html)
また、レポーターを変更する場合は、レポーターごとにモジュールが必要

### wdio.confを一から設定する場合
(http://webdriver.io/guide/testrunner/gettingstarted.html)
以上のページを参考に、
$ ./node_modules/.bin/wdio config
を実行すると対話形式でconfigの生成ができる

### ページをオブジェクトとして記述する
(https://github.com/webdriverio/webdriverio/tree/master/examples/pageobject)
以上を参考にすると、複数ページのテストを記述する場合や、規模が大きくなっても管理しやすそう
