new Vue({
  el: '#app',
  //data: プロパティを書ける
  // データでは、動的なものを扱うことはできない。あくまで、初期値を扱うもの。
  data: {
    counter: 0,
    otherCounter: 0
  },
  //methods: 関数宣言の場所
  methods: {

  },
  //computed : メソッドを処理をプロパティにしたもの
  computed: {
    lessThanThree: function() {
      console.log('Computed');
      return this.counter > 3 ? '3以上' : '3以下'
    }
  },
  // computedとmethodsの違い
  // 1. 両者はプロパティとメソッドであること
  // 2. computedはキャッシュされる
  // ※2の補足 computedは元データの変更があった時点でデータが保存されるのに対して、method側はいつでもプログラムを実行して値を計算するというこ

  //watch
  //ウォッチャと呼ばれ、データが変更されたタイミングで処理を実行したいときに使います。（非同期の処理など）
  //watchオプションのなかで「変更を監視したい変数: function() 」で関数を定義します。 定義する変数はdataプロパティと紐付いている必要があります。
  watch: {
    counter: function() {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0
      }, 3000)
    }
  }
})
