# next-storybook-svgr-sandbox

> Next.js と Storybook で SVG を Type-Safe に扱いたい

## 理想

```tsx
import ExampleImageURL, { ReactComponent as ExampleImage } from "./example.svg";

export const Component = () => {
  return (
    <>
      <img src={ExampleImageURL} />
      <ExampleImage />
    </>
  );
};
```
