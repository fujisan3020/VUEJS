new Vue({
  el: '#app',
  //data: プロパティを書ける
  // データでは、動的なものを扱うことはできない。あくまで、初期値を扱うもの。
  data: {
    counter: 0,
  },
  //computed : メソッドを処理をプロパティにしたもの
  computed: {
    doubleCountComouted: function() {
      return this.counter * 2;
    }
  },
  //methods: 関数宣言の場所
  methods: {
    countUp: function() {
      return this.counter += 1;
    },
    doubleCountMethod: function() {
      return this.counter * 2;
    }
  },
  //watch
  //ウォッチャと呼ばれ、データが変更されたタイミングで処理を実行したいときに使います。（非同期の処理など） watchオプションのなかで「変更を監視したい変数: function() 」で関数を定義します。 定義する変数はdataプロパティと紐付いている必要があります。
  watch: {

  }
})
