// componentのdataは関数であり、returnで返す必要がある。
Vue.component('my-component', {
  data: function() {
    return {
      number: 12,
    }
  },
  template: '<p>いいね({{ number }})</p>',
})

new Vue({
  el: '#app',
})
