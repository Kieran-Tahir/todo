import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchTodos } from '../actions'

jest.mock('../actions')

fetchTodos.mockImplementation(() => () => {})

test('page header includes Todo', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Todo/)
})

test('renders an <li> for each Todo', () => {
  const todos = ['Code', 'Fish', 'Eat']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ todos }))

  render(<Provider store={store}><App /></Provider>)
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchTodos action', () => {
  render(<Provider store={store}><App /></Provider>)
  expect(fetchTodos).toHaveBeenCalled()
})
