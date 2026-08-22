import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleEditorLeftPane'
const layoutName = 'mde'

function EditorLeftPane() {
  return <div className="layout-example editor-left-pane">Editor Left Pane</div>
}

export const editorLeftPane = defineLayoutExample({
  componentName,
  component: EditorLeftPane,
  layoutName,
  show: () => getEnv().layouts.insertComponentToLayoutBefore(layoutName, 'Editor', componentName)
})
