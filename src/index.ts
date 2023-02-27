import { createApp } from 'vue';
import App from './App.vue'; //ToDo:`webpack.config.js`にて、拡張子を不要にする設定を行なっているはずだが、聞いていないみたいなので調査する。

//ルートコンポーネントからアプリケーションのインスタンスを作成する。
const app = createApp(App);

//アプリのマウントを行う(レンダリングを可能とする)。
app.mount('#app');