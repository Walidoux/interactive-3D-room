import { Application } from '@splinetool/runtime'
import { Component, onMount } from 'solid-js'

import styles, { scene } from './Scene.module.scss'

export const Scene: Component = () => {
  const canvas = <canvas class={styles.scene} />

  console.log(scene)

  onMount(() => {
    const scene = new Application(canvas as HTMLCanvasElement)
    scene
      .load('https://prod.spline.design/u8ay3m2mAC8tiC3Z/scene.splinecode')
      .catch((error) => error)
  })

  return canvas
}
