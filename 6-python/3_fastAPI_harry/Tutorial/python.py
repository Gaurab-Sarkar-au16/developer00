def add(firstName: str | list[int, int, str], lastName: str = None):
    firstName.capitalize()

    return firstName + " " + lastName

fname = 'bill'
lname = 'Gates'

name = add(fname, lname)
print(name)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#
# p1 = Person("John", 36)
#
# print(p1.name, p1.age)
