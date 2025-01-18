Among [[Reinforcement Learning (RL)]] and [[Unsupervised Learning]], Supervised Learning is one of the primary neural network learning paradigms. In this paradigm, the computer is given example inputs (features) and their desired outputs (labels), and the goal is to learn a general rule that maps inputs to outputs. As the model is provided with input data, it adjusts its weights until it has been appropriately fitted ([[Gradient Descent]], [[Backpropagation]]).

It begins by learning patterns from a training set with inputs and desired outputs. The model measures its accuracy through a loss function, adjusting its predictions such that the error is sufficiently minimized. Eventually, the model will be able to sufficiently predict output values for inputs that it has not previously seen. The two main uses for supervised learning are:
- **Classification:** Using an algorithm to accurately assign data into specific categories. See [[Image Classification]], [[Convolutional Neural Network (CNN)]], etc.
- **Regression:** Understanding the relationship between dependent and independent variables, and then making projections and predictions based on patterns. See [[Simple Linear Regression]], [[Logistic Regression]], [[Multiple Linear Regression]], etc.
### Sources
- https://www.ibm.com/topics/supervised-learning
- https://cloud.google.com/discover/what-is-supervised-learning