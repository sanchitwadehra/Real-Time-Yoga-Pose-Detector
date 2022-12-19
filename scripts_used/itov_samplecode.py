import cv2
import glob
import os

# Set the main directory path
main_dir = 'C:\\Users\\WADEHRA\\Documents\\GitHub\\DT-Project\\dataset'

# Set the output directory path
output_dir = os.path.join(main_dir, 'videos')

# Create the output directory if it does not exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Iterate over the subdirectories in the main directory
for subdir in os.listdir(main_dir):
    subdir_path = os.path.join(main_dir, subdir)
    if os.path.isdir(subdir_path):
        # Set the output file path for the video
        output_file = os.path.join(output_dir, subdir + '.mp4')

        # Set the frame rate for the video
        frame_rate = 0.25

        # Initialize a list to store the images
        images = []

        # Iterate over the images in the subdirectory
        for image_file in os.listdir(subdir_path):
            # Check if the image file is a JPEG or PNG
            if image_file.endswith('.jpg') or image_file.endswith('.png'):
                # Read the image file with color profile handling disabled
                image = cv2.imread(os.path.join(subdir_path, image_file), cv2.IMREAD_IGNORE_ORIENTATION)

                # Add the image to the list
                images.append(image)

        # Sort the list of images
        images.sort()

        # Set the output video codec and the frame size
        fourcc = cv2.VideoWriter_fourcc(*'MJPG')
        frame_size = (640, 480)

        # Open the output video file
        out = cv2.VideoWriter(output_file, fourcc, frame_rate, frame_size)

        # Iterate over the images and add them to the video
        for image in images:
            out.write(image)

        # Release the output video file
        out.release()
