<template><!--template-->
<div class="calculator">
  <p>{{appName}}</p>
  <textarea name="text" id="" cols="30" rows="10"></textarea>
  <br>
  <p>{{message}}</p>
  <input type="number" placeholder="数値1" v-model.number="inputnumber1">
  <input type="number" placeholder="数値2" v-model.number="inputnumber2">
  
  <h2 v-show="showText">結果</h2>
  <hr>
  <button v-on:click="doCalc" class="button">計算</button>
  <button v-on:click="doDelete" class="button">消去</button>
</div>
</template>
<script>//javascript
//import Vue from 'vue'
export default {
  name: 'Calculator',
  props: {
    likeCount: { type: Number, default: 3 }
  },
  data(){
    return{
        appName:'Calculator',
        message:'Input number',
        showText: false
        //inputnumber1:'-',
        //inputnumber2:'-',
        //result:'-'
    }
  },methods:{
    //計算ボタンを押したときの挙動
    doCalc: function(){
      console.log("calc!!");
      this.result = this.inputnumber1 + this.inputnumber2;
      //alert('test fuction called doCalc '+ result);
    },
    doDelete: function(){
      this.result = (this.inputnumber1 + this.inputnumber2) * 0;
    }
  }
  //,methods:{
  //  reset() {
  //    this.count +=1;
  //  }
  //}
}
</script>
<style>
body {
background-color: #8df8b8;
}
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