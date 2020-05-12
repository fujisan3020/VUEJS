new Vue({
  el: '#app',
  //data: プロパティをかける
  data: {
    message: 'HelloWorld!',
  },
  //methods: 関数宣言の場所
  methods: {
    reversMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
})
