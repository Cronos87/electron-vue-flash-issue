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
        var vm = this;
        window.addEventListener('keyup', this.onKeyUp);
        win.on('hide', this.reset)
        app.on('hide-window', function () {
          vm.reset();
          app.hide();
        });
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
                this.reset()
                app.hide();
            }
        }
    }
});
