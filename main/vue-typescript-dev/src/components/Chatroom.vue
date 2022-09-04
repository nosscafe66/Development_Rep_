<template><!--template-->
<div class="chatroom">
  <div class="chat-box">
    <div class="chat-face">
      <img src="../assets/logo.png" alt="自分のチャット画像です。" width="90" height="90">
    </div>
    <div class="chat-area">
      <div class="chat-hukidashi">
        <p v-html="message"></p>
      </div>
    </div>
  </div>
  <div class="chat-box">
    <div class="chat-face">
      <img src="../src/assets/logo.png" alt="誰かのチャット画像です。" width="90" height="90">
    </div>
    <div class="chat-area">
      <div class="chat-hukidashi someone">
        <p v-html="message"></p>
        <p v-html="message"></p>
        <p v-html="message"></p>
      </div>
    </div>
  </div>
</div>
</template>
<script>//チャットアプリケーション開発
  export default {
    name: 'Chatroom',
    props: [
    'text',
    'author',
    'dark' ,
    'name']
  }
</script>
<script setup>//定数表示
  const message = '<h2>Hello World</h2>';
</script>
<style>
/* チャットレイアウト */
.chat-box {
    width: 100%;
    height: auto;
    overflow: hidden; /*floatの解除*/
    margin-bottom: 20px;
}
.chat-face {
    float: left;
    margin-right: -120px;
}
.chat-face img{
    border-radius: 30px;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ddd;
}
.chat-area {
    width: 100%;
    float: right;
}
.chat-hukidashi {
    display: inline-block; /*コメントの文字数に合わせて可変*/
    padding: 15px 20px;
    margin-left: 120px;
    margin-top: 8px;
    /* border: 1px solid gray; ←削除 */
    border-radius: 10px;
    position: relative; /*追記*/
    background-color: #D9F0FF; /*追記*/
}
/* ↓追記↓ */
.chat-hukidashi:after {
    content: "";
    position: absolute;
    top: 50%; left: -10px;
    margin-top: -10px;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #D9F0FF transparent transparent;
}
.someone {
    background-color: #BCF5A9;
}
.someone:after {
    border-color: transparent #BCF5A9 transparent transparent;
}
/* ↑追記↑ */
</style>