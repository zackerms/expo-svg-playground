# ExpoでSVGを利用する

## Install
```sh
npx expo install react-native-svg
npm install --save-dev react-native-svg-transformer
```

## Configure
- metro.config.js
```js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  return config;
})();
```

## TypeScript
- declarations.d.ts
```ts
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

## 参考文献
- https://docs.expo.dev/ui-programming/using-svgs/
- https://github.com/kristerkari/react-native-svg-transformer
- https://github.com/software-mansion/react-native-svg#installation
- https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md