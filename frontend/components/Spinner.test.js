// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { rerender, screen } from '@testing-library/react'
import Spinner from './Spinner'

test('Spinner renders true', () => {
  rerender(<Spinner on = {true}/>)
  const message = screen.getByText('Please wait...')
  expect(message).toBeInTheDocument
})

test('Spinner renders false', () => {
  rerender(<Spinner on = {false}/>)
  const spin= document.querySelector('#spinner')
  expect(message).toBeInTheDocument
})
