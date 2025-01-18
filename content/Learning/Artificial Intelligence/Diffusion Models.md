Diffusion models are a type of Generative AI models that are used particularly in fields like image generation, denoising, and text-to-image tasks. It has gained significant attention due to its success in producing high quality outputs, as seen in tools like [[DALL-E]].

Diffusion models can produce realistic and detailed results, often surpassing [[Generative Adversarial Networks (GAN)]]. Similarly, unlike GANs, they are less prone to collapse where the model only generates a limited variety of outputs. However, diffusion models are computationally expensive and requires careful tuning.

### How It Works
Diffusion models are probabilistic models that generate data by iterative denoising it. Essentially, it corrupts its training data by adding noise and then learns to reverse this process step-by-step to recover the original data.

1. **Diffusion (Forward Process):** the model takes a data point like an image and progressively adds Gaussian noise to it over a fixed number of steps. Finally, the data is nearly indistinguishable from pure noise. This process is designed to be [[Markov Decision-Making Process|Markovian]] which means each step depends only on the previous one.
2. **Denoising (Reverse Process:** the model then learns to reverse this noise-adding process by denoising the forward process's pure noise by and progressively reconstructing the original image.
3. **Training:** the model is trained to predict the noise added at each step of the forward process. A common loss function used for diffusion is the [[Mean Squared Error (MSE)]] between the predicted and actual noise.
4. **Sampling:** to generate new data, the model then starts with random noise and applies the learned process iteratively, which then produces a coherent sample (image) at the end.

