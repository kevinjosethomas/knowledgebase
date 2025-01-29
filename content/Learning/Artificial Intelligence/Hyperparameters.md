---
date: 2025-01-27
---
Hyperparameters are essentially settings or configurations in machine learning models, and they often define the training paradigm. Properly tuning hyperparameters can significantly affect model performance, even with the same training data and architecture. Hyperparameters are typically set through experimentation, intuition, or automated search methods. 

#### Model Architecture Hyperparameters
Model architecture hyperparameters help define the structure of the model itself, and this usually includes:
1. The number of layers in the network
2. The number of neurons in each layer
3. The type of [[Activation Function]] used (eg: [[Rectifier Linear Unit Activation Function (ReLU)|ReLU]], [[Sigmoid Activation Function|sigmoid]], [[Hyperbolic Tangent Activation Function (tanh)|tanh]])

#### Optimization Hyperparameters
Optimization hyperparameters help define the training process:
1. **Learning Rate ($\eta$):** determines the step size during [[Gradient Descent|gradient descent]]. A high learning rate can lead to faster training but might miss the optimal solution, while a low learning rate will often lead to slower training but find a better solution
2. **Batch Size:** the number of training samples processed before updating the model weights, where smaller batches provide more frequent updates but may lead to noisier gradients
3. **Momentum:** helps accelerate gradient descent by smoothing updates
4. **Weight Decay:** a regularization technique that penalizes large weights to prevent overfitting

#### Regularization Hyperparameters
Regularization hyperparameters also help prevent overfitting by constraining the model:
1. **Drouput Rate:** which specifies the fraction of neurons to randomly deactivate during training
2. **L1/L2 Regularization:** adds penalties to the loss function based on the size of the weights (see [[Regressions|regularization]])