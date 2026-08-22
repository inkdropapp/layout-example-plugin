import type { Note } from 'inkdrop-model'
import type React from 'react'

import { getEnv } from './env'

interface NoteListItemViewProps {
  note: Note
  active: boolean
  focused: boolean
  onClick?: (e: React.MouseEvent, note: Note) => void
  onDblClick?: (e: React.MouseEvent, note: Note) => void
  onContextMenu?: (e: React.MouseEvent, note: Note) => void
}

export function LayoutExampleNoteListItemView(props: NoteListItemViewProps) {
  const { active, focused, note, onClick, onDblClick, onContextMenu } = props
  const { title } = note

  const className = [
    'layout-example',
    'note-list-item-view',
    active && 'active',
    focused && 'focused'
  ]
    .filter(Boolean)
    .join(' ')

  function handleClick(e: React.MouseEvent) {
    onClick?.(e, note)
    e.preventDefault()
    e.stopPropagation()
  }

  function handleDblClick(e: React.MouseEvent) {
    onDblClick?.(e, note)
    e.preventDefault()
    e.stopPropagation()
  }

  function handleContextMenu(e: React.MouseEvent) {
    onContextMenu?.(e, note)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={className}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDblClick}
    >
      {title}
    </div>
  )
}

export function registerAsNoteListItemView() {
  getEnv().components.registerClass(
    LayoutExampleNoteListItemView as React.ComponentType,
    'CustomNoteListItemView'
  )
}

export function unregisterAsNoteListItemView() {
  getEnv().components.deleteClass(
    LayoutExampleNoteListItemView as React.ComponentType,
    'CustomNoteListItemView'
  )
}
