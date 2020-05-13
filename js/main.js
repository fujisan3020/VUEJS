new Vue({
  el: '#app',
  //data: プロパティを書ける
  // データでは、動的なものを扱うことはできない。あくまで、初期値を扱うもの。
  data: {
    styleObject: {
      color: 'red',
      'background-color': 'blue'
    }
  },
  //computed : メソッドを処理をプロパティにしたもの
  computed: {

  },
  //methods: 関数宣言の場所
  methods: {

  },
  //watch
  //ウォッチャと呼ばれ、データが変更されたタイミングで処理を実行したいときに使います。（非同期の処理など） watchオプションのなかで「変更を監視したい変数: function() 」で関数を定義します。 定義する変数はdataプロパティと紐付いている必要があります。
  watch: {

  }
})
