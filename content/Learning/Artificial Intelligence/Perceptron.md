---
date: '2024-07-03'
---
A perceptron, also referred to as a neuron, takes in several binary inputs and produces a single binary output. 
![[Pasted image 20240701160708.png]]

Perceptrons have certain *weights* associated with each given input. These weights are real numbers that express the importance of the respective input to the produced output. Essentially, the binary output of the perceptron is determined by whether the weighted sum of all inputs is less than or greater than some threshold value.

$$
\text{output} =
\begin{cases} 
      0 & \text{if } \sum_j w_j x_j \leq \text{threshold} \\
      1 & \text{if } \sum_j w_j > \text{threshold}
   \end{cases}
$$
A perceptron is essentially a mathematical model that makes decisions by weighing evidence. We can replace $\sum_j w_j x_j$ with $w\cdot z$ and we can replace $\text{-threshold}$ with $bias$.
$$\text{output} = \begin{cases} 0 & \text{if } \mathbf{w} \cdot \mathbf{x} + b \leq 0 \\ 1 & \text{if } \mathbf{w} \cdot \mathbf{x} + b > 0 \end{cases} $$
The bias, equal to the negative threshold, is how easy it is to get a perceptron to output a 1. A larger bias means its easier for a truthy value, which a smaller or negative bias means the opposite.

We can develop *learning algorithms* which can automatically tune the weights and biases of a network of perceptrons, without direct intervention from a programmer. This allows us to use perceptrons in a way which is different from normal existing logic gates.

### Sources
- http://neuralnetworksanddeeplearning.com/chap1.html#perceptrons