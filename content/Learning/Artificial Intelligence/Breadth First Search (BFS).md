---
date: '2025-01-17'
---

Breadth-first search is a fundamental algorithm for traversing graphs and trees. It explores all nodes at the present depth before moving on to nodes at the next depth level. It is in contrast to [[Depth First Search (DFS)]] which explores as far down as possible in each branch before backtracking.

It is simple to implement and useful for finding the shortest path in an unweighted graph. However, it requires more memory than DFS because it stores all nodes at the current depth level. It is mostly used in pathfinding, networking (e.g., finding the shortest route in a network), and any scenario where exploring layer by layer is required.

In contrast to DFS, breadth-first search is particularly effective when the shortest path is needed, as it guarantees the minimal number of edges from the starting node to the target in unweighted graphs. It's the go-to choice for scenarios like social network analysis, finding the shortest route, or scheduling problems.

### How It Works
1. **Start at a node.** Mark it as visited and add it to a queue.
2. **Explore neighbours.** Dequeue a node, visit all its unvisited neighbours, and enqueue them.
3. **Repeat.** Continue this process until all nodes have been visited.

BFS is most often implemented using a queue for storing nodes to visit.