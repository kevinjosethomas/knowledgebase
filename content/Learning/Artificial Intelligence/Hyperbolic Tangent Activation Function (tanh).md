---
date: '2024-07-04'
---
Hyperbolic tangent activation, also known as tanh, is similar to the [[Sigmoid Activation Function]] but it ranges from -1 to 1. The tanh function is zero-centered, and so it is symmetric around the origin of the coordinate system.

![[Pasted image 20240704124751.png]]

The tanh function is modeled by:
$$
\tanh x = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

While it is more performant than the sigmoid function for MLPs, it did not solve the vanishing gradient problem of sigmoids. This was tackled more effectively by [[Rectifier Linear Unit Activation Function (ReLU)]]. 

### Sources
- https://www.datacamp.com/tutorial/introduction-to-activation-functions-in-neural-networks