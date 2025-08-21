# me building Tic Tac Toe game
print('''Tic Tac Toe Game
''')
print("Remember the positions")
print(' -- -- --')
print('| 1| 2| 3|')
print(' -- -- --')
print('| 4| 5| 6|')
print(' -- -- --')
print('| 7| 8| 9|')
print(' -- -- --')
_1=_2=_3=_4=_5=_6=_7=_8=_9=" "
d1={}
d2={}
p1=input("Who will play for 'X': ")
p2=input("Who will play for 'O' : ")
print('''
Let's Gooo....
''')
p=0
ps1=[]
ps2=[]
while p<10:
    a=int(input(p1+" Enter the position: "))
    
    if a>9 or a<1:
        print("Max position is 9 bruh!")
        continue
    d1[a]="X"
    Kalla1=False
    if Kalla1==False:
        if a not in ps1 and a not in ps2 :
            if a==1:
                _1='X'
            elif a==2:
                _2='X'
            elif a==3:
                _3='X'
            elif a==4:
                _4='X'
            elif a==5:
                _5='X'
            elif a==6:
                _6='X'
            elif a==7:
                _7='X'
            elif a==8:
                _8='X'
            elif a==9:
                _9='X'
            else:
                print("Invalid Position")
            print(' -- -- --')
            print('| '+_1+'| '+_2+'| '+_3+'|')
            print(' -- -- --')
            print('| '+_4+'| '+_5+'| '+_6+'|')
            print(' -- -- --')
            print('| '+_7+'| '+_8+'| '+_9+'|')
            print(' -- -- --') 
            if ps1==[1,2,3] or ps1==[4,5,6] or ps1==[7,8,9] or ps1==[1,4,7] or ps1==[2,5,8] or ps1==[3,6,9] or ps1==[1,5,9] or ps1==[3,5,7]:
                print(p1,"won the game, better luck next time",p2)
                break
        
        else:
            print("Position is already entered")
            Kalla1=True
            continue
    else:
        pass
    ps1=list(d1.keys())
    b=int(input(p2+" Enter the position: "))
    d2[b]="O"
    Kalla2=False
    if Kalla2==False:
        if b not in ps1 and b not in ps2:
            if b==1:
                _1='O'
            elif b==2:
                _2='O'
            elif b==3:
                _3='O'
            elif b==4:
                _4='O'
            elif b==5:
                _5='O'
            elif b==6:
                _6='O'
            elif b==7:
                _7='O'
            elif b==8:
                _8='O'
            elif b==9:
                _9='O'
            else:
                print("Invalid Position")
            print(' -- -- --')
            print('| '+_1+'| '+_2+'| '+_3+'|')
            print(' -- -- --')
            print('| '+_4+'| '+_5+'| '+_6+'|')
            print(' -- -- --')
            print('| '+_7+'| '+_8+'| '+_9+'|')
            print(' -- -- --')
            if ps2==[1,2,3] or ps2==[4,5,6] or ps2==[7,8,9] or ps2==[1,4,7] or ps2==[2,5,8] or ps2==[3,6,9] or ps2==[1,5,9] or ps2==[3,5,7]:
                print(p2,"won the game, better luck next time",p1)
                break
        
        else:
            print("Position is already entered")
            Kalla2=True
            continue
    else:
        pass
    ps2=list(d2.keys())
    p+=2