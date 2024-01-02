// my-component.js
import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
  setup() {
    const count = ref(0)
    count.value++
    return { count }
  },
  template: `<h1>count is {{ count }}</h1>`
}