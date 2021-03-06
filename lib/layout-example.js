'use babel'

import { CompositeDisposable } from 'event-kit'
import LayoutExampleMessageDialog from './layout-example-message-dialog'
import * as LayoutExampleLeftMostBar from './layout-example-left-most-bar'
import * as LayoutExampleSidebarMenuItem from './layout-example-sidebar-menu-item'
import * as LayoutExampleEditorStatusBarItem from './layout-example-editor-status-bar-item'
import * as LayoutExampleEditorLeftPane from './layout-example-editor-left-pane'
import * as LayoutExampleEditorRightPane from './layout-example-editor-right-pane'
import * as LayoutExampleEditorToolbarButton from './layout-example-editor-toolbar-button'
import * as LayoutExampleNoteListItemView from './layout-example-note-list-item-view'

class LayoutExamplePlugin {
  subscriptions = new CompositeDisposable()

  activate() {
    const { components, layouts, commands } = inkdrop
    components.registerClass(LayoutExampleMessageDialog)
    components.registerClass(LayoutExampleLeftMostBar.default)
    components.registerClass(LayoutExampleSidebarMenuItem.default)
    components.registerClass(LayoutExampleEditorStatusBarItem.default)
    components.registerClass(LayoutExampleEditorLeftPane.default)
    components.registerClass(LayoutExampleEditorRightPane.default)
    components.registerClass(LayoutExampleEditorToolbarButton.default)
    layouts.addComponentToLayout('modal', 'LayoutExampleMessageDialog')

    LayoutExampleNoteListItemView.registerAsNoteListItemView()

    this.subscriptions.add(
      commands.add(document.body, {
        'layout-example:toggle-left-most-bar': LayoutExampleLeftMostBar.toggle,
        'layout-example:toggle-sidebar-menu-item':
          LayoutExampleSidebarMenuItem.toggle,
        'layout-example:toggle-editor-status-bar-item':
          LayoutExampleEditorStatusBarItem.toggle,
        'layout-example:toggle-editor-left-pane':
          LayoutExampleEditorLeftPane.toggle,
        'layout-example:toggle-editor-right-pane':
          LayoutExampleEditorRightPane.toggle,
        'layout-example:toggle-editor-toolbar-button':
          LayoutExampleEditorToolbarButton.toggle
      })
    )
  }

  deactivate() {
    const { components, layouts } = inkdrop

    this.subscriptions.dispose()

    layouts.removeComponentFromLayout('modal', 'LayoutExampleMessageDialog')
    components.deleteClass(LayoutExampleMessageDialog)
    components.deleteClass(LayoutExampleLeftMostBar.default)
    components.deleteClass(LayoutExampleSidebarMenuItem.default)
    components.deleteClass(LayoutExampleEditorStatusBarItem.default)
    components.deleteClass(LayoutExampleEditorLeftPane.default)
    components.deleteClass(LayoutExampleEditorRightPane.default)
    components.deleteClass(LayoutExampleEditorToolbarButton.default)

    LayoutExampleNoteListItemView.unregisterAsNoteListItemView()
  }
}

module.exports = new LayoutExamplePlugin()
