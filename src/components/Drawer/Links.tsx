import { ChevronDown } from "../icons/";

export type LinkMap = Map<string, Link>;
export interface Link {
  path?: string;
  children?: LinkMap;
}

interface LinksProps {
  activeTitle: string;
  linkMap: LinkMap;
  isSideDrawer?: boolean;
}

const Links = (props: LinksProps) => {
  const { linkMap } = props;
  const linkClass = (title: string, className: string) =>
    `${className} ${props.activeTitle === title ? "link" : "link link-hover"}`;

  return (
    <>
      {Array.from(linkMap.keys()).map((key) => {
        const link = linkMap.get(key);

        if (!link.children) {
          return (
            <li>
              <a
                class={linkClass(
                  key,
                  "inline-block whitespace-nowrap overflow-hidden rounded-lg"
                )}
                href={link.path}
              >
                {key}
              </a>
            </li>
          );
        }

        return (
          <li tabindex={0}>
            <a
              href={link.path}
              class={linkClass(
                key,
                "flex justify-between items-center overflow-hidden rounded-lg"
              )}
            >
              <span class="inline-block whitespace-nowrap">{key}</span>
              <ChevronDown
                className={`fill-current h-5 w-5 ${
                  props.isSideDrawer ? "-rotate-90" : ""
                }`}
              />
            </a>

            <ul
              class={`p-4 rounded-lg ${props.isSideDrawer ? "-mt-4" : ""}`}
              style="background-color: hsl(var(--b1));"
            >
              {Array.from(link.children.keys()).map((childKey) => {
                const childLink = link.children.get(childKey);
                const href = childLink.path
                  ? link.path + childLink.path
                  : link.path;

                return (
                  <li>
                    <a
                      class={linkClass(
                        childKey,
                        "inline-block whitespace-nowrap overflow-hidden rounded-lg"
                      )}
                      href={href}
                    >
                      {childKey}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default Links;
