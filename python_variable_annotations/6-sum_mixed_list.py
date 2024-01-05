#!/usr/bin/env python3
"""
Module with a type-annotated function sum_mixed_list
"""

from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Function that takes a list of integers and floats as an argument and returns their sum.

    Args:
        mxd_lst (List[Union[int, float]]): The input list of integers and floats.

    Returns:
        float: The sum of the integers and floats in the input list.
    """
    return sum(mxd_lst)