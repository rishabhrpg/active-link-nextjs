import { useRouter } from "next/router.js";

interface ActiveRouterConfig {
  activeClass: string;
}

export const useActiveRouter = (config?: ActiveRouterConfig) => {
  const router = useRouter();

  const registerRoute = (
    path: string[],
    configOverride?: ActiveRouterConfig
  ) => {
    const classes: string[] = [];
    const href = "/" + path.join("/");

    if (config || configOverride?.activeClass) {
      const currentPath = router.asPath;

      if (currentPath !== href) {
        return { href, className: "" };
      }
    }

    if (configOverride?.activeClass) {
      classes.push(configOverride.activeClass);
    } else if (config && config.activeClass) {
      classes.push(config.activeClass);
    } else {
      classes.push("active"); // Default class name
    }

    return { href, className: classes.join(" ") };
  };

  return { registerRoute };
};