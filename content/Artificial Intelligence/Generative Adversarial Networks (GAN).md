---
date: 2025-01-28
---
Generative adversarial networks (GANs) are a type of models that consist of two neural networks: a generator and a discriminator, where both are trained simultaneously through a process (fittingly) known as adversarial training. The generator's task is to create data that resembles the training data, while the discriminator's job is to differentiate between real data (from the training set) and fake data (produced by the generator). These networks essentially engage in a dynamic game where the generator tries to fool the discriminator, and the discriminator works to improve its ability to detect fakes. This process pushes the generator to create increasingly realistic outputs. Essentially, it sounds like the discriminator is kind of like a specialized loss function.

GANs have been largely used for image synthesis, style transfer, data augmentation, and deep fakes. They are also widely used in creative fields for generating art, music, and realistic human faces. Despite their success, they are known to be challenging to train, and often require careful tuning of hyperparameters, large datasets, and significant computational resources. 
### How it Works
Similar to [[Diffusion Models]], the generator takes random noise input and transforms it into synthetic data, such as images or audio. Conversely, the discriminator receives both real and generated data and outputs the probability that the input is real. Both the networks are trained using separate loss functions: the generator aims to minimize the discrimator's ability to distinguish between real/fake data, while the discriminator aims to maximize its classification accuracy. The adversarial process can be understood as a minimax game (kinda like [[Alpha-Beta Pruning]] Where the generator and discriminator optimize opposing objectives. Over time, this adversarial process enables the generator to produce data that becomes indistinguishable from the real examples, at least to the discriminator. 

I don't really understand this but the overall objective of a GAN can be expressed as a mini-max game:

$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_\text{data}(x)} [\log D(x)] + \mathbb{E}_{z \sim p_z(z)} [\log (1 - D(G(z)))]$$
where:
- $D(x)$ represents the probability assigned by the discriminator that $x$ is real
- $G(z)$ represents the generator’s output given random noise $z$ sampled from a prior $p_z(z)$
- $p_\text{data}(x)$ is the true data distribution.

Here, the generator minimizes the second term, attempting to make $D(G(z))$ close to 1 (convincing the discriminator that the generated data is real) while the discriminator maximizes the entire function by correctly distinguishing between real data $x$ and generated data $G(z)$.