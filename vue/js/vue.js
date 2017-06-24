/**
 * Created by Windows 10 Pro on 6/23/2017.
 */
// https://jsfiddle.net/jpeter06/ppyeo1tg/
//https://stackoverflow.com/questions/43250649/vue-component-and-alert-on-click-button
//https://medium.com/@InaniT0

Vue.config.devtools = true;

Vue.component('todo-list',{
    props:['atodo'],
    template: "<li @dbClick><button type='button' @click='doDelete'>X</button>&nbsp;&nbsp; {{atodo.text}} </li>",
    methods:         {
        doDelete: function() {
            oTodo.todos.splice(this._uid,1);
            console.log(this._uid);
            console.log(this.atodo.text);
            console.log(oTodo.todos);
            //Just hide the item
            //this.atodo.$remove(this.atodo.text);
        }
    }
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
         }
     }
 })