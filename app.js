const app = Vue.createApp({
    // Built in Vue data property 
    data() {
        // Data always returns object
        return {
            // Set up key, val pairs
            // courseGoalA: '<h2>Finish the course and learn Vue!</h2>',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://github.com/kaavyalakshmanan/vue-convert-vanilla-js-to-vue',

        };
    },
    // Used for things like user events, pass obj
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }
            return this.courseGoalB;
        }
    }
});

// Let Vue know which part of HTML should be controlled by Vue
app.mount('#user-goal');