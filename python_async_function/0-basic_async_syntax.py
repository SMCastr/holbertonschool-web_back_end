#!/usr/bin/env python3
"""
Module with an asynchronous coroutine.
"""


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a
    random delay between 0 and max_delay (included)
    seconds and eventually returns it.

    Args:
        max_delay (int): The maximum delay (default is 10).

    Returns:
        float: The random delay.
    """
    # Generate a random delay
    random_delay = random.uniform(0, max_delay)
    
    # Wait for the random delay
    await asyncio.sleep(random_delay)

    return random_delay

# Test the asynchronous coroutine
if __name__ == "__main__":
    print(asyncio.run(wait_random()))
    print(asyncio.run(wait_random(5)))
    print(asyncio.run(wait_random(15)))
