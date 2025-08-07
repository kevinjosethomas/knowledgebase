---
date: 2025-08-07
---
[YouTube](https://www.youtube.com/watch?v=UZDiGooFs54&)

- [[AlexNet]] is a [[Convolutional Neural Network (CNN)|convolutional]] image classification network architecture that won the ImageNet visual recognition challenge in 2012
	- In prior years, teams used more technical approaches that had more human intervention in the algorithmic process
	- In contrast, AlexNet used a much older idea (artificial neural networks) where the behaviour of the algorithm is almost entirely learned from data
		- The dot-product operation between the data and a set of weights was initially proposed by Warren McCulloch and Walter Pitts in the 1940s as an oversimplified model of human brain neurons
		- The second layer of [[Transformers]] and the end of [[AlexNet]] is formed by [[Multilayer Perceptron (MLP)|Multilayer Perceptrons (MLP)]], a learning algorithm and machine from the 1950s that used McCulloch and Pitts' neurons for basic shape recognition tasks
		- In the 1980s, Geoffrey Hinton (then much younger) and collaborators at CMU showed that it was possible to train multiple layers of [[Perceptron|perceptrons]] via [[Backpropagation|backpropagation]]
		- In the 1990s, Yann LeCun trained 5-layer deep models to recognize handwritten digits
		- In these years, deep learning was not seen as a viable solution toward a lot of modern ML problems, largely because we didn't have the compute to truly experiment with [[Unsupervised Learning|unsupervised learning]]
- The model is trained to predict a label for a given image input
	- The input image is inputted as a 3D matrix of RGB intensity values
	- The output is a matrix of length 1000 with the probabilities of classification of each of the 1000 possible labels (ex: hot dog, aircraft carrier, etc)
- The first five blocks are [[Convolutional Layer|convolutional blocks]]
	- In these layers, the input image tensor is transformed by sliding a smaller tensor (called a *kernel*) across the image, and calculating the dot-product of the image and the kernel at each location: ![[Pasted image 20250807121835.png]]
	- The dot-product is like a similarity score: the more similar a given patch of the image and kernel are, the higher the resulting dot-product will be
	- Just like weights and biases, the kernels are initially entirely random—and then evolve to patterns after training from data: ![[Pasted image 20250807122128.png]] ![[Pasted image 20250807122201.png]]
	- As we go through these convolutional blocks, our kernels and activation maps become less interpretable since we no longer operate under simple 3-dimensional vector representations that align with our understanding of colours
- Within the penultimate layer (of vector length 4096), each image is mapped to a point in this space. In analyzing this layer, it's easy to see that images that represent similar concepts (like images of elephants or images of pumpkins) are the nearest-neighbours of each other within the latent space, despite the images not looking identical to each other
- The AlexNet paper also presents many synthetic images that maximize certain activations
	- When flattening out the latent embedding space into a 2-dimensional activation-atlas, we can see how these synthetic images are semantically close to scenes that look similar
	- Just like we see in [[Embeddings|embeddings]], the latent space has consistent relationships between similar and distinct ideas