import type { ButtonProps, CommandButtonProps } from '@inkdropapp/types'
import type React from 'react'
import { createElement } from 'react'

import { getEnv } from './env'

export interface StreamlineIconProps extends React.SVGProps<SVGSVGElement> {
  /** One of the icon names shipped in `@inkdropapp/streamline-icons`. */
  name: string
}

export interface SideBarMenuItemProps {
  className?: string
  indentLevel?: number
  onClick?: () => void
  renderIcon?: () => React.ReactNode
  children?: React.ReactNode
}

/**
 * Wraps a class from the app's component registry in a module-level component.
 *
 * Looking the class up inside a rendering component would make React see a
 * newly-created component type on every render; going through a stable wrapper
 * keeps the element type constant while still resolving the class lazily, after
 * `activate()` has handed us the environment.
 */
function fromRegistry<P extends object>(className: string): React.FC<P> {
  return props => createElement(getEnv().components.getComponentClass<P>(className)!, props)
}

/**
 * The app's built-in SVG icon component. Inkdrop 6 dropped the Font Awesome and
 * Semantic UI icon fonts, so plugins borrow this instead of rendering an
 * `<i className="fa fa-…" />`.
 */
export const StreamlineIcon = fromRegistry<StreamlineIconProps>('StreamlineIcon')

/** The app's standard button, which renders a Streamline `icon` and a hover `tooltip`. */
export const Button = fromRegistry<ButtonProps>('Button')

/**
 * The app's header-bar icon button. It is a `CommandButton`: give it a `command` and
 * it dispatches it on click and shows the command's keybinding in its tooltip.
 */
export const AppHeaderButton = fromRegistry<CommandButtonProps>('AppHeaderButton')

/** The app's sidebar row, so a custom item matches the built-in ones. */
export const SideBarMenuItem = fromRegistry<SideBarMenuItemProps>('SideBarMenuItem')
