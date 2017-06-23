/**
 * Created by Windows 10 Pro on 6/23/2017.
 */
// https://jsfiddle.net/jpeter06/ppyeo1tg/

Vue.config.devtools = true;

Vue.component('todo-list',{
    props:['atodo'],
    template: '<li @dbClick><button type="button" @click.prevent="del($index)">X</button>&nbsp;&nbsp; {{atodo.text}} </li>'
})

 var oTodo = new Vue({
     el: '#todo',
     data: {
         todos:[],
         message: 'Add todo',
         todo: ''
     },
     methods: {
         add: function() {
             this.todos.push({text: oTodo.todo})
         },
         del: function(todo) {
             console.log(todo);
             this.todos.$remove(todo);
         }
     }
 })