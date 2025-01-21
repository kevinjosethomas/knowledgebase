---
date: '2024-07-04'
---
Convolutional layers assist in tasks involving image/spatial data like image recognition, object detection, and more. Its primary purpose is to detect patterns in data (edges, shapes, textures in an image, etc), and these patterns are learned automatically during training and are spatially invariant. 

### How It Works
1. **Input:** The input is usually a 3D tensor consisting of height, width, and depth (number of channels, like 3 for an RGB image).
2. **Kernel (Filter):** A small matrix of numbers (weights) that slides over the input data to compute the dot products at each position. It's typically smaller than the height and width but spans the entire depth.
3. **Convolution Operation:** The filter computes the dot product between the filter weights and overlapping input as it moves across the input, and this generates a single value for each position which produces a feature map.
4. **Stride:** The step size with which the kernel moves across the input. A stride of 1 means the kernel moves one pixel at a time, while a stride of 2 skips every other pixel
5. **Padding:** Adding extra border pixels (usually 0) to control the spatial dimensions of the output.

The output of the convolution operation is a feature map, which highlights the presence of learned features (edges, textures, etc) at different locations, and the depth of the feature map depends on the number of kernels used.

After convolution, we usually implement an [[Activation Function]] like [[Rectifier Linear Unit Activation Function (ReLU)]] to introduce non-linearity.