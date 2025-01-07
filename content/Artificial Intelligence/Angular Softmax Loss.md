Angular Softmax Loss, also known as Additive Angular Margin Softmax, is another loss function which enhance's a model's ability to differentiate between classes by adding an angular margin to the [[Softmax Activation Function]]. It is mostly used for face recognition and speaker recognition.

Typically, softmax loss calculates probability scores for each class by taking the dot product of the feature vector (neural network output) and the weight vector corresponding with each class. Then, softmax activation converts these scores into probabilities. However, to improve discriminative power, angular softmax adds an angular margin to the classification. For applications like face recognition, the angle between feature vectors is more meaningful than their magnitude. Essentially, angular softmax loss separates classes by angles rather than Euclidean distance.

First, it normalizes the feature vectors and the weight vectors. Next, it adds a margin to the angle between the feature and weight vectors of each class. This margin forces the model to increase the angles between different classes more than softmax would, making it more difficult for the model to accidentally assign a sample to a different class.

![[Pasted image 20241108102254.png]]

Angular softmax loss is represented by:

$$
L = - \log \frac{e^{s \cdot (\cos(\theta_y + m))}}{e^{s \cdot (\cos(\theta_y + m))} + \sum_{j \neq y} e^{s \cdot \cos \theta_j}}
$$
- $s$ is a scaling factor to control the magnitude.
- $\theta_y$ is the angle between the feature vector of $x$ and the weight vector of the true class $y$.
- $m$ is the angular margin that encourages a higher distinction between classes.
- The $\cos(\theta_y + m)$ term pushes the feature of the sample further away from the decision boundary by increasing the angular margin.