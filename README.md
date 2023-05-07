# UseActiveRouter Hook

This is a React hook designed to be used with Next.js applications. The hook provides a function to register routes and get their active status based on the current route. This is useful for building navigations where the active link needs to be highlighted.

## Installation

To use the `useActiveRouter` hook, you can install it using `npm`

```bash
npm install active-link-nextjs
```

## Usage

To use the hook, import it from the package and call the `useActiveRouter` function in your functional component.

```tsx
import { useActiveRouter } from "active-link-nextjs";

const MyComponent: React.FC = () => {
  const { registerRoute } = useActiveRouter({ activeClass: "active-link" });

  const links = [
    registerRoute([""]),
    registerRoute(["about"]),
    registerRoute(["blog"]),
  ];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={link.href} className={link.className}>
          Link {index + 1}
        </a>
      ))}
    </nav>

    //  Or with next.js next/link
    <nav>
      <Link {...registerRoute(["page1"])}>Page 1</Link>
      <Link {...registerRoute(["page2"])}>Page 2</Link>
      <Link {...registerRoute(["page3"])}>Page 3</Link>
      <Link {...registerRoute(["page4"])}>Page 4</Link>
    </nav>
  );
};
```

The `registerRoute` function takes an array of path segments and an optional configuration object. The path segments are joined together with `/` to create the route path. The configuration object allows you to override the default `activeClass` or specify a custom one for each link.

The function returns an object containing the `href` and `className` properties, which can be used to render the link.

## Configuration

The `useActiveRouter` hook takes an optional configuration object with the following properties:

- `activeClass`: The default class name to use for active links. Defaults to `"active"`.

## License

This package is released under the MIT License. See the [LICENSE](https://github.com/username/repo/blob/master/LICENSE) file for details.
