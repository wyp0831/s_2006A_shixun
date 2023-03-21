import React, { FC, memo, forwardRef, useRef, useImperativeHandle } from 'react'

interface HomeSwipeProps {
  count?: number
  ref: any
}

// 使用场景： forwardRef 搭配useImperativeHandle使用，经常会用在dom操作的库或者表单提交上；

// forwardRef 给子组件使用，帮助父组件获取方法和属性
const HomeSwipe: FC<any> = forwardRef((props, ref) => {
  // console.log('ref:', ref)

  // 希望，将以下的方法和属性给父组件

  // 属性
  const inputRef = useRef<HTMLInputElement | null>(null)

  // 方法
  const handleImageClick = () => {
    console.log('imageClick')
  }

  useImperativeHandle(ref, () => {
    // 生命周期，return的东西，就会被父组件获取到
    return {
      inputRef,
      handleImageClick,
    }
  })

  return (
    <div>
      HomeSwipe
      <input type="text" ref={inputRef} />
    </div>
  )
})
HomeSwipe.displayName = 'HomeSwipe'
export default memo(HomeSwipe)
