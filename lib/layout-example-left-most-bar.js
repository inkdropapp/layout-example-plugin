'use babel'

import * as React from 'react'

export default function LayoutExampleLeftMostBar() {
  return <div className="layout-example left-most-bar">Left most bar</div>
}

export const componentName = LayoutExampleLeftMostBar.name

const layoutName = 'main:full'

export function toggle() {
  const isVisible =
    inkdrop.layouts.indexOfComponentInLayout(layoutName, componentName) >= 0
  isVisible ? hide() : show()
}

export function hide() {
  inkdrop.layouts.removeComponentFromLayout(layoutName, componentName)
}

export function show() {
  inkdrop.layouts.insertComponentToLayoutBefore(
    layoutName,
    'SideBarLayout',
    componentName
  )
}
