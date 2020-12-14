import React from 'react'
import Button from './button'
import { render } from '@testing-library/react'

describe('test button component', () => {
  it('should render default button correct', () => {
    const warper = render(<Button>TestText</Button>);

  })
})