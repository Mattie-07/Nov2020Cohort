

# 1. Create an empty class called "Student"

# class Student:
#     def __init__(self, name):
#         # print("Im a constructor")
#         # self.name = name
#         # print(f"Good morning {name}")

<<<<<<< HEAD
#     def greeting(self):
#         return f"Good morning! {self.name}"


# # 2. Create 5 students objects (instances of the class "Student") of "Student" types
# Matthew = Student("Matthew")
# # Matthew.greeting("Matthew")
# # print(Matthew.greeting("Matthew"))

# Cedal = Student("Cedal")
# # Cedal.greeting("Cedal")
# Ian = Student("Ian")
# # print(Ian.greeting("Ian"))
# Ally = Student("Ally")
# # print(Ally.greeting("Ally"))
# Rick = Student("Rick")
# # print(Rick.greeting("Rick"))

# 3a. Create a "greeting" method inside of the class "Student" class that
=======
#2. Create 5 students objects (instances of the class "Student") of "Student" types


#3a. Create a "greeting" method inside of the class "Student" class that 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}" 


#4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

#5a. Create a constructor for the Student class. 
#5b. Create a print statement inside of the constructor
#5c. Run your lab.py again and you should see a print statement for each student object 
# That you created 


#6a. Pass in "name" as a parameter to your Student constructor. 
#6b. Create an instance variable for name
#6c. Refactor your greeting method by removing the name parameter and 
# adding a "self" in front of the printed "name" variable in the return statement 
#6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated 

<<<<<<< HEAD
# 7. Class Methods
# class Student:
#     def __init__(self, other, things, )

#     def 




# 7a. Create a "Class" method inside of the "Student" called "campus" that returns the
=======
#7. Class Methods
#7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument. 
#7b. call the campus method by invoking Student.campus()
#7c. Call the campus method on each of the student objects 
#7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

#8. Class Variables 
#8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
#8b. Print to the console each class variable for each of the student objects, i.e. 
# Michah.cohort 
#8c. Refactor your class method to print out the class variable when it is called 
#8d. Call the class method on the class (i.e. Student.campus())
#8e. Call the class method on each object (i.e. Dan.campus())

#9. Accessor Modifiers 
# Refactor your constructor to take a parameter for studentID
#9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
#9b. Print the studentID value to the console
# Change the value of studentID to __studentID 
# Print the value to the console (you should get an error)


#. Inheritance 

# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"

class Car:
    def __init__(self, make, model, color):
        self.make = make
        self.model = model 
        self.color = color 
    def carDetails(self):
        print(f"Here are the details of this car{self.model}, {self.make}, {self.color}")

class Hybrid(Car):
    def CarType():
        print("I am a hybrid car")
    def carDetails(self):
        print("hi")
        super(Hybrid, self).carDetails()

# class Electric(Car):
#     def __init__(self, make, model, color):
#         super(Electric, self)_init__(make, model, color)
#     def CarType():
#         print("I am an electric car")

hybridCar = Hybrid("Prius", "Ford", "Red")
print(hybridCar.model)
# electricCar = Electric("Volt", "Chevy", "blue")
hybridCar.CarType
# electricCar.CarType
hybridCar.carDetails()
# electricCar.carDetails()


# Create a new class called Hybrid that inherits from the Car class
#  with the following method: CarType which prints "I am a hybrid car" 


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car" 

# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance 
# Call the method Car Details on each instance



# Add the following instance variables to the Car class :
# - make 
# - model 
# - color








# Implicit Inheritance 

#. Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION


<<<<<<< HEAD

# count = 0

# def countMethod():
#     global count 
#     count = count + 1
#     return count 

# countMethod()
# print(count)
# countMethod()
# print(count)
# countMethod()
# print(count)
# countMethod()
# print(count)
# print(count)
# class Counter:
#     def __init__(self):
#         self.count = 0
    
#     def incrementCount(self):
#         self.count += 1
#         return self.count

# counter1 = Counter()
# print("This is for count 1\n" ,counter1.incrementCount())
# print(counter1.incrementCount())
# print(counter1.incrementCount())
# print(counter1.incrementCount())
# print(counter1.incrementCount())
# print(counter1.incrementCount())


# counter2= Counter()

# print("This is for count 2\n",counter2.incrementCount() )



# import datetime

# class Person:
#     def __init__(self, name, lastName, birthdate, address, telephone, email):
#         self.name = name
#         self.lastName = lastName
#         self.birthdate = birthday
#         self.address = address
#         self.telephone = telephone
#         self.email = email

#     def age(self):  



# michael = Person("Michael","Hook", "1/1/2020", "Sesame Street", "555-555-5555", "Mike@gmail.com" )
# michael.age()

# class Person:
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
#     def greet(self, other_person):
#         print('Hello {}, I am {}!'.format(other_person.name, self.name))

# sonny = Person("Sonny", "Sonny@hotmail.com","483-485-4948", )
# jordan = Person("Jordan", "Jordan@aol.com", "495-586-3456") 
# sonny.greet(jordan)
# jordan.greet(sonny)

# print(f"This is the contact information to Sonny{sonny.email}\n {sonny.phone}")
# print(f"This is the contact information to Jordan{jordan.email}\n {jordan.phone}")

# class AnchorTag:
    
#     def link(): 
#         button = Button()






# class Button:
#     fontWeight = "bold"
#     fontColor = "red"
#     def __init__(self, color):
#         self.count = 0
#         self.color = color
#     def click(self):
#         self.count +=1
#         if(self.count > 2 ):
#             popUp()
#             self.count = 0
    
#     def popUp(): # for some reason the pring statemtn does not come up
#         print("Do you need some help?")

    

# navButton = Button("Blue")
# helpButton = Button("Red")
# Button.popUp
# print(navButton.fontWeight)
# print(helpButton.fontColor)
# print(helpButton.fontWeight)

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")


# navButton.click()
# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# helpButton.click()
# print(f"help {helpButton.count}")

# class Test: 
#     def __init(self):
#         self.__a = "a"
#         self._b = "b"   #semi private 

#     def _privateMethod(self):
#         print(self.__a)

# firstTest = Test()
# print(firstTest._privateMethod)
# print(firstTest.__a)


# class GoogleMaps:
    
#     def __init__(self, address1 , address2):
#         self.address1 = address1
#         self.address2 = address2

#     def Map(self):
    
# map = GoogleMaps("123 Sesame Street", "This other street")
# print(map)



# class OurString(str):
    
#     def reverse(self, word):
#         revString = ""

#         for char in word:
#             revString = char + revString  

#         return revString

# myString = OurString("hey")

# print(myString.capitalize())
# print(myString.reverse("hello"))
=======
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
