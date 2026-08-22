import type React from 'react'

import { getEnv } from './env'

export interface LayoutExample {
  /** The name the component is registered under and referenced by in layouts. */
  componentName: string
  component: React.ComponentType<any>
  /** Mount the component if it is hidden, unmount it otherwise. */
  toggle: () => void
  /** Mount the component into its layout. */
  show: () => void
  /** Unmount the component from its layout. */
  hide: () => void
}

interface LayoutExampleOptions {
  componentName: string
  component: React.ComponentType<any>
  /** The layout region the component belongs to, e.g. `'editor-toolbar'`. */
  layoutName: string
  /**
   * Places the component into the layout. Each example supplies its own so it
   * can pick the position — appended, or before/after a built-in component.
   */
  show: () => void
}

/**
 * Bundles a layout component with the show/hide/toggle trio that mounts and
 * unmounts it at runtime, which is what the plugin's toggle commands dispatch.
 */
export function defineLayoutExample(options: LayoutExampleOptions): LayoutExample {
  const { componentName, component, layoutName, show } = options

  const hide = () => getEnv().layouts.removeComponentFromLayout(layoutName, componentName)
  const isVisible = () => getEnv().layouts.indexOfComponentInLayout(layoutName, componentName) >= 0
  const toggle = () => (isVisible() ? hide() : show())

  return { componentName, component, toggle, show, hide }
}
