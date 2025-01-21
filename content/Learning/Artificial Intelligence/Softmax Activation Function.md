---
date: '2024-07-04'
---
The softmax function transforms the outputs from hidden layers into a vector of probabilities that serve as a probability distribution. For example, if we have a multiclass classification problem with ``N`` possible classes, the softmax activation function will return an output vector that is exactly ``N`` entries long.

![[Pasted image 20240704130950.png]]
![[Pasted image 20240704131225.png]]

The softmax activation function is designed for multiclass classification. For example, while activation functions, like the [[Sigmoid Activation Function]], can generate probabilities of a certain binary classification (and thresholds can make the classification truly binary), they are not designed for multiclass classification. In contrast, the softmax activation function can assign probabilities to each independent class. 

The softmax activation function is modelled by:
$$
\frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}
$$

It is typically followed by the [[Argmax Function]] to finally decide on the class with the highest probability.

### Sources
- https://www.pinecone.io/learn/softmax-activation/