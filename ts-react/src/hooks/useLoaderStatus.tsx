import { useState, useEffect } from 'react'

/**
 * 加载状态的自定义 hook
 *
 * @param {() => void} asyncFun 异步加载的请求函数
 * @param {any[]} [dep=[]] useEffect 的第二个参数
 * @returns
 */



const useLoaderStatus = (asyncFun: () => void, dep: any[] = []) => {
  // loading:true 默认是加载状态
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true)

  const updateStatus = async () => {
    setLoading(true);
    const asyncRes = await asyncFun();
    setData(asyncRes);
    setLoading(false);
  }

  useEffect(() => {
    updateStatus();
  }, dep)

  return { data, loading }
}

export default useLoaderStatus;