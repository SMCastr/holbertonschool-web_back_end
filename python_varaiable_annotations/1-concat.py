#!/usr/bin/env python3
"""
Module with a type-annotated function concat
"""

def concat(str1: str, str2: str) -> str:
    """
    Function that takes two strings as arguments and returns their concatenation.

    Args:
        str1 (str): first string.
        str2 (str): second string.

    Returns:
        str: The concatenation of the two strings.
    """
    return str1 + str2
