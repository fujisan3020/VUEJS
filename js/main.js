new Vue({
  el: '#app',
  //data: プロパティをかける
  data: {
    message: 'HelloWorld!',
  },
  //methods: 関数宣言の場所
  methods: {
    sayHi: function() {
      this.message = 'hello VueJs';
      return this.message;
    }
  }
})
