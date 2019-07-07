'use babel'

import * as React from 'react'

export default function LayoutExampleEditorStatusBarItem() {
  return <div className="layout-example editor-status-bar-item">Hello</div>
}

export const componentName = LayoutExampleEditorStatusBarItem.name

const layoutName = 'editor-status-bar'

export function toggle() {
  const isVisible =
    inkdrop.layouts.indexOfComponentInLayout(layoutName, componentName) >= 0
  isVisible ? hide() : show()
}

export function hide() {
  inkdrop.layouts.removeComponentFromLayout(layoutName, componentName)
}

export function show() {
  inkdrop.layouts.addComponentToLayout(layoutName, componentName)
}
