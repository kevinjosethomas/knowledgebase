---
date: '2024-07-04'
---
Batch Normalization is used to improve training stability and speed in neural networks by standardizing the inputs to each layer within a batch. It helps address internal covariate shift—where changing parameters during training causes distributions of each layer's inputs to vary. This slows down training or leads to model instability.

1. **Compute the Mean and Variance:** For each training batch, calculate the mean and variance of each feature
$$\mu_{\text{batch}} = \frac{1}{m} \sum_{i=1}^m x_i$$
$$\sigma_{\text{batch}}^2 = \frac{1}{m} \sum_{i=1}^m (x_i - \mu_{\text{batch}})^2$$

2. **Normalize the Inputs:** Standardize the inputs by subtracting the mean and dividing the variance to get a zero mean and unit variance
$$
\hat{x} = \frac{x - \mu_{\text{batch}}}{\sqrt{\sigma_{\text{batch}}^2 + \epsilon}}
$$

3. **Scale and Shift:** Scale by $\gamma$ and shift by $\beta$  to retain network flexibulity and allow it to learn the optimal distribution
$$
y = \gamma \hat{x} + \beta
$$

Essentially, for an input feature $x$, it's normalized as:
$$
y = \gamma \cdot \frac{x - \mu_{\text{batch}}}{\sqrt{\sigma_{\text{batch}}^2 + \epsilon}} + \beta
$$
