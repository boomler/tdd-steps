import { Menu, ScrollArea } from '@universe-design/react';
import * as React from 'react'
import { Todo } from '../../interface'
import Item from './item';

interface ListProps {
    todos: Todo[];
    onFinish: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
}

export default (props: ListProps) => {
    const {onFinish, todos, onRemove} = props;
    return <ScrollArea>
    <div  className="todo-list">
        {todos.map(todo => <Item key={todo.content} detail={todo} onFinish={onFinish} onRemove={onRemove} ></Item>)}
    </div>
    </ScrollArea>
}