---
date: '2024-07-03'
---

A multi-layer perceptron (MLP) is an artificial neural network that has multiple layers of neurons (including an input layer, at least one hidden layer, and an output layer). It is a feedforward network with fully connected neurons, and serves as an improvement to single-layer perceptrons. Most MLPs use activation functions such as [[Rectifier Linear Unit Activation Function (ReLU)]] or [[Sigmoid Activation Function]].

### Input Layer
The input layer has all the perceptrons that receive the initial input data. Every neuron in the input layer represents one dimension, and the number of neurons in the input layer is determined by the dimensionality of the input data. This layer doesn't perform any computations on the data, and they simply pass the input vaalues to the next layer.

### Hidden Layer
Hidden layers in MLPs receive input from the previous layer and produces an output that is provided to the next layer. The number of hidden layers and the number of neurons in each hidden layer are both [[Hyperparameters|hyperparameters]] that need to be tweaked to optimize the performance of the model.

Each neuron in a hidden layer receives input from all the neurons in the previous layer, and then multiplies them by corresponding weights. These weights determine how much influence the input from one neuron has on the output of another.

### Output Layer
The output layer has all the perceptrons that are the final output of the network. The number of neurons in the output layer determines the format of the output of the MLP. In binary classification, there may be either one or two neurons depending on the activation function and the probability of beginning to one class. In multi-class classification, there may be multiple neurons in the output layer.

### Weights
Each connection between neurons in two consecutive layers has an associated weight, which determines the strength of that connection. These weights are what are modified by the MLP (during the training process) to optimize the output of the model.

## Bias Neurons
Beside input and hidden neurons, every layer (besides the input layer!) has a bias neuron that provides an additional input to neurons in the next layer. This neuron has its own weight associated with each connection, which is learned during training. The bias neuron shifts the activation function in the next layer, changing the weights, and allowing the MLP to control the threshold for activation.

### Activation Function
Each hidden layer in an MLP typically applies an activation function to its weighted sum of inputs to introduce non-linearity into network, allowing it to learn complex patterns in the data. Common activation functions include [[Sigmoid Activation Function]], [[Rectifier Linear Unit Activation Function (ReLU)]], [[Softmax Activation Function]], [[Hyperbolic Tangent Activation Function]].

### Backpropagation
Backpropagation is the process of an MLP iteratively updating the weights and biases of a model to minimize an associated loss function. Essentially, the model computes gradients of a loss function by comparing the proportion of incorrect predictions and working to minimize that.

### Stochastic Gradient Descent (SGD)
Stochastic Gradient Descent is the process of minimizing the loss to improve the weights and biases of the model. SGD achieves this by iteratively moving in the direction of the steepest decrease in the function's value.
1. Shuffle training data so the model doesn't learn the same patterns everytime
2. Split the training data into mini-batches
3. For each mini-batch:
	1. Compute the gradient of the loss function
	2. Update the model parameters by taking a step in the opposite direction of the gradient 

## Sources
- https://en.wikipedia.org/wiki/Multilayer_perceptron
- https://www.datacamp.com/tutorial/multilayer-perceptrons-in-machine-learning