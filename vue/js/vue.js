/**
 * Created by Windows 10 Pro on 6/23/2017.
 */
// https://jsfiddle.net/jpeter06/ppyeo1tg/
//https://stackoverflow.com/questions/43250649/vue-component-and-alert-on-click-button
//https://medium.com/@InaniT0
//https://vuejs.org/v2/guide/list.html#key

Vue.config.devtools = true;

Vue.component('todo-list',{
    props:['atodo'],
    template: "<li><button type='button' @click='doDelete(todo)'>X</button>&nbsp;&nbsp; {{atodo.text}} </li>",
    methods:         {
        doDelete: function(todo) {
            console.log(todo);
            console.log(JSON.stringify(localStorage.getItem('todo0')));
        }
    },
    data: function() {
        reti
    }
})

 var oTodo = new Vue({
     el: '#todo',
     data: {
         i: 0,
         todos:[

         ],
         message: 'Add todo',
         todo: ''
     },
     methods: {
         add: function() {
             oTodo.i = oTodo.i++;
             this.todos.push({text: oTodo.todo});
             localStorage.setItem('todo'+oTodo.i, oTodo.todo);
             this.todo='';
         }
     }
 })