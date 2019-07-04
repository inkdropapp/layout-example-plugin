'use babel'

import * as React from 'react'
import { logger } from 'inkdrop'
import { CompositeDisposable } from 'event-kit'

export default class LayoutExampleMessageDialog extends React.Component {
  // Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable
  subscriptions = new CompositeDisposable()

  constructor(props) {
    super(props)

    // Register command that toggles this dialog
    this.subscriptions.add(
      inkdrop.commands.add(document.body, {
        'layout-example:toggle-dialog': this.toggle
      })
    )
  }

  componentWillUnmount() {
    this.subscriptions.dispose()
  }

  render() {
    const MessageDialog = inkdrop.components.getComponentClass('MessageDialog')
    return (
      <MessageDialog ref={el => (this.dialogRef = el)} title="LayoutExample">
        LayoutExample was toggled!
      </MessageDialog>
    )
  }

  toggle = () => {
    logger.debug('dialog was toggled!')
    const { dialogRef } = this
    if (!dialogRef.isShown) {
      dialogRef.showDialog()
    } else {
      dialogRef.dismissDialog()
    }
  }
}
