import IconPNG from './icon.png'
import IconSVG from './icon.svg'
import icon from './icon.svg?url'
import Image from 'next/image'

import styles from './page.module.css'

const Page = () => {
  return (
    <div>
      <h1>next-storybook-svgr-sandbox</h1>
      <h2>PNG</h2>
      <img src={IconPNG.src} alt="" />
      <h2>SVG (URL)</h2>
      <Image src={icon} alt="" />
      <h2>SVG (Component)</h2>
      <IconSVG />
      <h2>PNG (CSS)</h2>
      <div className={styles.png} />
      <h2>SVG (CSS)</h2>
      <div className={styles.svg} />
    </div>
  )
}

export default Page
