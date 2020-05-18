var vm = new Vue({
  el: '#app',
  //data: プロパティを書ける
  data: {
    message: 'こんにちは',
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

// Vueインスタンスに格納されているプロパティは、getter, setter, watcherが設定・付与され、リアクティブ(main.jsの値が変わると、index.htmlの値が変わること)になっている
vm.message = '変更しました';

// プロパティは後から追加することはできない
// 後から追加されたプロパティは、getter, setter, watcherが設定・付与されておらず、リアクティブにならない
vm.name = 'よしぴー'

console.log(vm);
