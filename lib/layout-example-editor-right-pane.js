'use babel'

import * as React from 'react'

export default function LayoutExampleEditorRightPane(props) {
  return (
    <div className="layout-example editor-right-pane">
      Editor Right Pane
      <pre>props = {JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export const componentName = LayoutExampleEditorRightPane.name

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
  inkdrop.layouts.insertComponentToLayoutAfter(
    layoutName,
    'Editor',
    componentName
  )
}
