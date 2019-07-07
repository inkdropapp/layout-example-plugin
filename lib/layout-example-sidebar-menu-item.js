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

export const componentName = LayoutExampleSidebarMenuItem.name

const layoutName = 'sidebar-menu'

export function toggle() {
  const isVisible =
    inkdrop.layouts.indexOfComponentInLayout(layoutName, componentName) >= 0
  isVisible ? hide() : show()
}

export function hide() {
  inkdrop.layouts.removeComponentFromLayout(layoutName, componentName)
}

export function show() {
  inkdrop.layouts.insertComponentToLayoutAfter(
    layoutName,
    'SideBarMenuItemSearch',
    componentName
  )
}
