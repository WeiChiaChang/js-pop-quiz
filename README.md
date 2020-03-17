# JavaScript Pop Quiz

![Demo](https://upload.cc/i1/2020/03/18/84kxt0.png)

之前用 Vue.js 製作[台灣圖標字型遊戲](https://github.com/WeiChiaChang/twicon-game)的經驗蠻不錯的，
這次決定試試看不用 Vuex 寫看看，自己模擬看看 store 和 mutations 平常在做的事情，
也把答題結果的資料丟到 Firebase 做儲存，
實作 Ranking 排行榜的機制。

題目方面則是採用了之前上過 GitHub Trending 的 [javascript-questions](https://github.com/lydiahallie/javascript-questions)，截至目前為止 (2020/03/18) 共收錄了 144 道題目，一方面認為這是ㄧ份很不錯的文件，
畢竟 JavaScript 這語言本身實在太<del>奇葩</del>太奇妙，
一不留神真的會不小心寫出很烙賽的 Code，
不管是自己檢測或是給學生測試看看，相信都是很好的練習！

**[快來測驗你的 JavaScript 技能吧！](https://js-pop-quiz.now.sh)**

## Setup

```bash
# Install dependencies
npm i

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```

## Reference

- Great thanks to [Lydia Hallie](https://github.com/lydiahallie) for creating awesome [javascript-questions](https://github.com/lydiahallie/javascript-questions)
- Ranking idea comes from [samiheikki/javascript-guessing-game](https://github.com/samiheikki/javascript-guessing-game)
- Folder structrue based on [dmtrbrl/hp-quiz](https://github.com/dmtrbrl/hp-quiz)