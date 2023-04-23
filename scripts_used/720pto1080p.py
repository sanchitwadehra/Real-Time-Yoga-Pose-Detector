import os
from PIL import Image

# set the path of the folder containing the images
folder_path = r"C:\Users\WADEHRA\Documents\GitHub\DT-Project\scripts_used\keyframes_img_seq"

# set the desired new resolution
new_resolution = (1920, 1080)

# loop through each file in the folder
for filename in os.listdir(folder_path):
    # check if the file is an image
    if filename.endswith(('.jpg', '.jpeg', '.png', '.bmp', '.gif')):
        # open the image
        filepath = os.path.join(folder_path, filename)
        with Image.open(filepath) as im:
            # check if the image size needs to be changed
            if im.size != new_resolution:
                # resize the image
                im = im.resize(new_resolution, resample=Image.LANCZOS)
                # save the image with the same format and filename
                im.save(filepath)
