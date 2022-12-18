import os
import json

# Set the root directory containing the subdirectories
root_directory = 'C:\\Users\\WADEHRA\\Documents\\GitHub\\DT-Project\\dataset'

# Set the directory where the JSON file should be saved
json_directory = 'C:\\Users\\WADEHRA\\Downloads'

# Initialize an empty list to store the file paths
file_paths = []

# Get a list of all the subdirectories in the root directory
subdirectories = [d for d in os.listdir(root_directory) if os.path.isdir(os.path.join(root_directory, d))]

# Iterate over the list of subdirectories
for directory in subdirectories:
    # Get a list of all the files in the subdirectory
    files = [f for f in os.listdir(os.path.join(root_directory, directory))]

    # Iterate over the list of files and add their file paths to the list
    for file in files:
        file_paths.append(os.path.join(root_directory, directory, file))

# Serialize the list of file paths as JSON
json_data = json.dumps(file_paths)

# Set the name and path of the JSON file
json_file = os.path.join(json_directory, 'file_paths.json')

# Open the JSON file in write mode
with open(json_file, 'w') as f:
    # Write the JSON data to the file
    f.write(json_data)

# Print a message indicating that the file has been saved
print(f'JSON file saved to {json_file}')
