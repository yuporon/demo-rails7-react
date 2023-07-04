module.exports = {
  prettier: true,
  space: true,
  extends: ["xo-react"],
  ignores: [
    "*.js",

    // 自動生成されたディレクトリ/ファイルを除外
    "graphql-codegen/",
    "next-env.d.ts",

    // 購入したテンプレートのディレクトリ/ファイルを除外
    "typescript/packages/mui-minimal-dashboard/",
  ],
  rules: {
    // パフォーマンスチューニング
    "import/no-cycle": [
      "error",
      {
        ignoreExternal: true,
        maxDepth: 1,
      },
    ],

    // Reactコンポーネントのみ、ファイル名をpascalCase とする
    // @see https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1639
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],

    // Nextjsでglobalのprocessを使用するため
    "n/prefer-global/process": ["error", "always"],

    // 一部モジュールは仕様上必要なため許可する
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["dayjs/locale/*", "**/*.css"],
      },
    ],

    // 拡張子importを無効にする
    // 1. jsの拡張子importは型情報が取得できないため
    // 2. tsの拡張子importはtsonfigとコンフリクトするため
    "n/file-extension-in-import": "off",

    // 拡張子importを無効にする
    // ※ 同上
    "import/extensions": "off",

    // 各種ライブラリにて命名が統一されていないため無効にする
    // @see https://github.com/xojs/eslint-config-xo-typescript/blob/eded22d075f499233ab41a0b9ed3369a55fc803e/index.js
    "@typescript-eslint/naming-convention": "off",

    // TypeScript用のオプション追加
    // @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md#allowexpressions
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],

    // xo-react v0.20.0 Breaking Changes
    // booleanはmaterial-uiなどを参考にしているため無効にする
    // @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    "react/boolean-prop-naming": "off",

    // xo-react v0.27.0 Breaking Changes
    // 現状過去バージョンの指定に戻しているが、対応するか要検討
    // @see https://github.com/xojs/eslint-config-xo-react/releases/tag/v0.27.0
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
      },
    ],

    // React17以降のJSXトランスフォームへ対応
    // JSX記述時にimport React from 'react'明示的にしなくても良いようにする
    // @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    // @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
