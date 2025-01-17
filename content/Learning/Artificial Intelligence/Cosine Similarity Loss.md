Cosine similarity is used to determine how similar two vectors in an embedding space are based on the angle between them. Its used in tasks like text similarity, recommendation systems, and metric learning.

Cosine similarity **loss** essentially aims to minimize the cosine similarity between vectors when they are dissimilar, and maximizes when they are similar. It is implemented in [[Contrastive Loss]].

Given two vectors $u$ and $v$, the cosine similarity is:
$$
\text{cosine\_similarity}(\mathbf{u}, \mathbf{v}) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}
$$
and the cosine loss is
$$
\text{cosine\_loss}(\mathbf{u}, \mathbf{v}) = 1 - \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}
$$
The $1 - \text{cosine\_similarity}$ turns the maximization of similarity into a minimization problem. The loss is minimized when the vectors are as close as possible in direction (magnitude difference are irrelevant, only angle matters).

Cosine loss is primarily used in scenarios like document similarity where scale differences are unimportant but angle differences do matter. It normalizes vectors and ensures that small variations in length don't affect the loss.