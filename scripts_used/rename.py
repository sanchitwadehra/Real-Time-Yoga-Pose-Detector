import os

# Set the root directory containing the subdirectories
root_directory = 'C:\\Users\\WADEHRA\\Documents\\GitHub\\DT-Project\\dataset'

# Get a list of all the subdirectories in the root directory
subdirectories = [d for d in os.listdir(root_directory) if os.path.isdir(os.path.join(root_directory, d))]

# Iterate over the list of subdirectories
for directory in subdirectories:
    # Get a list of all the image files in the subdirectory
    files = [f for f in os.listdir(os.path.join(root_directory, directory)) if f.endswith('.jpg') or f.endswith('.jpeg') or f.endswith('.png')]

    # Sort the list of files alphabetically
    files.sort()

    # Iterate over the list of files and rename them numberwise
    for i, file in enumerate(files):
        os.rename(os.path.join(root_directory, directory, file), os.path.join(root_directory, directory, str(i+1) + '.jpg'))
