import React, {
  PureComponent,
  FC,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  Component,
} from 'react'
import { useRouter } from 'next/router'
import { HomeDemo, HomeSwipe } from '@/components'

/**
 * 函数组件上，可以直接使用ref吗？
 * ref可以直接作用在class组件上，（实例）
 * 不能直接作用在函数组件上，但是可以借助第三方api帮助作用；
 */

interface HomePage {}

const HomePage: FC<HomePage> = (props) => {
  const [count, setCount] = useState(0)
  const [options, setOption] = useState({ page: 1, size: 5 })

  // 借助useRef实现直接访问子组件的方法和属性
  const swipeRef = useRef()

  // const router = useRouter()
  // const { pid } = router.query
  // useEffect(() => {
  //   console.log('update-count:', count)
  // }, [count])

  // const handleClick = useCallback(() => {}, [])

  // const getCount = useMemo(() => {
  //   return count * 10 // 优化一段计算逻辑
  // }, [count]) // 提供了一个手动更新依赖

  return (
    <div>
      <h1
        onClick={() => {
          // 这次更新，父组件更新，
          // setCount((count) => count + 1)
          console.log('swipeRef.current:', swipeRef.current)
          ;(swipeRef.current as any).inputRef.current.focus()
          ;(swipeRef.current as any).handleImageClick()
        }}
      >
        HomePage
      </h1>

      <HomeSwipe ref={swipeRef}></HomeSwipe>

      <HomeDemo></HomeDemo>
    </div>
  )
}

export default HomePage

/**
 * class Person extends PureComponent {}
 * 二个手段：class组件
 * 1. shouldComponentUpdate 生命周期优化
 * 2. PureComponent => memo
 *
 *
 * 三个函数组件优化手段：
 *
 * memo: 优化函数组件； 用来优化函数组件多余的渲染，但是一旦使用传递给子组件的是一个函数的话，这个memo就失效了
 * useCallback:优化函数； 可以对传递子组件的函数进行优化
 * （函数每次都会返回一个新的函数具柄，套上useCallback之后，会优化这个函数具柄，比较上一次和这次的函数具柄是否一致，如果一致就不更新了）
 *
 * useMemo: 优化计算逻辑；
 */
