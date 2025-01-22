---
date: 2025-01-21
---
The Gaussian Error Linear Unit (GELU) is another [[Activation Function]] used in deep learning models. It combines features of the [[Rectifier Linear Unit Activation Function (ReLU)]] and sigmoid-based activations, which is effective in tasks like [[Natural Language Processing]].

GELU is useful because, in contrast to ReLU, it has smooth non-linear transitions which makes it more adaptive to small input changes. Similarly, its formula scales inputs based on their likelihood of being *positive*, modelled by a normal distribution. The negative values of $x$, the output smoothly approaches zero, and for positive, the output asymptotically increases (but not linearly) to reduce instability.

It has outperformed ReLU and other activations like [[Sigmoid Activation Function]] and [[Hyperbolic Tangent Activation Function (tanh)]] in various benchmarks, particularly in architectures like [[Bidirectional Encoder Representations from Transformers (BERT)|BERT]] and GPT. It is particularly useful in models requiring fine-grained feature learning and sophisticated non-linearities, especially [[Transformers]] and [[Natural Language Processing]] tasks) where GELU contributes to smoother convergence and better generalization).

It can be defined as:
$$
\text{GELU}(x) = x \cdot \Phi(x)
$$
where:
- $\Phi(x)$ is the cumulative distribution function (CDF) of the standard normal distribution:
$$
\Phi(x) = \frac{1}{2}\left(1 + \text{erf}\left(\frac{x}{\sqrt{2}}\right)\right)
$$
- $\text{erf}(x)$ is the error function

For computational efficiency, GELU is often approximated as:
$$
\text{GELU}(x) \approx 0.5x \left(1 + \tanh\left(\sqrt{\frac{2}{\pi}} \left(x + 0.044715x^3\right)\right)\right)
$$
