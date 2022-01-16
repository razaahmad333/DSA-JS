from sys import exit

def spam(nu):
    try:
        return 43/nu
    except ZeroDivisionError as e:
        return e
    finally:
        print('division finished')

print(spam(0))    
if 'e' == input('enter e to exit\n'):
    exit()
