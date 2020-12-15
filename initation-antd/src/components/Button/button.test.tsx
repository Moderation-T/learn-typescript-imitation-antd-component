import React from 'react';
import Button, { ButtonProps } from './button';
import { fireEvent, render } from '@testing-library/react';

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'test-class'
}

const disabledProps: ButtonProps = {
  onClick: jest.fn(),
  disabled: true
}

describe('test button component', () => {
  it('should render the correct default button ', () => {
    const wrapper = render(<Button {...defaultProps}>TestText</Button>);
    const el = wrapper.getByText('TestText') as HTMLButtonElement;

    expect(el).toBeInTheDocument;
    expect(el.tagName).toEqual('BUTTON');
    expect(el.disabled).toBeFalsy();
    fireEvent.click(el);
    expect(defaultProps.onClick).toHaveBeenCalled();
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Test</Button>)
    const el = wrapper.getByText('Test');

    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('btn-primary btn-lg test-class')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href='http://www.baidu.com'>Link</Button>)
    const el = wrapper.getByText('Link') as HTMLAnchorElement;

    expect(el).toBeInTheDocument();
    expect(el.tagName).toEqual('A')
    expect(el).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>)
    const el = wrapper.getByText('Disabled') as HTMLButtonElement;

    expect(el).toBeInTheDocument()
    expect(el.disabled).toBeTruthy()
    fireEvent.click(el)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })

})