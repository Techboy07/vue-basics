const app = Vue.createApp({
  template: `
    <div v-if="">
   <div v-if="showBooks">
   <h2>{{title}} - {{author}} - {{age}}</h2>
   </div>
    <button @click="toggleShowBooks">{{this.showBooks==true? "hidebooks": "showbooks"}}</button>
    <button @click="age--">Decrease Age</button>
    <div @click="changeTitle"> change</div>
    </div>
    `,
  data() {
    return {
      title: "the final stream",
      author: "brandon smith",
      age: "45",
      showBooks: true,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Words of romance";
    },
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    }
  },
});

app.mount("#app");
