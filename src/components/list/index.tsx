import * as React from 'react'
import { Todo } from '../../interface'

interface ListProps {
    todos: Todo[];
    onFinish: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
}

export default (props: ListProps) => {
    return <div>Todo lsit</div>
}