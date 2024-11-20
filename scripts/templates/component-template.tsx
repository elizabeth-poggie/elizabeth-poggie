import React from 'react';
import styles from './{{componentName}}.module.scss';

interface {{componentNameCapitalized}}Props {
    // Define props here
}

export function {{componentNameCapitalized}}(props: {{componentNameCapitalized}}Props) {
    return (
        <div className={styles.{{componentName}}}>
            {/* Component content */}
        </div>
    );
}
