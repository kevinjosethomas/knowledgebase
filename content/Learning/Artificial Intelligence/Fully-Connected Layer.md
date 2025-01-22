---
date: 2025-01-21
---
Fully-connected layers (also known as Dense layers) are a fundamental building-block layer for artificial neural networks, where every neuron in the layer is connected to every neuron in the previous layer and each connection has an associated weight. It ensures that the layer has access to all features from the previous layer which enables it to learn complex representations.

It's mostly used to combine features extracted by earlier layers so the model can make decisions or classifications. In many models, the output layer is a fully-connected layer to produce predictions with an [[Activation Function]].

For a neuron $j$ in a dense layer:
$$
y_j = f\left(\sum_{i=1}^{n} w_{ij}x_i + b_j\right)
$$
where:
- $x_i$ is the input from the $i$-th neuron in the previous layer
- $w_ij$ is the weight connecting neuron $i$ to neuron $j$
- $b_j$ is the bias for neuron $j$
- $f$ is the activation function
- $y_j$ is the output of neuron $j$

Ultimately, these dense layers are typically combined with other layers (like convolutional or recurrent layers) to optimize the model's performace.