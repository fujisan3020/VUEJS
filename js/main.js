// コンポーネントにおけるローカル登録
// (グローバル登録と比べて、ローカル登録の方がよく使用される) 
var component = {
  data: function() {
    return {
      number: 12
    }
  },
  template: '<p>いいね({{ number }})<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      this.number += 1;
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'my-component': component
  }
})

new Vue({
  el: '#app2',
})


// componentのdataは基本的に関数であり、returnで返す必要がある。
// Vue.component('my-component', {
//   data: function() {
//     return {
//       number: 12,
//     }
//   },
//   template: '<p>いいね({{ number }})</p>',
// })
