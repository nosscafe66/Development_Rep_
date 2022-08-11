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
// eslint-disable-next-line
/* eslint-disable */ 
import * as d3 from 'd3'  //有効にする

export default {
  name: 'Calculator',
  data: function() {
    return {
        message:'',  //入力データを格納する変数。
        result :'',  //演算結果を格納する変数。
        state:"wait" //現在の状況を格納する変数。
    }
  },methods: {
    //テキストボックスに入力されたデータをバックエンドに送り、バックエンドから演算結果を受け取り、その結果を表示するメソッド
    getdata:function(){
        this.state="getting data"
        this.$axios.get('http://192.168.0.4:3000/api',{params:{dat:this.message}})
          .then(function(response){
            console.log(response.data.message)  //バックエンドから返却された演算結果をconsole.logしている。
            this.result= response.data.message
            this.state="done"    
            }.bind(this))  //Promise処理を行う場合は.bind(this)が必要
          .catch(function(error){  //バックエンドからエラーが返却された場合に行う処理について
            this.state="ERROR"
            }.bind(this))
          .finally(function(){
            }.bind(this))}

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