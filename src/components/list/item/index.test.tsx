import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Item from './index';

describe('#todo list', () => {
    it('Should display content', () => {
        const wrapper = render(<Item detail={{content: 'todo1', status: 'todo'}} onFinish={jest.fn()} onRemove={jest.fn()} ></Item>);
        
        const todos = wrapper.container.querySelectorAll('.todo-list-item')
        expect(todos.length).toBe(1);
        expect(todos[0].textContent).toBe('todo1')
    })

    it('should call onRemove when click remove icon', () => {
        const onRemove = jest.fn()
        const wrapper = render(<Item detail={{content: 'todo1', status: 'todo'}} onFinish={jest.fn()} onRemove={onRemove} ></Item>);
        fireEvent.click(wrapper.getByTestId('remove-button'));
        expect(onRemove).toHaveBeenCalledWith(expect.objectContaining({content: 'todo1'}))
    })

    it('should call onFinish when click finish checkbox', () => {
        const onFinish = jest.fn()
        const wrapper = render(<Item detail={{content: 'todo1', status: 'todo'}} onFinish={onFinish} onRemove={jest.fn()} ></Item>);
        fireEvent.click(wrapper.getByTestId('finish-checkbox'));

        expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({content: 'todo1'}))
        
    })
})