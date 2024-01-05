#!/usr/bin/env python3
"""
Module with a type-annotated function floor
"""

import math

def floor(n: float) -> int:
    """
    Function that takes a float n as an argument and returns the floor of the float.

    Args:
        n (float): The input float.

    Returns:
        int: The floor of the input float, as an integer.
    """
    return math.floor(n)