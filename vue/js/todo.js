/**
 * Created by Windows 10 Pro on 6/29/2017.
 */
var oTodo = new Vue({
    el: '#todo',
    data:{
        todolist:[],
        todo:''
    },
    methods: {
        //Push value to the array
        //shown: for the input text in editing
        //hide: for the span rendering each todo items
        addTodo: function() {
            value = this.todo.trim();
            if (value) {
                this.todolist.push(
                    {
                        text: this.todo,
                        checked: false,
                        shown: false,
                        hide: false
                    }
                );
                this.todo = '';
            } else {
                alert('Should not be empty');
            }
        },

        //Delete
        delTodo: function(todos) {
            var index = this.todolist.indexOf(todos);
            this.todolist.splice(index,1);
        },

        //Display the input text for editing
        //Check first if tasks is done or  not
        showData: function(todos) {
            if (todos.checked === false) {
                todos.shown = true;
                todos.hide = true;
            } else{
                alert('You cannot edit done tasks');
            }
        },

        //Save edited value to the array
        editTodo: function(todos) {
            var index = this.todolist.indexOf(todos);
            value = todos.text;

            if (value) {
                newvalue = {
                    text: todos.text,
                    checked: false,
                    shown: false,
                    hide: false
                };

                //https://www.reddit.com/r/vuejs/comments/5p96hy/what_really_is_object_ob_observer/dcpher7/
                //Due to limitations in JavaScript, Vue cannot detect the following changes to an array:
                //When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue

                //Instead use this https://vuejs.org/v2/guide/list.html#Caveats
                //Vue.set(example1.items, indexOfItem, newValue)

                Vue.set(this.todolist, index, newvalue);
                todos.hide = false;
            } else {
                alert('Should not be empty');
            }
        }

     }
});
