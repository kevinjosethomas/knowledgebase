A Markov Decision Process (MDP) is a mathematical framework that is used for decision-making in environments with uncertainty. It is widely used in reinforcement learning, robotics, and operations research to model how an agent interacts with an environment to maximize long-term rewards.

### How MDPs Work

An MDP is essentially defined by a tuple $(S,A,P,R,\gamma)$:

1. States ($S$):
   - The set of all possible situations the agent can be in
   - For example: a robot's location in a grid world
2. Actions ($A$):
   - The set of all possible actions the agent can take
   - For example: moving left, right, up, or down in a grid world
3. Transition Probability ($P(s'|s,a)$)
   - Defines the probability of reaching state $s'$ when taking action $a$ in state $s$
   - The next state $s'$ depends on the current state $s$ and action $a$, not on past states
4. Rewards ($R(s,a)$)
   - The reward the agent receives for taking action $a$ in state $s$
   - For example: +1 for reaching a goal, -1 for hitting a wall
5. Discount Factor ($\gamma$)
   - Determines how much future rewards are valued compared to immediate rewards
