import os
from PIL import Image

# set the path of the folder containing the images
folder_path = r"C:\Users\WADEHRA\Documents\GitHub\DT-Project\scripts_used\trim_img_orig_seq"

# loop through each file in the folder
for filename in os.listdir(folder_path):
    # check if the file is a TIFF image
    if filename.endswith(".tif"):
        # open the image
        filepath = os.path.join(folder_path, filename)
        with Image.open(filepath) as im:
            # create a new filename with the .jpeg extension
            new_filename = filename.replace(".tif", ".jpeg")
            # save the image as a JPEG
            im.save(os.path.join(folder_path, new_filename), "JPEG")
            # delete the old TIFF image
            os.remove(filepath)
