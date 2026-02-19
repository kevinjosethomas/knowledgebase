import { QuartzFilterPlugin } from "../types"

export const RemoveEmpty: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveEmpty",
  shouldPublish(_ctx, [tree, _vfile]) {
    // Filter out pages with no meaningful content (empty body)
    const children = (tree as any).children ?? []
    if (children.length === 0) return false

    // A page with only frontmatter (head element) and no body content
    const hasContent = children.some(
      (child: any) => child.type !== "yaml" && child.type !== "toml",
    )
    return hasContent
  },
})
