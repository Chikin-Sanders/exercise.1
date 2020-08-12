new Vue ({
    el: '.container',
    data: {
        option: '',
        menu: false
    },
    methods: {
        updateOption(event) {
            console.log(event);
            this.option = event.target.textContent;
            this.menu = event.returnValue;
        },
    }
});
