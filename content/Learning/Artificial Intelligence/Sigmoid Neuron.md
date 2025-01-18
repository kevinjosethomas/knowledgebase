A sigmoid neuron is similar to a [[Perceptron]] but they are modified so that small changes in their weights and biases only cause a small change in their output. This allows a network of sigmoid neurons to learn.

Just like a perceptron, the sigmoid neuron has inputs and outputs as well. However, these inputs and outputs will not be binary. Inputs and outputs can take on any values between 0 and 1. Now, instead of the output being 0 or 1, it is:
$$\sigma(\mathbf{w} \cdot \mathbf{x} + \mathbf{b})$$
where $\sigma$ is the [[Sigmoid Activation Function]] (logistic function).

### Sources
- http://neuralnetworksanddeeplearning.com/chap1.html#sigmoid_neurons