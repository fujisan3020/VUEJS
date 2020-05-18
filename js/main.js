// Vue.jsでは外部にオブジェクトを作成して、そのオブジェクトを他のオブジェクトのデータに指定することもできる
var data = {
  message: 'こんにちは',
  name: 'よしぴー',
}

var vm = new Vue({
  el: '#app',
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

console.log(data === vm.$data);

console.log(vm);

// Vueインスタンスプロパティで、頭に $ が付いたものはユーザーが使うユーザー定義のプロパティである
console.log(vm.$data);
