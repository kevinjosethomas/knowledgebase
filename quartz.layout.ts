import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "kevinjosethomas/knowledgebase",
        repoId: "R_kgDOMRuqCg",
        category: "General",
        categoryId: "DIC_kwDOMRuqCs4CnlDl",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      Website: "https://kevinjosethomas.com/",
      GitHub: "https://github.com/kevinjosethomas",
      Linkedin: "https://linkedin.com/in/kevinjosethomas",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        sortFn: (a, b) => {
          const getDate = (node: FileNode) =>
            typeof node.file?.frontmatter?.date === "string"
              ? new Date(node.file.frontmatter.date)
              : null

          const sortByDate = (node: FileNode) =>
            node.file?.filePath?.startsWith("content/Thoughts/") ||
            node.file?.filePath?.startsWith("content/People/")

          if (sortByDate(a) && sortByDate(b)) {
            const dateA = getDate(a)
            const dateB = getDate(b)

            if (dateA && dateB) {
              const diff = (dateB?.getTime() || 0) - (dateA?.getTime() || 0)
              return diff !== 0
                ? diff
                : a.displayName.localeCompare(b.displayName, undefined, {
                    numeric: true,
                    sensitivity: "base",
                  })
            }

            if (dateA && !dateB) return -1
            if (!dateA && dateB) return 1
          }

          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        },
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
