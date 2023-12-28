# next-storybook-svgr-sandbox

> Next.js と Storybook で SVG を Type-Safe に扱いたい

```tsx
import Image from 'next/image'
import ExampleImage from './example.svg'
import exampleImage from './example.svg?url'

export const Component = () => {
  return (
    <>
      <ExampleImage />
      <Image src={exampleImage} alt="" />
      <img src={exampleImage.src} alt="" />
    </>
  )
}
```

- コンポーネントとして扱いたいときは `.svg` をインポートする
- データとして扱いたいときは `.svg?url` をインポートする
  - ただし `svg?url` としても URL が返るわけではなく、オブジェクトが返るので、若干キモい
  - `import exampleImage from './example.svg?url'` の場合、URL は `exampleImage.src` になる（ここらへんは `next/image` に渡す前提の設計だと思われる）

<details>
<summary>最初に考えていた理想形</summary>

```tsx
import ExampleImageURL, { ReactComponent as ExampleImage } from './example.svg'

export const Component = () => {
  return (
    <>
      <img src={ExampleImageURL} />
      <ExampleImage />
    </>
  )
}
```

上記のやり方は `url-loader` や `file-loader` を使うため、今は非推奨で、今後は `resourceQuery` を使うのが良いらしい。

<blockquote cite="https://react-svgr.com/docs/webpack/">
  <p>url-loader and file-loader are deprecated over Asset Modules in webpack v5. It is widely encouraged to use resourceQuery method described before.</p>
  <cite><a href="https://react-svgr.com/docs/webpack/">https://react-svgr.com/docs/webpack/</a></cite>
</blockquote>

</details>
