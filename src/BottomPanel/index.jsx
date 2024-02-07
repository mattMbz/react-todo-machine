import React from 'react'

const BottomPanel = (props) => {
  return (
    <section className="
      container
      flex items-center justify-between
      fixed bottom-0
      bg-gray-300 
      w-full h-20 p-4
      z-10
    ">
      {props.children}
    </section>
  )
}

export {BottomPanel}