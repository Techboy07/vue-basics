const app = Vue.createApp({
  template: ``,
  data() {
    return {
      url: "http://portfolical.web.app" /*"http://www.thenetninja.co.uk"*/,
      showBooks: true,
      books: [
        { title: "the final empire", author: "brandon smith", isFav: true },
        { title: "the way of the wind", author: "barry allen", isFav: false },
        {
          title: "the way of kings",
          author: "patrick the trickster",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.title = "Words of romance";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(e, book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filteredFavs() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
