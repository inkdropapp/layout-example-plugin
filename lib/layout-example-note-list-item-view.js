'use babel'

import * as React from 'react'
import PropTypes from 'prop-types'

export default function LayoutExampleNoteListItemView(props) {
  const { active, focused, note } = props
  const { title } = note

  function handleClick(e) {
    props.onClick && props.onClick(e, props.note)
    e.preventDefault()
    e.stopPropagation()
  }

  function handleDblClick(e) {
    props.onDblClick && props.onDblClick(e, props.note)
    e.preventDefault()
    e.stopPropagation()
  }

  function handleContextMenu(e) {
    props.onContextMenu && props.onContextMenu(e, props.note)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={`layout-example note-list-item-view ${active &&
        'active'} ${focused && 'focused'}`}
      onClick={handleClick}
      onDoubleClick={handleDblClick}
      onContextMenu={handleContextMenu}
    >
      {title}
    </div>
  )
}

LayoutExampleNoteListItemView.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  note: PropTypes.object,
  onClick: PropTypes.func,
  onDblClick: PropTypes.func,
  onContextMenu: PropTypes.func
}

export function registerAsNoteListItemView() {
  inkdrop.components.registerClass(
    LayoutExampleNoteListItemView,
    'CustomNoteListItemView'
  )
}

export function unregisterAsNoteListItemView() {
  inkdrop.components.deleteClass(
    LayoutExampleNoteListItemView.default,
    'CustomNoteListItemView'
  )
}
