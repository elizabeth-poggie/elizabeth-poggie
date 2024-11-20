#!/bin/bash

# Source the helper functions
source "scripts/helpers/menu.sh"

# Prompt the user to select a directory
echo "Enter a directory: "
directories=("john-abbott-college" "portfolio" "recipes")
capture_selection "${directories[@]}"
directory="${directories[$?]}"

# Define categories based on the selected directory
case $directory in
    "john-abbott-college")
        categories=("Web Programming I" "Computerized Systems" "Admin" "User Interfaces" "Intro to Programming")
        ;;
    "portfolio")
        categories=("Art" "Branding" "Management" "Hackathon")
        ;;
    "recipes")
        categories=("Bread" "Dessert" "Snack")
        ;;
    *)
        echo "Invalid directory selected."
        exit 1
        ;;
esac

# Prompt the user to select a category
echo "Enter category: "
capture_selection "${categories[@]}"
category="${categories[$?]}"

# Define subcategories based on category selection
subcategories=()
if [ "$directory" = "john-abbott-college" ]; then
    case $category in
        "Web Programming I")
            subcategories=("lectures" "assignments" "quiz-answers")
            ;;
        "Computerized Systems")
            subcategories=("lectures" "assignments")
            ;;
        "Admin")
            subcategories=("instructor-info" "schedules")
            ;;
        "User Interfaces")
            subcategories=("lectures" "assignments")
            ;;
        *)
            echo "No subcategories available for this category."
            exit 1
            ;;
    esac

    # Prompt the user to select a subcategory
    echo "Select a sub category: "
    capture_selection "${subcategories[@]}"
    subcategory="${subcategories[$?]}"
fi

# Prompt the user to enter a title
echo "Enter title: "
read title

# Generate the current date in YYYY-MM-DD format
created=$(date +'%Y-%m-%d')

# Define the file name based on the title (replace spaces with hyphens and make lowercase)
file_name=$(echo "$title" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
kebabed_category=$(echo "$category" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
# Create target directories based on the directory, category, and subfolder (if applicable)
if [ "$directory" = "john-abbott-college" ]; then
    kebabed_sub_category=$(echo "$subcategory" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
    target_dir="_content/$directory/$kebabed_category/$kebabed_sub_category"
else
    target_dir="_content/$directory/$kebabed_category"
fi

# Count existing files in the directory to assign the next number
file_count=$(ls "$target_dir" | grep -E '^[0-9]+-' | wc -l)
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
mkdir -p "$target_dir/$file_name"
mkdir -p "$target_dir/$file_name/assets"

# Write the content to the MDX file
echo -e "$content" > "$target_dir/$file_name/$file_name.mdx"

echo "MDX file generated: $target_dir/$file_name/$file_name.mdx"
