#!/usr/bin/env python3
"""
Module with an asynchronous coroutine for executing multiple coroutines concurrently.
"""

import asyncio
from typing import List

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronous coroutine that spawns wait_random n times with the specified max_delay.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): The maximum delay for each wait_random.

    Returns:
        List[float]: The list of delays in ascending order.
    """
    # Create a list to store the tasks
    tasks = [wait_random(max_delay) for _ in range(n)]

    # Execute tasks concurrently using asyncio.gather
    delays = await asyncio.gather(*tasks)

    # Return the list of delays in ascending order
    return sorted(delays)

# Test the asynchronous coroutine
if __name__ == "__main__":
    print(asyncio.run(wait_n(5, 5)))
    print(asyncio.run(wait_n(10, 7)))
    print(asyncio.run(wait_n(10, 0)))