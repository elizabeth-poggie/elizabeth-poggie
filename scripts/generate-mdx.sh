#!/bin/bash

# Function to print the menu dynamically
print_menu() {
    local options=("$@")
    for i in "${!options[@]}"; do
        if [ $i -eq $selected ]; then
            printf "\e[1;32m> ${options[$i]}\e[0m\n"  # Highlight selected option
        else
            printf "  ${options[$i]}\n"
        fi
    done
}

# Function to capture the arrow keys and return the selected index
capture_selection() {
    local options=("$@")
    selected=0

    # Hide the cursor
    tput civis

    while true; do
        clear
        print_menu "${options[@]}"
        read -rsn1 input
        if [ "$input" = $'\x1b' ]; then
            read -rsn2 input
            if [ "$input" = "[A" ]; then
                ((selected--))
                if [ $selected -lt 0 ]; then
                    selected=$((${#options[@]} - 1))
                fi
            elif [ "$input" = "[B" ]; then
                ((selected++))
                if [ $selected -ge ${#options[@]} ]; then
                    selected=0
                fi
            fi
        elif [ "$input" = "" ]; then
            break
        fi
    done

    # Show the cursor
    tput cnorm

    return $selected
}

# Prompt the user to select a directory
echo "Enter a directory: "
directories=("john-abbott-college" "portfolio" "recipes")
capture_selection "${directories[@]}"
directory="${directories[$?]}"

# Define categories based on the selected directory
case $directory in
    "john-abbott-college")
        categories=("User Interfaces" "Intro to Programming")
        ;;
    "portfolio")
        categories=("Art" "Branding" "Event" "Hackathon")
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

# Prompt the user to enter a title
echo "Enter title: "
read title

# Generate the current date in YYYY-MM-DD format
created=$(date +'%Y-%m-%d')

# Define the file name based on the title (replace spaces with hyphens and make lowercase)
file_name=$(echo "$title" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
kebabed_category=$(echo "$category" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# target directories must exist
target_dir="_content/$directory/$kebabed_category/$file_name"
mkdir -p "$target_dir"
mkdir -p "$target_dir/assets" # also an assets folder is nice

# Define the content of the MDX file
content="---
# General Information
category: \"$category\"
title: \"$title\"
created: \"$created\"
coverSrc: \"./assets/\"
---"

# Write the content to the MDX file
echo -e "$content" > "$target_dir/$file_name.mdx"

echo "MDX file generated: $target_dir/$file_name.mdx"