# for printing
print('Hello world!')

#====================================

# variables
name="Jhon"
age=22
print("name")
print(name, age)
# variables can be changes in between
name="Rock"
print(name)
# types of variables
# 1.String, 2.Number(int, float, complex), 3.Boolean, 
is_adult = True
# exercise1

#====================================

# input from user
nameOne = input("What is your name?")
print(nameOne)
# concatenation
# exercise2

#====================================

# type conversion
# whatever we input in python they come in string format
old_age= input("enter your old age: ")
new_age = (old_age) + 2
print(new_age) 
#this will give error, cannot concatenate a string and int type
# to prevent this we do type conversion
old_age= input("enter your old age: ")
new_age = int(old_age) + 2
print(new_age)
number = 18
print(float(number))
# program1

#====================================

# methods
name = 'Tony Stark'
print(name.lower())
print(name) #doenot change the original
print(name.find('S')) #returns index or -1, index means position

print(name.replace("Stark", "Ironman")) #doenot change the original
print(name.replace("T", "M"))

# keywords
print('T' in name)
print('e' in name)
print('Stark' in name)
print('Ironman' in name)

# airthmetic operators
print(5+2)
print(5-2)
print(5*2)
print(5/2)
print(5//2)#this removes the decimal part of answer
print(5%2)#remainder
print(5**2)#power

# shortcuts
i = 5
i = i+2
i += 2
i -= 2
i *= 2

# operator precedence
result = 2 + 3 * 5

"""
This is a multi-line comment.
It spans multiple lines.
"""

# comparison operators
print(3 > 2)
print(3 < 2)
print(3 <= 2)
print(3 >= 2)
print(3 == 2)
print(3 != 2) #not equal to, ! reverses the result 

# logical operators
print(2>3 or 2>1) # one true other false, gives true
print(2>3 and 2>1) # all true then only gives true
print(not 2>3) # reverses the true

# if-else
age = 19
if age >= 18:
    print("you are adult")
    print("you can vote")
elif age < 18 and age > 3:
    print("you are in school")
else:
    print("you are a child")
print("thank you for applying")
# miniProject

# range
numbers = range(5)
print(number) # output: range(0,5)

# loops
# while loop
i = 1
while i <= 5:
    print(i)
    i = i + 1

while i <= 5:
    print(i * "*")
    i = i + 1

while i >= 0:
    print(i * "*")
    i = i - 1
# for loop
# basically used to take items inside an object or sequence
for i in range(5):
    print(i)
    # print(i + 1)

# list datatype(complex datatype, [])
marks = [95, 98, 97, "maths"]
print(marks[0])
print(marks[3])
# index in python can be neagative, -1 means the last item, negative index means start counting backwards
print(marks[-1]) 
print(marks[-5])
print(marks[0:2])

for score in marks:
    print(score)

marks.append(99)
marks.insert(2,96)
print(98 in marks)
print(len(marks))

i=0
while i < len(marks):
    print(marks[i])
    i = i+1

marks.clear()
print(marks)

# Break and Continue
students = ['ram', 'shyam', 'kishan', 'radha', 'radhika']

for student in students:
    if student == 'radha':
        break
    print(student)
# break ends the loop

for student in students:
    if student == 'kishan':
        continue
    print(student)
# this will just deviate the loop to move to next iterartion without following instruction in the present loop

# tuple: '()'
# its like list but immutable, we cannot modify
marks = (95,98,99,98)
print(marks.count(98))
print(marks.index(98))

person = "ram", "shyam", "abhi" # this structure is by default tuple 
print(person)

# sets: '{}'
# unique elements
marks = {95,98,99,98}
print(marks[0]) # this will give error, because no index in sets, thats why they are called unordered
for score in marks:
    print(score)

# dictionary: '{}' key value pair 
marks = {"english":95, "chemistry":98}
information = {"ram":"balkrishna"}

print(marks["chemistry"])

marks["physics"] = 97
print(marks)

# functions: 
# 1.in-built: int(), str(), bool() 
# 2.module: Math module
# when related functions and related variables are stored in the same file, these files are called module
# 3.user-defined

# modules
import math
print(dir(math))
# all the functions present inside maths module
# ['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'cbrt', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'exp2', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'lcm', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'nextafter', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc', 'ulp']

from math import sqrt
print(sqrt(16))

# importing everything
from math import *

# user defined function
# def function_name(parameters):

def print_sum(first, second):
    print(first + second)
print_sum(1,2)

# bydefault value
def print_sum(first, second=4):
    print(first + second)
print_sum(1)





