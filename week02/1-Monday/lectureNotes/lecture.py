# def multiple(a, b, c):

#     return a *a, b *b , c*c


# var1, var2, var3 = multiple(2, 5 ,8)
# print(var1, var2, var3)
# import random

# a = random.randrange(1, 9, 2)
# print(a)

# 1. Find the smallest number
# Write a function smallest that accepts a List of numbers as an argument.

# It should return the smallest number in the List.

# createdList = [18,20,30,77]

# def smallest(smallNum):
#     smallNumber = min(smallNum)
#     return smallNumber

# answer = smallest(createdList)
# print(answer)



# def callMe():
#     if True:
#         pass
#     else:
#         callMe()

# for num in range(1,11):  # lets do it with recurssion
#     print(num)

def loopNTimes(n):
    if (n <= 1 ):
        return "complete"

    return  loopNTimes(n-1) # Both statememts would need the return statement so that when
                            # the condition is true, the value is returned throughout the call-stack



