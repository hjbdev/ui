# hjbdev UI

It's basically Tailwind UI but in Vue components

## Tailwind

You'll need to define this in your Tailwind config.

```js
theme: {
        extend: {
            colors: ({ theme }) => ({
                primary: {
                    DEFAULT: colors.purple[500],
                    ...colors.purple
                }
            })
        },
    },
```

