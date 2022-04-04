import { Card } from '@universe-design/react';
import * as React from 'react'
import Add from './components/add'
import List from './components/list'
import { Todo } from './interface'
import './App.less'

function App() {
  const todos: Todo[] = [
    {content: 'todo1', status: 'todo'}, {content: 'todo2', status: 'todo'}
]
  const [todoList, setTodoList] = React.useState<Todo[]>(todos);

  const onAdd = React.useCallback((content:string) => {
    setTodoList([{content, status: 'todo'}, ...todoList])
  }, [todoList]);

  const onRemove = React.useCallback((todo: Todo) => {
    setTodoList(todoList.filter(todo => todo.content === todo.content))

  }, [todoList]);


  const onFinish = React.useCallback((todo: Todo) => {
    setTodoList(todoList.filter(todo => todo.content === todo.content))
  }, [todoList]);
  return (
    <Card className="app">
     <h2>Todo App</h2>
     <Add onAdd={onAdd}/>
     <List todos={todoList} onFinish={() => {}} onRemove={onRemove}/>
    </Card>
  )
}

export default App
