'use babel'

import * as React from 'react'
import { logger } from 'inkdrop'

export default function LayoutExampleEditorHeaderItem() {
  const handleClick = () => {
    logger.debug('Clicked!')
  }

  return (
    <div className="layout-example editor-header-item-actions">
      <button
        className={`ui button action-item no-drag`}
        data-tooltip={'Custom Editor Header Button'}
        data-position="bottom right"
        onClick={handleClick}
      >
        <i className="icon flask" />
      </button>
      <span className="separator" />
    </div>
  )
}

export const componentName = LayoutExampleEditorHeaderItem.name

const layoutName = 'editor-header'

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
    'EditorHeaderItemSpacer',
    componentName
  )
}
