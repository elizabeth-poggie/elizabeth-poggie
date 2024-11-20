#!/bin/bash

CONFIG_FILE="scripts/configs/components.json"
source "scripts/helpers/menu.sh"
source "scripts/helpers/formatting.sh"

## dep check
if ! command -v jq &> /dev/null; then
    echo "Plz install jq lol"
    exit 1
fi

# Read components from the JSON file
categories=($(jq -r '.components[]' "$CONFIG_FILE"))

# Display the components for selection
echo "Select a component category:"
capture_selection "${categories[@]}"
category="${directories[$?]}"

echo "What is the name of the new component?"
read -r title

# Convert the title to kebab case
component_name=$(kebab_case "$title")

# Define the target directory and file names
target_dir="src/components/$category/$component_name"
tsx_file="$target_dir/$component_name.tsx"
scss_file="$target_dir/$component_name.module.scss"

# Create the directory structure
mkdir -p "$target_dir"

# Create the .tsx boilerplate

# Create module.scss boilerplate