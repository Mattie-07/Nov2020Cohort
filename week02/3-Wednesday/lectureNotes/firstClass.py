class Greeting:
    def __init__(self, firstName, lastName, age, city):            # the constructor
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.city = city 
    def say_hello(self):
        print("hello world")
        print(f"hello world {self.firstName} {self.lastName}")

greet = Greeting("Matthew","Roberts","21","Houston")
greet1 = Greeting("Veroniva", "Lino", "22", "Atlanta")

greet.say_hello()
greet1.say_hello()

