<template>
<div class="calculator">
  <p>Caluculator Program</p>
  <textarea name="text" id="" cols="30" rows="10"></textarea>
  <br>
  <input type="text">
  <input type="text">
  <input type="text">
  <ul>
    <button class="button">計算</button>
    <button class="button">入力</button>
    <button class="button">消去</button>
  </ul>
</div>
</template>
<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  }
}
</script>
<style>
button {
  /* ブラウザ特有のスタイルを無効に */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  /* 整える */
  margin: 1em 0; /* 前後の隙間 */
  padding: 0.6em 1em; /* 塗りの余白 */
  font-size: 1em; /* フォントサイズ */
  /*background-color: #1aa1ff;  背景色 */
  color: rgb(0, 0, 0); /* テキストカラー */
  cursor: pointer; /* カーソルを指マークに */
  border-radius: 3px; /* 角の丸み */
  border: 0; /* 枠線を消す */
  transition: 0.3s; /* ホバーの変化を滑らかに */
}

/* ホバー時（カーソルをのせた時）の見た目 */
button:hover {
  background-color: #064fda; /* 背景色 */
}

</style>