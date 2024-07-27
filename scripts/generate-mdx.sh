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

echo "Enter a directory: "
directories=("john-abbott-college" "portfolio" "recipes")
capture_selection "${directories[@]}"
directory=$?

# Clear the screen and print the selected option
clear

categories=()
case $directory in
    0)
        categories=("user-interfaces" "intro-to-programming")
        ;;
    1)
        categories=("art" "branding" "event" "hackathon")
        ;;
    2)
        categories=("bread" "dessert" "snack")
        ;;
esac

echo "Enter category: "
capture_selection "${categories[@]}"
category=$?

# Clear the screen and continue
clear

echo "Enter title: "
read title

# Generate the current date in YYYY-MM-DD format
created=$(date +'%Y-%m-%d')

# Define the file name based on the title (replace spaces with hyphens and make lowercase)
file_name=$(echo "$title" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Define the content of the MDX file
content="---
# General Information
category: \"$category\"
title: \"$title\"
created: \"$created\"
coverSrc: \"./assets/\"
---"

# Write the content to the MDX file
echo -e "$content" > "_content/$directory/$category/$file_name/$file_name.mdx"

echo "MDX file generated: $file_name"