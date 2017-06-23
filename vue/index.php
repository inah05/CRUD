<!DOCTYPE html>
<html>
<head>
    <title>..</title>
</head>

<body>
<div id="todo">
    <ol>
        <todo-list v-for="todo in todos" v-bind:atodo="todo">
        </todo-list>
    </ol>
    {{message}} <input v-model="todo"> <button @click="add">Add</button>
</div>

<script src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="../vue/js/vue.js"></script>
</body>
</html>