# monorepo

A working configuration consisting of:'

- [x] TypeScript
- [x] Lerna
- [x] Monorepo
- [x] Cross-linked packages
- [x] Create-React-App for the app container


# Notes

Ensure you do this:

- `jsx: preserve` for the **app** project.
- `jsx: react` for the **library** projects.

Else TypeScript will complain for `"Module not Found"`
