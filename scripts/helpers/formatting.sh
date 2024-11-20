sanitize() {
    echo "$1" | tr ' ' '-' | tr -dc '[:alnum:]-'
}

kebab_case() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g'
}