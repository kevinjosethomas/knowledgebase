import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { h } from "hastscript"
import { Element } from "hast"

export interface ImageGridOptions {
  // Default to auto-detect consecutive images in a paragraph
  autoGrid: boolean
}

const defaultOptions: ImageGridOptions = {
  autoGrid: true,
}

export const ImageGrid: QuartzTransformerPlugin<Partial<ImageGridOptions> | undefined> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "ImageGrid",
    htmlPlugins: () => [
      () => (tree) => {
        if (opts.autoGrid) {
          // Find paragraphs with multiple direct image children
          visit(tree, "element", (node) => {
            if (node.tagName === "p") {
              const images = node.children.filter(
                (child: any) => child.type === "element" && child.tagName === "img"
              )

              // If we have multiple images in a paragraph, convert to grid
              if (images.length > 1) {
                // Count how many images to determine grid class
                const gridClass = images.length > 3 ? "grid-4" : `grid-${images.length}`
                
                // Create grid wrapper
                const gridWrapper = h("div", { class: `image-grid ${gridClass}` }, node.children)
                
                // Replace paragraph with grid
                Object.assign(node, gridWrapper)
              }
            }
          })
        }
      },
    ],
  }
}

export default ImageGrid 