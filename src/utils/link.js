import navbarData from "../data/navbarData";

const sectionIds = new Set(navbarData.map((item) => item.id));

// A link is dead when it is empty, a bare "#", or an anchor to a section that does not exist on the page.
export function isDeadLink(href) {
  if (!href || href === "#") return true;
  if (href.startsWith("#")) return !sectionIds.has(href.slice(1));
  return false;
}

export const disabledLinkClass = "opacity-50 grayscale cursor-not-allowed select-none";
