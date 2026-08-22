import type { Dialog as DialogComponent } from '@inkdropapp/types'
import { logger, useModal } from 'inkdrop'
import { useEffect } from 'react'

import { getEnv } from './env'

export const componentName = 'LayoutExampleMessageDialog'

export type LayoutExampleDialogCommands = {
  'layout-example:toggle-dialog': undefined
}

/**
 * A dialog mounted into the `modal` layout that shows and hides itself in
 * response to its own command.
 *
 * Inkdrop 6 deprecated the imperative `MessageDialog` in favour of the `Dialog`
 * component driven by the `useModal` hook's visibility state.
 */
export function LayoutExampleMessageDialog() {
  const Dialog = getEnv().components.classes.Dialog as DialogComponent
  const modal = useModal()
  const { show, close } = modal
  const { visible } = modal.state

  useEffect(() => {
    const sub = getEnv().commands.add<LayoutExampleDialogCommands>(document.body, {
      'layout-example:toggle-dialog': () => {
        logger.debug('dialog was toggled!')
        if (visible) close()
        else show()
      }
    })
    return () => sub.dispose()
  }, [visible, show, close])

  return (
    <Dialog {...modal.state} onBackdropClick={close} onEscKeyDown={close}>
      <Dialog.Title>LayoutExample</Dialog.Title>
      <Dialog.Content>LayoutExample was toggled!</Dialog.Content>
      <Dialog.Actions>
        <button className="ui small button" onClick={close} autoFocus>
          Close
        </button>
      </Dialog.Actions>
    </Dialog>
  )
}
