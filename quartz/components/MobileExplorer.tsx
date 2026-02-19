import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import mobileExplorerStyle from "./styles/mobileExplorer.scss"

// @ts-ignore
import script from "./scripts/mobileExplorer.inline"
import { ExplorerNode, FileNode, Options } from "./ExplorerNode"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"

const defaultOptions = {
  folderClickBehavior: "collapse",
  folderDefaultState: "collapsed",
  useSavedState: true,
  mapFn: (node: FileNode) => {
    return node
  },
  sortFn: (a: FileNode, b: FileNode) => {
    if ((!a.file && !b.file) || (a.file && b.file)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    if (a.file && !b.file) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node: FileNode) => node.name !== "tags",
  order: ["filter", "map", "sort"],
} satisfies Options

export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  let fileTree: FileNode
  let jsonTree: string
  let lastBuildId: string = ""

  function constructFileTree(allFiles: QuartzPluginData[]) {
    fileTree = new FileNode("")
    allFiles.forEach((file) => fileTree.add(file))

    if (opts.order) {
      for (let i = 0; i < opts.order.length; i++) {
        const functionName = opts.order[i]
        if (functionName === "map") {
          fileTree.map(opts.mapFn)
        } else if (functionName === "sort") {
          fileTree.sort(opts.sortFn)
        } else if (functionName === "filter") {
          fileTree.filter(opts.filterFn)
        }
      }
    }

    const folders = fileTree.getFolderPaths(opts.folderDefaultState === "collapsed")

    if (opts.defaultOpen) {
      for (const folder of folders) {
        if (opts.defaultOpen.some((p) => folder.path === p)) {
          folder.collapsed = false
        }
      }
    }

    jsonTree = JSON.stringify(folders)
  }

  const MobileExplorer: QuartzComponent = ({
    ctx,
    cfg,
    allFiles,
    displayClass,
    fileData,
  }: QuartzComponentProps) => {
    if (ctx.buildId !== lastBuildId) {
      lastBuildId = ctx.buildId
      constructFileTree(allFiles)
    }

    return (
      <div class={classNames(displayClass, "mobile-explorer")}>
        <button
          type="button"
          id="mobile-explorer-btn"
          aria-label="Toggle navigation"
          aria-expanded="false"
          aria-controls="mobile-explorer-panel"
          data-behavior={opts.folderClickBehavior}
          data-collapsed={opts.folderDefaultState}
          data-savestate={opts.useSavedState}
          data-tree={jsonTree}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div id="mobile-explorer-backdrop" class="mobile-explorer-backdrop" />

        <div id="mobile-explorer-panel" class="mobile-explorer-panel">
          <div class="mobile-explorer-header">
            <button type="button" id="mobile-explorer-close" aria-label="Close navigation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div id="mobile-explorer-content">
            <ul id="mobile-explorer-ul">
              <ExplorerNode node={fileTree} opts={opts} fileData={fileData} />
            </ul>
          </div>
        </div>
      </div>
    )
  }

  MobileExplorer.css = mobileExplorerStyle
  MobileExplorer.afterDOMLoaded = script
  return MobileExplorer
}) satisfies QuartzComponentConstructor
