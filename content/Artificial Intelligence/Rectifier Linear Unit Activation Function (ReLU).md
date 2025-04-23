---
date: '2024-07-04'
---
The ReLU activation function is a simple mathematical function used in neural networks. It is applied to the output of layers to maintain non-linearity and enables the network to learn complex patterns and relationships in the data. It simply outputs the input value if it is positive, and outputs zero if it is negative.

The ReLU activation function can be modeled by:
$$
f(x) = max(0, x)
$$
In contrast to the [[Sigmoid Activation Function]] and the [[Softmax Activation Function]], it is not affected by the vanishing gradient problem, which hinders the learning process in deep neural networks. Furthermore, it is more computationally efficient than functions like the [[Sigmoid Activation Function]] and the [[Hyperbolic Tangent Activation Function (tanh)]].
### Sources
- https://www.dremio.com/wiki/relu-activation-function/#:~:text=The%20ReLU%20activation%20function%20works,%3D%20max(0%2C%20x)