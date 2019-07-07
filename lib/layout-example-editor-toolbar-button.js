'use babel'

import * as React from 'react'

export default function LayoutExampleEditorToolbarButton() {
  return (
    <a
      title="Custom Toolbar Button"
      className="layout-example editor-toolbar-button fa fa-flask"
    />
  )
}

export const componentName = LayoutExampleEditorToolbarButton.name

const layoutName = 'editor-toolbar'

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
