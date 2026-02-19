import { FolderState } from "../ExplorerNode"

type MaybeHTMLElement = HTMLElement | undefined
let currentMobileExplorerState: FolderState[]

function openMobileExplorer() {
  const panel = document.getElementById("mobile-explorer-panel")
  const backdrop = document.getElementById("mobile-explorer-backdrop")
  const btn = document.getElementById("mobile-explorer-btn")

  panel?.classList.add("open")
  backdrop?.classList.add("active")
  btn?.setAttribute("aria-expanded", "true")
  document.body.classList.add("mobile-explorer-open")
}

function closeMobileExplorer() {
  const panel = document.getElementById("mobile-explorer-panel")
  const backdrop = document.getElementById("mobile-explorer-backdrop")
  const btn = document.getElementById("mobile-explorer-btn")

  panel?.classList.remove("open")
  backdrop?.classList.remove("active")
  btn?.setAttribute("aria-expanded", "false")
  document.body.classList.remove("mobile-explorer-open")
}

function toggleMobileFolder(evt: MouseEvent) {
  evt.stopPropagation()
  const target = evt.target as MaybeHTMLElement
  if (!target) return

  const isSvg = target.nodeName === "svg"
  const childFolderContainer = (
    isSvg
      ? target.parentElement?.nextSibling
      : target.parentElement?.parentElement?.nextElementSibling
  ) as MaybeHTMLElement
  const currentFolderParent = (
    isSvg ? target.nextElementSibling : target.parentElement
  ) as MaybeHTMLElement
  if (!(childFolderContainer && currentFolderParent)) return

  childFolderContainer.classList.toggle("open")
  const fullFolderPath = currentFolderParent.dataset.folderpath as string
  toggleCollapsedByPath(currentMobileExplorerState, fullFolderPath)
  localStorage.setItem("fileTree", JSON.stringify(currentMobileExplorerState))
}

function toggleCollapsedByPath(array: FolderState[], path: string) {
  const entry = array.find((item) => item.path === path)
  if (entry) {
    entry.collapsed = !entry.collapsed
  }
}

function setupMobileExplorer() {
  const btn = document.getElementById("mobile-explorer-btn")
  if (!btn) return

  const panel = document.getElementById("mobile-explorer-panel")
  const backdrop = document.getElementById("mobile-explorer-backdrop")
  const closeBtn = document.getElementById("mobile-explorer-close")

  btn.addEventListener("click", openMobileExplorer)
  window.addCleanup(() => btn.removeEventListener("click", openMobileExplorer))

  if (backdrop) {
    backdrop.addEventListener("click", closeMobileExplorer)
    window.addCleanup(() => backdrop.removeEventListener("click", closeMobileExplorer))
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileExplorer)
    window.addCleanup(() => closeBtn.removeEventListener("click", closeMobileExplorer))
  }

  const escHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeMobileExplorer()
  }
  document.addEventListener("keydown", escHandler)
  window.addCleanup(() => document.removeEventListener("keydown", escHandler))

  if (panel) {
    const linkHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a[data-for]") || target.closest("a.folder-title")) {
        closeMobileExplorer()
      }
    }
    panel.addEventListener("click", linkHandler)
    window.addCleanup(() => panel.removeEventListener("click", linkHandler))
  }

  if (panel && btn.dataset.behavior === "collapse") {
    for (const item of panel.getElementsByClassName(
      "folder-button",
    ) as HTMLCollectionOf<HTMLElement>) {
      item.addEventListener("click", toggleMobileFolder)
      window.addCleanup(() => item.removeEventListener("click", toggleMobileFolder))
    }
  }

  if (panel) {
    for (const item of panel.getElementsByClassName(
      "folder-icon",
    ) as HTMLCollectionOf<HTMLElement>) {
      item.addEventListener("click", toggleMobileFolder)
      window.addCleanup(() => item.removeEventListener("click", toggleMobileFolder))
    }
  }

  // Restore folder state
  const storageTree = localStorage.getItem("fileTree")
  const useSavedFolderState = btn.dataset.savestate === "true"
  const oldExplorerState: FolderState[] =
    storageTree && useSavedFolderState ? JSON.parse(storageTree) : []
  const oldIndex = new Map(oldExplorerState.map((entry) => [entry.path, entry.collapsed]))
  const newExplorerState: FolderState[] = btn.dataset.tree
    ? JSON.parse(btn.dataset.tree)
    : []
  currentMobileExplorerState = []
  for (const { path, collapsed } of newExplorerState) {
    currentMobileExplorerState.push({ path, collapsed: oldIndex.get(path) ?? collapsed })
  }

  // Apply folder states
  if (panel) {
    currentMobileExplorerState.forEach((folderState) => {
      const folderLi = panel.querySelector(
        `[data-folderpath='${folderState.path}']`,
      ) as MaybeHTMLElement
      const folderUl = folderLi?.parentElement?.nextElementSibling as MaybeHTMLElement
      if (folderUl) {
        folderState.collapsed
          ? folderUl.classList.remove("open")
          : folderUl.classList.add("open")
      }
    })
  }
}

document.addEventListener("nav", () => {
  closeMobileExplorer()
  setupMobileExplorer()
})
