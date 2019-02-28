# monorepo

A working configuration consisting of:'

- [x] TypeScript
- [x] Lerna
- [x] Monorepo
- [x] Cross-linked packages
- [x] Create-React-App for the app container


# Notes

Ensure you do this in the `tsconfig.json` for your projects.

- `jsx: preserve` for the **app** projects.
- `jsx: react` for the **library** projects.

Else TypeScript will complain for `"Module not Found"`


Every library project should have the following in the `package.json`. This allows 
type resolution for TypeScript and runtime resolution for webpack.

```
  "types": "build/index.d.ts",
  "main": "build/index.js",
```
