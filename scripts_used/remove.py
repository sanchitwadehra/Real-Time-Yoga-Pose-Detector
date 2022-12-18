import os

# Set the root directory containing the subdirectories
root_directory = 'C:\\Users\\WADEHRA\\Documents\\GitHub\\DT-Project\\dataset'

# Get a list of all the subdirectories in the root directory
subdirectories = [d for d in os.listdir(root_directory) if os.path.isdir(os.path.join(root_directory, d))]

# Iterate over the list of subdirectories
for directory in subdirectories:
    # Get a list of all the .jpeg files in the subdirectory
    files = [f for f in os.listdir(os.path.join(root_directory, directory)) if f.endswith('.jpeg')]

    # Iterate over the list of files and delete them
    for file in files:
        os.remove(os.path.join(root_directory, directory, file))
