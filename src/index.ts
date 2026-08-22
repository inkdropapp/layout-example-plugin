import type { Environment, IInkdropPlugin } from '@inkdropapp/types'

import { editorHeaderButton } from './editor-header-button'
import { editorLeftPane } from './editor-left-pane'
import { editorRightPane } from './editor-right-pane'
import { editorStatusBarItem } from './editor-status-bar-item'
import { editorToolbarButton } from './editor-toolbar-button'
import { setEnv } from './env'
import type { LayoutExample } from './layout-example'
import { leftMostBar } from './left-most-bar'
import { componentName as messageDialogName, LayoutExampleMessageDialog } from './message-dialog'
import { registerAsNoteListItemView, unregisterAsNoteListItemView } from './note-list-item-view'
import { sidebarMenuItem } from './sidebar-menu-item'

const MODAL_LAYOUT = 'modal'

const layoutExamples: LayoutExample[] = [
  leftMostBar,
  sidebarMenuItem,
  editorHeaderButton,
  editorStatusBarItem,
  editorLeftPane,
  editorRightPane,
  editorToolbarButton
]

type LayoutExampleCommands = {
  'layout-example:toggle-left-most-bar': undefined
  'layout-example:toggle-sidebar-menu-item': undefined
  'layout-example:toggle-editor-header-button': undefined
  'layout-example:toggle-editor-status-bar-item': undefined
  'layout-example:toggle-editor-left-pane': undefined
  'layout-example:toggle-editor-right-pane': undefined
  'layout-example:toggle-editor-toolbar-button': undefined
}

class LayoutExamplePlugin implements IInkdropPlugin {
  private subscription: { dispose(): void } | null = null

  activate(env: Environment) {
    setEnv(env)
    const { components, layouts, commands } = env

    components.registerClass(LayoutExampleMessageDialog, messageDialogName)
    layouts.addComponentToLayout(MODAL_LAYOUT, messageDialogName)

    for (const example of layoutExamples) {
      components.registerClass(example.component, example.componentName)
    }
    registerAsNoteListItemView()

    this.subscription = commands.add<LayoutExampleCommands>(document.body, {
      'layout-example:toggle-left-most-bar': leftMostBar.toggle,
      'layout-example:toggle-sidebar-menu-item': sidebarMenuItem.toggle,
      'layout-example:toggle-editor-header-button': editorHeaderButton.toggle,
      'layout-example:toggle-editor-status-bar-item': editorStatusBarItem.toggle,
      'layout-example:toggle-editor-left-pane': editorLeftPane.toggle,
      'layout-example:toggle-editor-right-pane': editorRightPane.toggle,
      'layout-example:toggle-editor-toolbar-button': editorToolbarButton.toggle
    })
  }

  deactivate(env: Environment) {
    const { components, layouts } = env

    this.subscription?.dispose()
    this.subscription = null

    unregisterAsNoteListItemView()
    for (const example of layoutExamples) {
      example.hide()
      components.deleteClass(example.component, example.componentName)
    }

    layouts.removeComponentFromLayout(MODAL_LAYOUT, messageDialogName)
    components.deleteClass(LayoutExampleMessageDialog, messageDialogName)

    setEnv(undefined)
  }
}

export default new LayoutExamplePlugin()
