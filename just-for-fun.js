var userName = new Vue({
    el: "#user-name",
    data: {
        message: "Paolo",
    },
    methods: {
      name: function() {
        alert("Hello " + this.message + "!");
    }
  }
})
