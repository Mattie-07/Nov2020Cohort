from textwrap import dedent
phoneBook= {
    "Levi": "832-291-7066",
    "Tracy": "541-990-0760",
    "Skittles": "666-666-6666"
}

name = ""
print("Electronic Phone Book")
print("=" * 21)
print(dedent("""
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entrys
5. Quit
"""))
choice = input("What do you want to do (1-5)?\n")
    

def nameInput():
    nameChoice = input("What name would you like to use?\n")
    return nameChoice





# create a loop
#create a function for all repeating code. 

while True:
    if choice == "1":
        print("You want to look someone up")
        name = nameInput()
        if name in phoneBook:
            print(phoneBook[name])
        else:
            print("{} not found".format(name))
        input("")
        
    elif choice == "2":
        name = input("Name: ")
        number = input("Number: ")
        phoneBook[name] = number
        input("Entry stored for {}".format(name))
        
    elif choice == "3":
        name = input("Name: ")
        del phoneBook[name]
        input("Deleted entry for {}".format(name))
        
    elif choice == "4":
        for key in phoneBook:
            print("Found entry for {}: {}".format(key, phoneBook[key]))
        input("")
        
    elif choice == "5":
        print("Bye!")
    else:
        print("Please enter a valid command")
        




