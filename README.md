# UseActiveRouter Hook  <a href="https://twitter.com/intent/tweet?text=%22Effortlessly%20Highlight%20Active%20Links%20in%20Your%20Next.js%20Application%20with%20useActiveRouter%20Hook%22%20by%20Rishabh%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Frishabhrpg%2Feffortlessly-highlight-active-links-in-your-nextjs-application-with-useactiverouter-hook-mfb" target="_blank">![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)</a>
[![downloads](https://badgen.net/npm/dt/active-link-nextjs)](https://npm-stat.com/charts.html?package=active-link-nextjs&from=2023-05-01)
[![version](https://img.shields.io/npm/v/active-link-nextjs?color=blue)](https://www.npmjs.com/package/active-link-nextjs) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt)
![TypeScript](https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)

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

This package is released under the MIT License. See the [LICENSE](https://github.com/rishabhrpg/active-link-nextjs/blob/main/LICENSE.txt) file for details.
