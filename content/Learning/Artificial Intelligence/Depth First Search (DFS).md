---
date: '2025-01-17'
---

Depth-first search is a fundamental algorithm for traversing graphs and trees. It explores as far down as possible in each branch, before backtracking and traversing the next branch. It is in contrast to [[Breadth First Search (BFS)]] which travels across branches and goes deeper simultaneously.

It is simple to implement and requires less memory than BFS because it doesn't store all nodes at a given node. It is mostly used in pathfinding, solving puzzles (mazes, Sudoku, etc), detecting cycles in graphs, and any form of finding a node within a graph.

In contrast to BFS, depth-first search is particularly useful when the solution lies deep in the graph or when we want to exhaustively explore all paths. Its backtracking nature makes it ideal for scenarios where multiple possible solutions exist, such as solving a maze or generating combinations.

### How It Works
1. **Start at a node.** Mark it as visited and move to its unvisited neighbours, repeating the process
2. **Backtrack.** If the child nodes have no unvisited neighbours, backtrack to the previous node and explore its unvisited neighbours.
3. **Repeat.** Continue this process until all nodes have been visited

DFS is most often implemented using recursion or explicit stacks.