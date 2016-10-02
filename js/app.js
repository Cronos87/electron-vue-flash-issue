const remote = require('electron').remote;
const app = remote.app;
const win = remote.getCurrentWindow();
const Vue = require('vue/dist/vue');

new Vue({
    el: '#app',
    data: {
        input: '',
        tests: [
            'abc',
            'def',
            'ghi',
            'jkl',
            'mno',
            'prs',
            'tuv',
            'wxy',
            'zab',
            'cde',
        ]
    },
    created: function() {
        window.addEventListener('keyup', this.onKeyUp);
        win.on('hide', this.reset)
    },
    computed: {
        testsFiltered() {
            var value = this.input

            return this.tests.filter((test) => {
                return test.toLowerCase().indexOf(value) >= 0
            })
        }
    },
    methods: {
        reset() {
            this.input = ''
        },
        onKeyUp(event) {
            if (event.keyCode === 27) {
                app.hide()
            }
        }
    }
});
