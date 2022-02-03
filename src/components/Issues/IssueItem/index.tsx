import React, { useState } from 'react';
import * as styles from './index.module.css'

const IssueItem: React.FC<{ title: String, severity: String }> = ({ title, severity }) => {


    return (
        <div className={styles.issueItemWrapper}>
            <div className={styles.issueItem}>
                <div className={styles.issueData}>
                    <h1 className="text-xl text-white font-bold">{title}</h1>
                    <div className="flex justify-center">
                    <span>Severity: </span>
                    <p>{' ' + severity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IssueItem;