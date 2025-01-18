---
date: '2024-07-04'
---

Contrastive loss is another loss function used specifically when we want to learn a feature space where similar data points are closer together and dissimilar data points are further apart. Its often used for metric learning tasks like face verification, image retrieval, and self-supervised learning.

It involves:
1. **Input Pairs:** two inputs (images, text, or embeddings) and a label indicating whether these inputs are similar (positive pair) or dissimilar (negative pair)
2. **Distance Metric:** A measure of how far apart both the feature representations are, often computed using [[Cosine Similarity Loss]] or [[Euclidean Distance]].
3. **Label:** A binary label *y* where 0 represents a dissimilar pair and 1 represents a similar pair.

The formula for contrastive loss is:
$$
L = \frac{1}{2N} \sum_{i=1}^{N} \Big[ y \cdot D^2 + (1-y) \cdot \max(0, m - D)^2 \Big]
$$
where:
- $D$ is the distance between the feature representations
- $m$ is a margin that defines the minimum distance for dissimilar pairs
- $y$ is the binary label indicating similarity
- $N$ is the total number of pairs

For similar pairs ($y=1$), the goal is to minimize the distance $D$ so that features of similar points are closer. For dissimilar pairs ($y=0$), the goal is to ensure that the distance $D$ is atleast a margin $m$. If $D$ is already greater than $m$, then there is no loss.

Contrastive Loss essentially helps enforce a structured embedding space by pulling similar points closer together and pushing dissimilar points further apart. The margin $m$ helps ensure that the model doesn't waste effort on pairs that are already sufficiently far apart.