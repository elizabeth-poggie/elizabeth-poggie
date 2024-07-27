#!/bin/bash

# Function to duplicate all assets from the _content directory to the public directory
duplicate_all_assets() {
    local content_dir="_content"
    local public_dir="public"

    # Loop through all directories under _content
    find "$content_dir" -type d -name "assets" | while read -r assets_dir; do
        # Calculate the corresponding public directory path
        relative_path="${assets_dir#"$content_dir/"}"
        dest_dir="$public_dir/$relative_path"

        # Ensure the destination directory exists
        mkdir -p "$dest_dir"

        # Copy all files from the source assets directory to the destination directory
        cp -r "$assets_dir/"* "$dest_dir"

        echo "Copied assets from $assets_dir to $dest_dir"
    done
}

# Call the function to duplicate all assets
duplicate_all_assets