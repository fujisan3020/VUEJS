new Vue({
  el: '#app',
  //data: プロパティをかける
  data: {
    message: 'HelloWorld!',
    number: 3,
    ok: false,
  },
  //methods: 関数宣言の場所
  methods: {
    sayHi: function() {
      return 'Hi';
    }
  }
})
