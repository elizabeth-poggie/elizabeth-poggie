#!/bin/bash

TEMPLATE_DIR="scripts/templates"
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
capital_camel_case_name=$(to_capital_camel_case "$component_name")

# Define the target directory and file names
target_dir="src/components/$category/$component_name"
tsx_file="$target_dir/$component_name.tsx"
scss_file="$target_dir/$component_name.module.scss"

# Create the directory structure
mkdir -p "$target_dir"

# Load the template files for .tsx and .scss from the /templates directory
tsx_template_file="$TEMPLATE_DIR/component-template.tsx"
scss_template_file="$TEMPLATE_DIR/component-template.module.scss"

if [ ! -f "$tsx_template_file" ] || [ ! -f "$scss_template_file" ]; then
    echo "404 templates not found. Poggie sucks at scripts."
    exit 1
fi

# init with cute template with proper names
# Replace placeholders in the templates with actual component name
tsx_content=$(sed "s/{{componentName}}/$component_name/g" "$tsx_template_file")
tsx_content=$(echo "$tsx_content" | sed "s/{{ComponentName}}/$capital_camel_case_name/g")
scss_content=$(sed "s/{{ComponentName}}/$component_name/g" "$scss_template_file")

echo "$tsx_content" > "$tsx_file"
echo "$scss_content" > "$scss_file"

echo "Component created successfully:"
echo "- Directory: $target_dir"
echo "- TypeScript File: $tsx_file"
echo "- SCSS File: $scss_file"