import React from 'react'
import ReactTestRenderer from 'react-test-renderer';
import Header from './'

it('should have h1', () => {
  const { children } = ReactTestRenderer.create(<Header/>).toJSON()
  const hasH1 = children.some(({ type }) => type === 'h1')
  expect(hasH1).toEqual(true)
})

it('should have hr', () => {
  const { children } = ReactTestRenderer.create(<Header/>).toJSON()
  const hasHr = children.some(({ type }) => type === 'hr')
  expect(hasHr).toEqual(true)
})
