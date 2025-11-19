module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
          "prettier",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "simple-import-sort",
        "unused-imports",
        "promise",
        "import",
        "react",
        "react-native",
    ],
  settings: {
    react: {version: "detect"},
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".d.ts",
          ".android.js",
          ".android.jsx",
          ".android.ts",
          ".android.tsx",
          ".ios.js",
          ".ios.jsx",
          ".ios.ts",
          ".ios.tsx",
          ".web.js",
          ".web.jsx",
          ".web.ts",
          ".web.tsx",
        ],
      },
    },
    //  'import/resolver': {
    //      typescript: {},
    //  },
  },
  rules: {
       "react/prop-types": "off",

    "no-unused-vars": "off",
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-filename-extension": [
      "error",
      {extensions: [".js", ".jsx", ".ts", ".tsx"]},
    ],

    "react/display-name": "off",
    "react/jsx-curly-brace-presence": [
      "warn",
      {props: "never", children: "never"},
    ],
    //#region  //*=========== Unused Import ===========
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    //#endregion  //*======== Unused Import ===========
    //#region  //*=========== Import Sort ===========
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // ext library & side effect imports
          ["^@?\\w", "^\\u0000"],
          // Lib
          ["^@/hooks"],
          // static data
          ["^@/data"],
          // components
          ["^@/components", "^@/constants", "^@/lib"],
          // themes and screens
          ["^@/theme", "@/screens"],
          // zustand store
          ["^@/store"],
          // Other imports
          ["^@/"],
          // relative paths up until 3 level
          [
            "^\\./?$",
            "^\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\./\\.\\.(?!/?$)",
          ],
          ["^@/types"],
          // other that didnt fit in
          ["^"],
        ],
      },
    ],
    //#endregion  //*======== Import Sort ===========
  },
}
