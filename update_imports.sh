#!/bin/bash

# Directory containing the files
COMPONENTS_DIR="./src/Components"

# Pattern to search and replace
SEARCH_PATTERN='from ".\/Components\/'
REPLACE_PATTERN='from ".\/src\/Components\/'

# Apply sed command to all .jsx files in the directory
for file in "$COMPONENTS_DIR"/*.jsx; 
do
    sed -i "s|$SEARCH_PATTERN|$REPLACE_PATTERN|g" "$file"
done

# Apply sed command to all specific files listed
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/checkbox.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/badge.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/switch.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/sidebar.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/stacked-layout.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/sidebar-layout.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/dropdown.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/listbox.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/text.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/button.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/description-list.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/dialog.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/heading.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/navbar.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/select.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/textarea.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/sdohassessment.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/avatar.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/pagination.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/radio.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/input.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/table.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/alert.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/divider.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/link.jsx
sed -i 's/from ".\/Components\//from ".\/src\/Components\//g' ./src/Components/fieldset.jsx
