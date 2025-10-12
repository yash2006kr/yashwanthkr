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

board = [" "] * 9
positions_taken = set()

p1 = input("Who will play for 'X': ")
p2 = input("Who will play for 'O' : ")

def print_board():
    print(' -- -- --')
    print(f'| {board[0]}| {board[1]}| {board[2]}|')
    print(' -- -- --')
    print(f'| {board[3]}| {board[4]}| {board[5]}|')
    print(' -- -- --')
    print(f'| {board[6]}| {board[7]}| {board[8]}|')
    print(' -- -- --')

def check_win(mark):
    win_combos = [
        [0,1,2], [3,4,5], [6,7,8], # rows
        [0,3,6], [1,4,7], [2,5,8], # cols
        [0,4,8], [2,4,6]           # diags
    ]
    for combo in win_combos:
        if all(board[i] == mark for i in combo):
            return True
    return False

print("\nLet's Gooo....\n")
turn = 0
while turn < 9:
    # Player 1
    while True:
        try:
            a = int(input(f"{p1} Enter the position (1-9): "))
            if a < 1 or a > 9:
                print("Max position is 9 bruh!")
                continue
            if a in positions_taken:
                print("Position is already entered")
                continue
            board[a-1] = 'X'
            positions_taken.add(a)
            break
        except ValueError:
            print("Enter a valid number!")
    print_board()
    if check_win('X'):
        print(f"{p1} won the game, better luck next time {p2}")
        break
    turn += 1
    if turn == 9:
        print("It's a draw!")
        break

    # Player 2
    while True:
        try:
            b = int(input(f"{p2} Enter the position (1-9): "))
            if b < 1 or b > 9:
                print("Max position is 9 bruh!")
                continue
            if b in positions_taken:
                print("Position is already entered")
                continue
            board[b-1] = 'O'
            positions_taken.add(b)
            break
        except ValueError:
            print("Enter a valid number!")
    print_board()
    if check_win('O'):
        print(f"{p2} won the game, better luck next time {p1}")
        break
    turn += 1
    if turn == 9:
        print("It's a draw!")
        break