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
    done
}


# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[0;37m'
NC='\033[0m' # No Color

echo "📠  Let's get snoopy to copy and paste that for you... "
echo " "
echo -e "${WHITE}  ,-~~-.___.${NC}"
echo -e "${WHITE} / |  '     \\         ${GREEN}beep boop beep boop${NC}"
echo -e "${WHITE}(  )         0${NC}"              
echo -e "${WHITE} \\_/-, ,----'${NC}"            
echo -e "${RED}    ====           ${WHITE}//${NC}"                     
echo -e "${WHITE}   /  \\-'~;    ${YELLOW}/${WHITE}~~~${YELLOW}(${WHITE}O${YELLOW})${NC}"
echo -e "${WHITE}  /  __/~|   ${YELLOW}/       |${NC}"     
echo -e "${WHITE}=(  _____| ${YELLOW}(_________|${NC}"
echo " "

# Call the function to duplicate all assets
duplicate_all_assets