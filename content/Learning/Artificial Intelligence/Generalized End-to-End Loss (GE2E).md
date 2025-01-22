---
date: 2025-01-19
---
Generalized End-to-End (GE2E) loss is a loss function often used in speaker verification and speaker embedding tasks. It was introduced by Google in their work on deep speaker embedding systems, and it helps models learn discriminative speaker embeddings that cluster tightly for the same speaker while being well-separated from embeddings of other speakers.

It is useful for speaker discrimination, batch-based training and tighter clustering. 
### How It Works

It operates by:
1. Comparing speaker embeddings in a batch
2. Encouraging embeddings of the same speaker to align closely (causes intra-class compactness)
3. Forcing embeddings of different speakers to diverge (inter-class separation)

It does this by leveraging [[Cosine Similarity Loss]]. Given a batch of $N$ speakers, each with $M$ utterances, GE2E loss works as follows:
1. Extract embeddings to produce $e_i,j$ where $i$ is the speaker index and $j$ is the index of the utterance for that speaker
2. Calculate centroids for each speaker $i$ $$
c_i = \frac{1}{M} \sum_{j=1}^{M} e_{i,j}
$$
3. Compute leave-one-out centroids for stability$$
c_{i,-j} = \frac{1}{M-1} \sum_{k \neq j} e_{i,k}
$$
4. Measure the cosine similarity between each embedding and all centroids. Below, $s_i,j,k$ is the similarity of the $j$-th embedding of speaker $i$ to the centroid of speaker $k$ $$
s_{i,j,k} = \frac{\langle e_{i,j}, c_k \rangle}{\|e_{i,j}\| \|c_k\|}
$$
5. Define the GE2E loss to encourage the highest similarity for the true speaker and lower similarity for other speakers: $$
\mathcal{L}_{GE2E} = -\sum_{i,j} \log\left(\frac{\exp(s_{i,j,i})}{\sum_{k} \exp(s_{i,j,k})}\right)
$$
The GE2E loss function is a [[Softmax Activation Function|softmax]]-based formulation that forces embeddings to align with their correct speaker centroid while being dissimilar to others.