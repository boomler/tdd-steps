import * as React from 'react'
import { Todo } from '../../interface';

interface AddProps {
    onAdd: (todo: Todo) => void;
}
export default (props: AddProps) => {
  return <div>Add Todo</div>
}