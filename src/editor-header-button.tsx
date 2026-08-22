import { AppHeaderButton } from './app-components'
import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleEditorHeaderButton'
const layoutName = 'editor-header'

/**
 * `AppHeaderButton` is a `CommandButton`, so it dispatches `command` on click and
 * builds its tooltip from `title` plus that command's current keybinding — no
 * click handler of our own needed.
 */
function EditorHeaderButton() {
  return (
    <AppHeaderButton
      className="layout-example editor-header-button"
      title="Toggle the LayoutExample dialog"
      command="layout-example:toggle-dialog"
      icon="module-puzzle"
    />
  )
}

export const editorHeaderButton = defineLayoutExample({
  componentName,
  component: EditorHeaderButton,
  layoutName,
  show: () =>
    getEnv().layouts.insertComponentToLayoutBefore(layoutName, 'EditorHeaderMore', componentName)
})
