'use babel'

import LayoutExampleMessageDialog from './layout-example-message-dialog'
import LayoutExampleLeftMostBar from './layout-example-left-most-bar'
import LayoutExampleSidebarMenuItem from './layout-example-sidebar-menu-item'
import LayoutExampleNoteListItemView from './layout-example-note-list-item-view'
import LayoutExampleEditorHeaderItem from './layout-example-editor-header-item'
import LayoutExampleEditorLeftPane from './layout-example-editor-left-pane'
import LayoutExampleEditorRightPane from './layout-example-editor-right-pane'
import LayoutExampleEditorToolbarButton from './layout-example-editor-toolbar-button'

class LayoutExamplePlugin {
  activate() {
    inkdrop.components.registerClass(LayoutExampleMessageDialog)
    inkdrop.components.registerClass(LayoutExampleLeftMostBar)
    inkdrop.components.registerClass(LayoutExampleSidebarMenuItem)
    inkdrop.components.registerClass(LayoutExampleEditorHeaderItem)
    inkdrop.components.registerClass(LayoutExampleEditorLeftPane)
    inkdrop.components.registerClass(LayoutExampleEditorRightPane)
    inkdrop.components.registerClass(LayoutExampleEditorToolbarButton)
    inkdrop.layouts.addComponentToLayout('modal', 'LayoutExampleMessageDialog')
    inkdrop.layouts.insertComponentToLayoutBefore(
      'main:full',
      'SideBarLayout',
      'LayoutExampleLeftMostBar'
    )
    inkdrop.layouts.insertComponentToLayoutAfter(
      'sidebar-menu',
      'SideBarMenuItemSearch',
      'LayoutExampleSidebarMenuItem'
    )
    inkdrop.layouts.insertComponentToLayoutAfter(
      'editor-header',
      'EditorHeaderItemSpacer',
      'LayoutExampleEditorHeaderItem'
    )
    inkdrop.layouts.insertComponentToLayoutBefore(
      'mde',
      'Editor',
      'LayoutExampleEditorLeftPane'
    )
    inkdrop.layouts.insertComponentToLayoutAfter(
      'mde',
      'Editor',
      'LayoutExampleEditorRightPane'
    )
    inkdrop.layouts.addComponentToLayout(
      'editor-toolbar',
      'LayoutExampleEditorToolbarButton'
    )

    // replace default NoteListItemView
    this.originalNoteListItemView = inkdrop.components.classes.NoteListItemView
    inkdrop.components.registerClass(
      LayoutExampleNoteListItemView,
      'CustomNoteListItemView'
    )
  }

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'LayoutExampleMessageDialog'
    )
    inkdrop.layouts.removeComponentFromLayout(
      'main:full',
      'LayoutExampleLeftMostBar'
    )
    inkdrop.layouts.removeComponentFromLayout(
      'sidebar-menu',
      'LayoutExampleSidebarMenuItem'
    )
    inkdrop.layouts.removeComponentFromLayout(
      'editor-header',
      'LayoutExampleEditorHeaderItem'
    )
    inkdrop.layouts.removeComponentFromLayout(
      'mde',
      'LayoutExampleEditorLeftPane'
    )
    inkdrop.layouts.removeComponentFromLayout(
      'mde',
      'LayoutExampleEditorRightPane'
    )
    inkdrop.layouts.removeComponentFromLayout(
      'editor-toolbar',
      'LayoutExampleEditorToolbarButton'
    )
    inkdrop.components.deleteClass(LayoutExampleMessageDialog)
    inkdrop.components.deleteClass(LayoutExampleLeftMostBar)
    inkdrop.components.deleteClass(LayoutExampleSidebarMenuItem)
    inkdrop.components.deleteClass(LayoutExampleEditorHeaderItem)
    inkdrop.components.deleteClass(LayoutExampleEditorLeftPane)
    inkdrop.components.deleteClass(LayoutExampleEditorRightPane)
    inkdrop.components.deleteClass(LayoutExampleEditorToolbarButton)

    // restore replacement of NoteListItemView
    inkdrop.components.classes.NoteListItemView = this.originalNoteListItemView
    inkdrop.components.deleteClass(
      LayoutExampleNoteListItemView,
      'CustomNoteListItemView'
    )
  }
}

module.exports = new LayoutExamplePlugin()
