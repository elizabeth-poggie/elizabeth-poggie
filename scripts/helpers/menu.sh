#!/bin/bash

# Function to print the menu dynamically
print_menu() {
    local options=("$@")
    for i in "${!options[@]}"; do
        if [ $i -eq $selected ]; then
            printf "\e[1;32m> ${options[$i]}\e[0m\n" 
        else
            printf "  ${options[$i]}\n"
        fi
    done
}

# Function to capture the arrow keys and return the selected index
capture_selection() {
    local options=("$@")
    selected=0
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

    tput cnorm
    return $selected
}
