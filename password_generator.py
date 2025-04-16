import random
import string

def generate_password(length=12):
    # Define character sets
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    numbers = string.digits
    symbols = string.punctuation
    
    # Combine all characters
    all_characters = lowercase + uppercase + numbers + symbols
    
    # Ensure at least one character from each set
    password = [
        random.choice(lowercase),
        random.choice(uppercase),
        random.choice(numbers),
        random.choice(symbols)
    ]
    
    # Fill the rest of the password
    for _ in range(length - 4):
        password.append(random.choice(all_characters))
    
    # Shuffle the password characters
    random.shuffle(password)
    
    # Join the characters into a string
    return ''.join(password)

if __name__ == "__main__":
    # Generate and print a password
    password = generate_password()
    print("Generated Password:", password)