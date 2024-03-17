# Save a file named `filenames.txt` to the same folder in this directory that contains all of the filenames of the games you want to add
# Must be all the same console type to  work

# This is the console type. The acceptable parameters are the following:
# TODO Figure out acceptable core params
## Default is gba 
import json

with open("filenames.txt", "r") as myfile:
    game_filenames = myfile.read().splitlines()

console = "nds"

rom_add_list = []

for filename in game_filenames:
    game_name = filename.partition(".")[0]
    rom_add_dict = {"console": console, "game": game_name}
    rom_add_list.append(rom_add_dict)

json_string = json.dumps(rom_add_list, indent=1)

with open("resultsMain.json", "w") as f:
    f.write(json_string)
