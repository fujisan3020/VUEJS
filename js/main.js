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


new Vue({
  // el: '#app2',
  data: {
    name: 'よしぴー'
  },
  // template(プロパティ) : template構文の他の記載方法(1)
  template: '<h1>こんにちは、{{ name }}</h1>'
}).$mount('#app2')
// $mountはVueインスタンスの最後に付け加えるような記載もできる


new Vue({
  data: {
    name: 'よしぴー'
  },
  // render(関数) : template構文の他の記載方法(2)
  // これは仮想ノードを作ってDOMの描画を行う
  render: function(createElement) {
    console.log(createElement('h1', 'こんにちは、' + this.name));
    // createElement引数(第一引数：タグ, 第二引数：値)
    return createElement('h1', 'こんにちは、' + this.name);
  }
}).$mount('#app3')

// このcreateElementは直接DOMにアクセスしている
var dir = document.createElement('div');
console.log(dir);
console.dir(dir);
console.log(document);
console.dir(document);
