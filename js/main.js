new Vue({
  el: '#app',
  //data: プロパティを書ける
  data: {
    number: 0,
    event: 'click',
  },
  //methods: 関数宣言の場所
  methods: {
    countUp: function(times) {
      this.number += 1 * times;
    },
  }
})
