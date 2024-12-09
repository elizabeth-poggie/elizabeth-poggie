#!/bin/bash

TEMPLATE_DIR="scripts/templates"
CONFIG_FILE="scripts/configs/components.json"
source "scripts/helpers/menu.sh"
source "scripts/helpers/formatting.sh"

# Dependency check
if ! command -v jq &> /dev/null; then
    echo "Please install jq lol"
    exit 1
fi

# Read categories from the JSON file
categories=($(jq -r '.components[]' "$CONFIG_FILE"))

# Display menu and capture selection
echo "Select a component category:"
capture_selection "${categories[@]}"
category="${categories[$?]}"

# Prompt for component name
echo "What is the name of the new component?"
read -r title

# Convert names
component_name=$(kebab_case "$title")
capital_camel_case_name=$(to_capital_camel_case "$component_name")

# Define paths
target_dir="src/components/$category/$component_name"
tsx_file="$target_dir/$component_name.tsx"
scss_file="$target_dir/$component_name.module.scss"

# Create directory
mkdir -p "$target_dir"

# Template paths
tsx_template_file="$TEMPLATE_DIR/component-template.tsx"
scss_template_file="$TEMPLATE_DIR/component-template.module.scss"

# Ensure templates exist
if [ ! -f "$tsx_template_file" ] || [ ! -f "$scss_template_file" ]; then
    echo "Error: Template files not found in $TEMPLATE_DIR."
    exit 1
fi

# Replace placeholders in templates
tsx_content=$(sed "s/{{componentName}}/$component_name/g" "$tsx_template_file")
tsx_content=$(echo "$tsx_content" | sed "s|PLACEHOLDER_|$capital_camel_case_name|g")
scss_content=$(sed "s/{{componentName}}/$component_name/g" "$scss_template_file")

# Write to files
echo "$tsx_content" > "$tsx_file"
echo "$scss_content" > "$scss_file"

# Output success message
echo "Component created successfully!"
echo "- Directory: $target_dir"
echo "- TypeScript File: $tsx_file"
echo "- SCSS File: $scss_file"
