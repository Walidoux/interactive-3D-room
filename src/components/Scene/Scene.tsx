import { Application } from '@splinetool/runtime'
import { Component, onMount } from 'solid-js'

import styles from './Scene.module.scss'

export const Scene: Component = () => {
  const canvas = <canvas class={styles.scene} />

  onMount(() => {
    const scene = new Application(canvas as HTMLCanvasElement)
    scene.load(process.env.SPLINE_SCENE).catch((error) => error)
  })

  return canvas
}
