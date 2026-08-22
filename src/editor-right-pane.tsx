import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleEditorRightPane'
const layoutName = 'mde'

/**
 * Dumps the props Inkdrop hands to every component in the `mde` layout, so you
 * can see what a layout component has to work with.
 */
function EditorRightPane(props: Record<string, unknown>) {
  return (
    <div className="layout-example editor-right-pane">
      Editor Right Pane
      <pre>props = {JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export const editorRightPane = defineLayoutExample({
  componentName,
  component: EditorRightPane,
  layoutName,
  show: () => getEnv().layouts.insertComponentToLayoutAfter(layoutName, 'Editor', componentName)
})
