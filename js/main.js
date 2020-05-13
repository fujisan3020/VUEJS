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
    lessThanThreeMethod: function() {
      console.log('Method');
      return this.counter > 3 ? '3以上' : '3以下'
    }
  },
  //computed : メソッドを処理をプロパティにしたもの
  computed: {
    lessThanThree: function() {
      console.log('Computed');
      return this.counter > 3 ? '3以上' : '3以下'
    },
  }
  // computedとmethodsの違い
  // 1. 両者はプロパティとメソッドであること
  // 2. computedはキャッシュされる
  // ※2の補足 computedは元データの変更があった時点でデータが保存されるのに対して、method側はいつでもプログラムを実行して値を計算するというこ
  //
})
