# Consider a program that determines whether people are tall
# enough to ride a roller coaster


# Given the following code that prompts the user for a
# day number (Remember that the int function converts a numeric string to a number)


# Prompt the user for a day of the week just like
# the previous problem. But this time, print "Go to work" if it's
# a work day and "Sleep in" if it's a weekend day. Example session:


# Prompt the user for a number in degrees Celsius,
# and convert the value to degrees in Fahrenheit and display it to the user.

# Use the following formula:
# F = (C * 9/5) + 32


number = int(input("""Hi! Could you please input a number. I'll be able to tell you whether it is even or 
odd! Whenever you're finished just type -1!\n"""))

while(number != -1):
    if(number % 2 == 0):
        print("Your number was even!")
        number = int(input("input another number!\n"))
    else:
        print("You had an odd number!")
        number = int(input("input another number!\n"))
    
print("You decided to quit")


# count = 0

# while(count < 10):
#     count += 1
#     print(f"The count is {count}")
# print("Done with the count")

# answer =''
# while(answer != "when"):
#     answer = input("Say when:")
#     answer = answer.lower()
# print("say Cheese!")
