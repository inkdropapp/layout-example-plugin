import { logger } from 'inkdrop'

import { SideBarMenuItem, StreamlineIcon } from './app-components'
import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleSidebarMenuItem'
const layoutName = 'sidebar-menu'

function SidebarMenuItem() {
  const handleClick = () => {
    logger.debug('Clicked!')
  }

  return (
    <SideBarMenuItem
      className="layout-example sidebar-menu-item"
      indentLevel={0}
      onClick={handleClick}
      renderIcon={() => <StreamlineIcon name="module-puzzle" />}
    >
      Custom Sidebar Item
    </SideBarMenuItem>
  )
}

export const sidebarMenuItem = defineLayoutExample({
  componentName,
  component: SidebarMenuItem,
  layoutName,
  show: () =>
    getEnv().layouts.insertComponentToLayoutAfter(
      layoutName,
      'SideBarMenuItemAllNotes',
      componentName
    )
})
