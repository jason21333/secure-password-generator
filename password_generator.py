import random
import string

def generate_password(length=12, uppercase=True, lowercase=True, numbers=True, symbols=True):
    # Define character sets
    chars = ''
    if uppercase:
        chars += string.ascii_uppercase
    if lowercase:
        chars += string.ascii_lowercase
    if numbers:
        chars += string.digits
    if symbols:
        chars += string.punctuation

    # Ensure at least one character set is selected
    if not chars:
        chars = string.ascii_letters + string.digits + string.punctuation

    # Generate password
    password = ''.join(random.choice(chars) for _ in range(length))
    return password 