sanitize() {
    echo "$1" | tr ' ' '-' | tr -dc '[:alnum:]-'
}