sanitize() {
    echo "$1" | tr ' ' '-' | tr -dc '[:alnum:]-'
}

kebab_case() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g'
}

to_camel_case() {
    echo "$1" | sed -r 's/(^|-)([a-z])/\U\2/g' | sed 's/-//g'
}

to_capital_camel_case() {
    echo "$1" | sed -r 's/(^|-)([a-z])/\U\2/g; s/-//g'
}