import { Button } from './app-components'
import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleEditorToolbarButton'
const layoutName = 'editor-toolbar'

function EditorToolbarButton() {
  return (
    <Button
      bare
      icon="module-puzzle"
      tooltip="Custom Toolbar Button"
      className="layout-example mde-toolbar-item focus-outline"
    />
  )
}

export const editorToolbarButton = defineLayoutExample({
  componentName,
  component: EditorToolbarButton,
  layoutName,
  show: () => getEnv().layouts.addComponentToLayout(layoutName, componentName)
})
