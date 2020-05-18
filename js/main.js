var data = {
  message: 'こんにちは',
  name: 'よしぴー',
}

var vm = new Vue({
  // el: '#app',
  //data: プロパティを書ける
  data: data,
  //computed : メソッドを処理をプロパティにしたもの
  computed: {
    myData: function() {
      return this.$data
    }
  },
  //methods: 関数宣言の場所
  methods: {

  },
  //watch
  //ウォッチャと呼ばれ、データが変更されたタイミングで処理を実行したいときに使います。（非同期の処理など） watchオプションのなかで「変更を監視したい変数: function() 」で関数を定義します。 定義する変数はdataプロパティと紐付いている必要があります。
  watch: {

  }
})
// $mountメソッド : elプロパティを後付けするメソッド
// 基本的には使用しないが、たまに使う。elプロパティを動的に変化させる時やlプロパティを後から設定する時などに使う
vm.$mount('#app')
