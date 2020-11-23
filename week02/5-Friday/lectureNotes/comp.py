# class Student: 
#     def __init__(self,firstName,lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
#     def printStudent(self):
#         print(f"{self.fistName} {self.lastName} campus: {self.campus}")



# # everytime a student is created a new Campus object is created as well.
# class Campus:
#     def __init__(self):
#         self.students = []
#     def addStudent(self, firstName, lastName, campus):
#         student = Student(firstName,lastName, campus)
#         self.students.append(student)
#     def showCurrentStudents(self):
#         for studentObj in self.students:
#             print(f"{studentObj.firstName} {studentObj.lastName} {studentObj.campus}")



# dc = Campus()

# dc.addStudent("Kanny", "Mohammad", "Houston")
# dc.addStudent("Matthew","Chun", "Seattle")
# dc.addStudent("Kim", "Long","Atlanta")
# dc.addStudent("Joe","Stocks","Houston")

# dc.showCurrentStudents()
# compostion is about using one class to manipulate a lot of different classes.


## banking 

class AccountHolder:
    def __init__(self,fName, accountType, status, balance):
        self.fName= fName
        self.accountType = accountType
        self.status = status
        self.balance = balance



class Bank:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.accounts = []
    def open_new_account(self,fName, accountType, status, balance):
        newAccount = AccountHolder(fName, accountType, status, balance)
        self.accounts.append(newAccount)
    def showAllAccountHolders(self):
        for holdersOfAccount in self.accounts:
            print(f"{holdersOfAccount.fName} {holdersOfAccount.balance} {holdersOfAccount.status} ")
    def showBalance(self):
        for holdersOfAccount in self.accounts:
            balanceOfAll += holdersOfAccount.balance 


Matthew = Bank("Chase", "123")          

Matthew.open_new_account("Matthew","Savings","Open", 20)

Matthew.showAllAccountHolders()
Matthew.showBalance()






# two method, one shows all the account holders - name and balance and status , and
#  the other is to show the balance of the 
# people that are in the bank.


