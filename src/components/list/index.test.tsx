import * as React from 'react';
import { render } from '@testing-library/react';
import List from './index';
import { Todo } from '../../interface';

describe('#todo list', () => {
    it('Should display todo list', () => {
        const todolist: Todo[] = [
            {content: 'todo1', status: 'todo'}, {content: 'todo2', status: 'todo'}
        ]
        const wrapper = render(<List todos={todolist} onFinish={jest.fn()} onRemove={jest.fn()} ></List>);
        
        const todos = wrapper.container.querySelectorAll('.todo-list-item')
        expect(todos.length).toBe(2);
        expect(todos[0].textContent).toBe('todo1')
        expect(todos[1].textContent).toBe('todo2')
    })
})