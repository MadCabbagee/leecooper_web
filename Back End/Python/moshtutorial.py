price = 20
rating = 4.9
name = "Lee"

is_published = True

print(price)

name = "Lee cooper"
age = 20
is_new = True

# these are inputs
name = input("what is your name?")
# this is a contactination or the iclusion of something
print("Hi " + name)

name = input("what color does lee like?")
print("blue" + name)

name = input("what is the shool that you go to:")
print("I go to Noralk Community College" + name)


birth_year = input("birth year: ")
age = 2019 - int(birth_year)
2019 - "1982"
print(type(age))
print(age)

int()

weight_lbs = 160

weight = input("weight (lbs):")
weigh_kg = int(weight_lbs) * 0.45
print("weight_kg")


course = """
Hi John, 
here is our first email to you

thank you,
the support team
"""
print(course[0:3])

another = course[:]
print(another)
# -2,-1,0,1,2,3 is the index of the course
# this will pass each character depending on the number
# there are default values for the string
# if you just use the right index, python will interepret it as a 0

name = "jennifer"
print(name[1:-1])
# you will see all of the chatacters starting from e to the second e

first = "john"
last = "smith"
message = first + "[" + last + "] is a coder"

msg = f"{first} [{last}] is a coder"
# this is a formatted string
print(msg)

course = "Python for Beginners"
# this index of the sting is 0 or a P

print("Python" in course)
"Python" in course

len()
course.upper()
course.lower()
course.title()
course.find()
course.replace()
#'...' in course

# arrithmic operators -----

print(10 + 3)
print(10 - 3)
print(10 // 3)
print(10 % 3)
# modular

print(10 * 3)
# power of

x = 10
x = x + 3
x += 3
# augmented assignment operator
print(x)

# operator presedence ----- order of operations
x = 10 + 3 * 2**2
print(x)

# parenthesis takes priority
# eponentiation 2 ** 3
# multiplication or division
# addition or subtraction

x = (2 + +3) * 10 - 3
print(x)
x = 47

# math functions -----
import math
import unittest

print(math.floorl(2.9))

x = 2.9
print(abs(-2.9))
# abs always returns a positive number

# if statements -----

is_hot = True
is_cold = False

if is_hot:
    print("It is a hot day")
    print("Drink plenty of water")
elif is_cold:
    print("Its is a cold day")
    print("Wear warm clothes")
else:
    print("It is a lovely day")

print("Enjoy your day")


house_price = 1, 000, 000
has_good_credit = True
if has_good_credit:
    down_payment = 0.1 * price
else:
    down_payment = 0.2 * price
print(f"Down payment ${down_payment}")

# logistic operators -----

has_high_income = True
has_good_credit = False
has_criminal_record = False

if has_high_income or has_good_credit:
    print("Eligible for loan")

# if applicant has good credit and no criminal record, then they are eligible for a load
if has_good_credit and not has_criminal_record:
    print("Eligible for loan")

# and operator means that both are true
# or operator means that at least one is true
# not

# make sure that you know the restrictions on the operators (change)

tempature = 75

if tempature == 30:
    print("its a hot dat")
else:
    print("its not a hot day")


name = "J"

if len(name) < 3:
    print("Name must be at least 3 characters")
elif len(name) > 50:
    print("Name must be a maximum of 50 characters")
else:
    print("Name looks good")

# example
weight = int(input("Weight: "))
weight("(L)bs or (K)g: ")

if unittest.upper() == "L":
    converted = weight * 0.45
    print("Your are {converted} kilos")
else:
    converted = weight / 0.45
    print(f"You are {converted} pounds")

# nested loops -----

for x in range(4):
    print(x)

# find the largest number ----

numbers = [10, 6, 2, 8, 4, 9]
max = numbers[0]
for number in numbers:
    if number > max:
        max = number
print(max)

# list method

numbers = [2, 2, 2, 4, 6, 3, 3, 4, 6, 1]
uniques = []
for number in numbers:
    if number not in uniques:
        uniques.append(number)

print(uniques)


numbers = (1, 2, 3)
# parenthesis is a tuple
numbers[0] = 10
print(numbers[0])

# dictionaries
customer = {"name": "john smith", "age": 30, "is_verified": True}
customer["birthdate"] = "Jan 1, 1980"
print(customer.get("name"))


phone = input("Phone: ")

digits_mapping = {"1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five"}
output = ""
for ch in phone:
    output += digits_mapping.get(ch, "!") + ""
print(output)


def aquare(number):
    return number * number


# classes
# class emailClient:
# def move(Self):


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self):
        print("move")

    def draw(self):
        print("draw")


# this is seperated---

point = Point(10, 20)
point.x = 18
print(point.x)


class Mammal:
    def talk(self):
        print("walk")


class Dog(Mammal):
    def bark(self):
        print("bark")


class Cat(Mammal):
    def meow(self):
        print("meow")


dog1 = Dog()
dog1.walk(self)
