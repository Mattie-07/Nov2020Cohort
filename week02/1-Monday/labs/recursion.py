# 1. Write a function called power which accepts a base and an exponent


# The function should return the power of the base to the exponent.


# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.


# def factorialNum(number):
#     if( number == 1):
#         return number 
#     return number * factorialNum(number -1)

# answer = factorialNum(4)
# print(answer)




# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function
# def recursiveRange(number):
#     if (number == 1):
#         return number
#     return number + recursiveRange(number - 1)

# answer = recursiveRange(20)
# print(answer)


# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse
# def reverse(myString)
#     if len(myString == 0)
#         return myString
#     return reverse(myString[1:]) + myString[0]

# answer = reverse("Matthew")
# print (answer)



# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.
# def isPalindrome(newStr):
#     if len(newStr) == 1 or len(newStr) == 0 :
#         return True
        
#     if newStr[0] == newStr[-1] and isPalindrome(newStr[1:-1]): # Everytime the method is called
#                                                                 #it gets smaller and smaller
#         return True
#     else: False

# print(isPalindrome("hello"))


def fib (n):

    if n < 2:
        return  n

    return fib(n-1) + fib(n-2)



# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them all

#use the slice method to slice off an element of an array. 


# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in teh Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.
