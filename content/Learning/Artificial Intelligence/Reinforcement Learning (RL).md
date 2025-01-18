---
date: '2024-07-03'
---

Among [[Supervised Learning]] and [[Unsupervised Learning]], Reinforcement Learning is one of the primary neural network learning paradigms. Reinforcement learning is primarily used in dynamic environments without predefined inputs and outputs. As it navigates its problem space, the program is provided with rewards (which it tries to maximize) and penalties (which it tries to minimize). 
Reinforcement learning stems from a similar process in animal psychology: biological brains are hardwired to interpret signals such as pain and hunger as negative reinforcements, and interpret pleasure and food intake as positive reinforcements. Animals learn to engage in behaviours that minimize negative reinforcements and optimize the rewards.

Reinforcement learning does not need labelled input/output pairs and it does not need sub-optimal actions to be explicitly corrected. The focus of RL is to find a balance between the exploration of uncharted territory and the exploitation of current knowledge, with the goal of maximizing the long-term reward. 

Reinforcement is modelled by:
- $S$: a set of environment and agent states
- $A$: a set of actions of the agent
- $P_a(s, s')=Pr(S_{t+1}=s' | S_t=s,A_t=a)$: the probability of transition (at time $t$) from state $s$ to state $s'$ under action $a$
- $R_a(s,s')$: the reward after the transition from $s$ to $s'$ with action $a$

A basic RL agent interacts with its environment in discrete time steps. At each time $t$, the agent receives the current state $S_t$ and reward $R_t$. Then, it chooses an action $A_t$ from the set of available actions. The agent moves to a new state $S_{t+1}$ and new reward $R_{t+1}$. The goal of a RL agent is to learn a policy: $\pi:SxA\rightarrow[0,1],\pi(s,a)=Pr(A_t=a|S_t=s)$ that maximizes the expected cumulative reward.

When the agent's performance is compared to that of an agent that acts optimally, the difference in performance is described as <span class="highlight">regret</span>. To act near optimally, the agent must reason about the long-term consequences of its actions (maximize future income), although the immediate associated reward might be negative.

### Sources
- https://en.wikipedia.org/wiki/Reinforcement_learning

