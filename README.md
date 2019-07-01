# Rush with multiple version of Office UI Fabric

Run `rush install` followed by `rush build`. You will see an error,
something like

```sh
ERROR in C:\Users\hegi\source\repos\test-multiple-react\packages\test-15\src\index.tsx
./src/index.tsx
[tsl] ERROR in C:\Users\hegi\source\repos\test-multiple-react\packages\test-15\src\index.tsx(8,5)
      TS2605: JSX element type 'PrimaryButton' is not a constructor function for JSX elements.
  Type 'PrimaryButton' is missing the following properties from type 'ElementClass': setState, forceUpdate, props, state, and 2 more.

ERROR in C:\Users\hegi\source\repos\test-multiple-react\packages\test-15\src\index.tsx
./src/index.tsx
[tsl] ERROR in C:\Users\hegi\source\repos\test-multiple-react\packages\test-15\src\index.tsx(8,5)
      TS2607: JSX element class does not support attributes because it does not have a 'props' property.
```

Now comment out the `test-16` project in the `rush.json`. Now run `rush update` followed by `rush rebuild`. Now `test-15` should build successfully.
