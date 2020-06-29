var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue !'
    }
  });

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
  });
var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});

var todos = [{text: "Apprendre Javascript"},
             {text: "Apprendre Vue"},
             {text: "Créer quelque chose de génial"}
            ];

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos
  }
});

todos.push({text: "Nouvel element"});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: 'Salut Emy!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {id: 0, text: "Legumes"},
      {id: 1, text: "Fromage"},
      {id: 2, text: "Tout ce que les humains aiment bisous"}
    ]
  }
})

var appName = new Vue ({
  el: "#app-name",
  data: {
    true: {
    message: "Hello"
  }
  }
})
