---
date: '2024-07-14'
---
AlexNet is a convolutional image classification network architecture that won the Imagenet visual recognition challenge in 2012. It was designed by Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton. The network achieved a top-5 error of 15.3%, more than 10.8 percentage points below the runner-up. It is considered one of the most influential papers in computer vision, leading to many more published papers that use CNNs to accelerate deep learning.

The network has eight layers: 5 convolutional layers (some followed by max-pooling layers) and also 3 fully connected layers. It can be depicted by:
$$
(CNN \rightarrow RN \rightarrow MP)^2 \rightarrow (CNN^3 \rightarrow MP) \rightarrow (FC \rightarrow DO)^2 \rightarrow Linear \rightarrow softmax
$$
where:
- CNN: convolutional layer (ReLU)
- RN: local response normalization
- MP: maxpooling
- FC: fully connected layer (ReLU)
- Linear: fully connected layer (no activation)
- DO: dropout layer

![[Pasted image 20240714190306.png]]

### Sources
- https://en.wikipedia.org/wiki/AlexNet
- https://www.analyticsvidhya.com/blog/2021/03/introduction-to-the-architecture-of-alexnet
- https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf