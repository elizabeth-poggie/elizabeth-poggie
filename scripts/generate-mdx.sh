#!/bin/bash

# Source the helper functions and configs
CONFIG_FILE="scripts/configs/notes.json"
source "scripts/helpers/menu.sh"
source "scripts/helpers/formatting.sh"

## dep check
if ! command -v jq &> /dev/null; then
    echo "Plz install jq lol"
    exit 1
fi

# Read directories from the JSON file
directories=($(jq -r 'keys_unsorted[]' "$CONFIG_FILE"))

echo "Enter a directory: "
capture_selection "${directories[@]}"
directory="${directories[$?]}"

# Read categories for the selected directory
categories=()
while IFS= read -r category; do
    categories+=("$category")
done < <(jq -r --arg dir "$directory" '.[$dir].categories | keys_unsorted[]' "$CONFIG_FILE")

if [ "${#categories[@]}" -eq 0 ]; then
    echo "No categories found for $directory. Exiting."
    exit 1
fi

echo "Enter category: "
capture_selection "${categories[@]}"
category="${categories[$?]}"

# Verify that the category exists in the JSON
if [ -z "$category" ]; then
    echo "Please select a non trash category lol"
    exit 1
fi

# Read subcategories for the selected category (if any)
subcategories=($(jq -r --arg dir "$directory" --arg cat "$category" '.[$dir].categories[$cat][]' "$CONFIG_FILE"))

if [ "${#subcategories[@]}" -gt 0 ]; then
    echo "Select a sub category: "
    capture_selection "${subcategories[@]}"
    subcategory="${subcategories[$?]}"
fi


# Prompt the user to enter a title
echo "Enter title: "
read title

# Sanitize inputs
sanitized_title=$(sanitize "$title")
sanitized_category=$(sanitize "$category")
sanitized_subcategory=$(sanitize "$subcategory")

# Generate the current date in YYYY-MM-DD format
created=$(date +'%Y-%m-%d')

# Define the file name
file_name="$sanitized_title"
kebabed_category="$sanitized_category"

# Create target directories based on the directory, category, and subfolder (if applicable)
if [ "$directory" = "john-abbott-college" ]; then
    kebabed_sub_category="$sanitized_subcategory"
    target_dir="_content/$directory/$kebabed_category/$kebabed_sub_category"
else
    target_dir="_content/$directory/$kebabed_category"
fi

# Count existing files in the directory to assign the next number
file_count=$(find "$target_dir" -maxdepth 1 -type f -name '[0-9]*-*' 2>/dev/null | wc -l)
next_number_unformatted=$((file_count + 1))
next_number=$(printf "%02d" $next_number_unformatted)

# Append the number to the file name
file_name="$next_number-$file_name"

# Define the content of the MDX file
content="---
# General Information
category: \"$category\"
title: \"$title\"
created: \"$created\"
number: $next_number_unformatted
---"

# Create the target directories
mkdir -p "$target_dir/$file_name/assets"

# Write the content to the MDX file
echo -e "$content" > "$target_dir/$file_name/$file_name.mdx"

echo "MDX file generated: $target_dir/$file_name/$file_name.mdx"