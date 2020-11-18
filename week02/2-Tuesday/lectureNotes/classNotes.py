##CRUD - Create, Read, 

# myList = [1,2,3,4]
# With a list( above) I would more than likely have to know the index in order for me 
# to retrieve the index Im looking for. 

# using the 'in' key word checks to see if a value is inside of a dictionary. If it is, I get
# a boolena value of true of false
# Using the get method allows me to see if that exactly value exists in the dictionary 
#by returning the value that I am looking for. 
# The value on the right hand side of the key / value pair can be any data type.
# so "age": 21  could be done
# "accountBalance" : 3  
# Where for both of the lines above, both values are integers.

# myDictionary = {

#         "firstName": "Matthew",
#         "lastName" : "Roberts"

# }

# name = myDictionary["firstName"]
# print(name)

# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]


# results = contact[1]["email"]
# print(results)


# file_handle = open("hello.txt", "w")
# file_handle.write("hello world\n This is a new line")
# # file_handle.close()
# file_handle = open("preamble.txt", 'w')
# contents = file_handle.ready()
# file_handle.close()

# print (contents)
# import pickle

# # data = {"Matthew" : "Roberts"}

# # with open("data.pickle" ,"wb") as fh:
# #     pickle.dump(data, fh)
# #This is how you save data

# with open('data.pickle', "rb") as fh:
#     phoneBook = pickle.load(fh)

benji = CuddlyPet("Benji", 50, 20, 20, 1)
print(benji.fullness, benji.happiness)
# 50 20
benji.be_alive()
print(benji.fullness, benji.happiness)
# 30 19
