// 引入app
import App from './App.vue'

// 创建vm

new Vue({
    el: '#root',
    template: `
       <App></App>
    `,
    data: {

    },
    component: { App }
})