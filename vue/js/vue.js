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
    template: "<li v-model='todotext'><button type='button' @click='doDelete'>X</button>&nbsp;&nbsp; {{atodo.text}} </li>",
    methods:         {
        doDelete: function() {

            //console.log(oTodo.todo);
            //console.log(oTodo.todos.indexOf(oTodo.todos.text));
            // oTodo.todos.splice(oTodo.todos.index - 1,1);
            //  console.log(this._uid);
            //  console.log(oTodo.todos.index);
            //  console.log(oTodo.todos);
        }
    },
    data: function(){
        return {
            atodo: atodo
        }
    }
})

 var oTodo = new Vue({
     el: '#todo',
     data: {
         todos:[

         ],
         message: 'Add todo',
         todo: ''
     },
     methods: {
         add: function() {
             //TODO: localStorage
             this.todos.push({text: oTodo.todo});
             this.todo='';
         }
     }
 })