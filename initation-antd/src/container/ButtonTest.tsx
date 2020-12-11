import React, { Fragment } from 'react'
import Button from '../components/Button/button';

const ButtonTest = () => {
  return (
    <Fragment>
      <h2>Button</h2>
      <Button>默认</Button>
      <Button btnType='primary' onClick={() => {
        alert('button click')
      }}>primary</Button>
      <Button btnType='danger'>danger</Button>
      <Button btnType='link' href='http://www.baidu.com' target='_blank'>link baidu</Button>
      <Button btnType='primary' size='lg'>primary large</Button>
      <Button btnType='primary' size='sm'>primary small</Button>
      <Button btnType='primary' size='sm' disabled>button disabled</Button>
      <Button btnType='link' href='http://www.baidu.com' disabled >link disabled</Button>
      <hr></hr>
    </Fragment>
  )
}

export default ButtonTest