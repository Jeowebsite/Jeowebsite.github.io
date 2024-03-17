# Save a file named `filenames.txt` to the same folder in this directory that contains all of the filenames of the games you want to add
# Must be all the same console type to  work
myfile = open("filenames.txt", "r")

# This is the console type. The acceptable parameters are the following:
# TODO Figure out acceptable core params
## Default is gba 
console = "nds"


myline = myfile.readline()
while myline:
    myline = myfile.readline()
    myline1 = myline.replace("\n", "")
    mylist = myline1.partition(".")
    with open("resultsSearch.txt", "a") as f:
        # Use the following if you want to add to the array for searching
        f.write(f"""{{ name: "{mylist[0]}", console: "{console}" }},\n"""),

