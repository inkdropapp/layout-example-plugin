'use babel'

import * as React from 'react'

export default function LayoutExampleEditorLeftPane() {
  return <div className="layout-example editor-left-pane">Editor Left Pane</div>
}

export const componentName = LayoutExampleEditorLeftPane.name

const layoutName = 'mde'

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
    'Editor',
    componentName
  )
}
