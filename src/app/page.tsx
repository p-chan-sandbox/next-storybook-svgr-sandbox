import IconPNG from './icon.png'
import IconSVG, { ReactComponent as IconComponent } from './icon.svg'

const Page = () => {
  return (
    <div>
      <h1>next-storybook-svgr-sandbox</h1>
      <h2>IconPNG</h2>
      <img src={IconPNG.src} alt="" />
      <h2>IconSVG</h2>
      <img src={IconSVG} alt="" />
      <h2>IconComponent</h2>
      <IconComponent />
    </div>
  )
}

export default Page
