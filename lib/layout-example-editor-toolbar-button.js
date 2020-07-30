'use babel'

import * as React from 'react'

export default function LayoutExampleEditorToolbarButton() {
  return (
    <button title='Custom Toolbar Button' className='mde-toolbar-item'>
      <i className="fa fa-flask" />
    </button>
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
