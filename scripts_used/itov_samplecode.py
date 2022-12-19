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

        # Initialize a list to store the paths of the images
        image_paths = []

        # Iterate over the images in the subdirectory
        for image_file in os.listdir(subdir_path):
            # Check if the image file is a JPEG or PNG
            if image_file.endswith('.jpg') or image_file.endswith('.png'):
                # Add the image file path to the list
                image_paths.append(os.path.join(subdir_path, image_file))

        # Sort the list of image paths
        image_paths.sort()

        # Set the output video codec and the frame size
        fourcc = cv2.VideoWriter_fourcc(*'MJPG')
        frame_size = (640, 480)

        # Open the output video file
        out = cv2.VideoWriter(output_file, fourcc, frame_rate, frame_size)

        # Iterate over the image paths and add them to the video
        for image_path in image_paths:
            # Read the image file
            img = cv2.imread(image_path)

            # Add the image to the video
            out.write(img)

        # Release the video writer
        out.release()
