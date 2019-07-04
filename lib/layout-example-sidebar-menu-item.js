'use babel'

import * as React from 'react'
import { logger } from 'inkdrop'

export default function LayoutExampleSidebarMenuItem() {
  const { SideBarMenuItem } = inkdrop.components.classes

  const handleClick = () => {
    logger.debug('Clicked!')
  }

  return (
    <SideBarMenuItem
      className="layout-example"
      indentLevel={0}
      onClick={handleClick}
      renderIcon={() => <i className="flask icon" />}
    >
      Custom Sidebar Item
    </SideBarMenuItem>
  )
}
