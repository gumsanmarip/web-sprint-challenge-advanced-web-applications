// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

test('Spinner renders true', () => {
  render(<Spinner on = {true}/>)
  const message = screen.getByText('Please wait...')
  expect(message).toBeInTheDocument
})

test('Spinner renders false', () => {
  render(<Spinner on = {false}/>)
  const message = document.querySelector('#spinner')
  expect(message).toBeNull()
})
