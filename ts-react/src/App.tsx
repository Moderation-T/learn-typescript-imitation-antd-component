import React from 'react';
import { useEffect } from 'react';
import Hello from './components/Hello'
import useMousePosition from './hooks/useMousePosition';
import useLoaderStatus from './hooks/useLoaderStatus';
import { useState } from 'react';
import { message } from 'ant-design-vue';


interface IDogImg {
  message: string,
  status: string
}

function App() {
  const position = useMousePosition()
  const [updateImg, setUpdateImg] = useState(true)

  const getDogImgData = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    return data.json();
  }

  const { data, loading } = useLoaderStatus(getDogImgData, [updateImg]);
  const dogImgRes = data as IDogImg

  return (
    <div className="App">
      <div>
        app
        x:{position.x}
        y:{position.y}
      </div>
      <Hello message='hello everybody'></Hello>
      <div>
        ----------------------------------------
      </div>
      <div>
        <button onClick={() => { setUpdateImg(!updateImg) }}>请求图片</button>
        <div>status:{loading ? 'loading...' : dogImgRes.status}</div>
        <img src={dogImgRes && dogImgRes.message} alt="dog" />
      </div>

    </div>
  );
}

export default App;
