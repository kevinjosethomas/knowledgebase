---
date: 2025-01-28
---
GoogleNet, also known as Inception v1, is a [[Convolutional Neural Network (CNN)]] designed for image classification tasks. It was introduced by (you guessed it!) Google in 2014, and won the ImageNet Large Scale Visual Recognition Challenge (ILSVRC). It's primary innovation was in the Inception module, which allows the network to capture features at multiple scales while still keeping it efficient.

Essentially, the Inception module combines convolutional layers with different filter sizes (like $1 \times 1$, $3 \times 3$, and $5 \times 5$) and a pooling layer (like [[Global Average Pooling (GAP)]]) in parallel. These layers process the same input feature map and capture both fine and coarse details. The results from all these layers are then concatenated into a single output feature map.

Another key feature of GoogleNet is the use of $1 \times 1$ convolutions, which reduce the number of channels in the feature maps. This reduces computational cost and makes the network more efficient. Overall, the network has 22 layers and includes auxillary classifiers during training to prevent vanishing gradients and improve convergence.