---
date: '2024-07-04'
---

DALL-E is OpenAI's premier image generation model (text-to-image generation). It's a part of the GPT family of models but specifically designed for visual creativity and synthesis. 

DALL-E uses a [[Transformers|Transformer Architecture]] but incorporates both text and image representations, essentially understanding how they correlate. This multimodal learning was enabled by [[Contrastive Language-Image Pretraining (CLIP)]]. DALL-E was trained on a massive dataset of image-text pairs which provided it with context to understand how descriptive language translates into visual elements.

DALL-E 2 and newer models are [[Diffusion Models]] rather than the auto-regressive generation used in the origin DALL-E. It iteratively denoises an input into a coherent image and improves the image quality and realism.

DALL-E has zero-shot generalization capabilities, which allows it to generate plausible visuals for concepts it hasn't explicitly seen during training. DALL-E 2 also provided us with the ability to edit parts of existing images while maintaining coherence with the surrounding content.