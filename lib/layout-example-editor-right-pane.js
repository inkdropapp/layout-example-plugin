'use babel'

import * as React from 'react'

export default function LayoutExampleEditorRightPane(props) {
  return (
    <div className="layout-example editor-right-pane">
      Editor Right Pane
      <pre>props = {JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
