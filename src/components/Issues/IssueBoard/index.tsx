import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssueItem from '../IssueItem/index';

import * as styles from './index.module.css';

const IssueBoard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect((): void => {

        axios.get('http://localhost:3001/api/reports').then(res => {
            const data = res.data;
            setData(data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className={styles.issueBoardWrapper}>
            <div className={styles.issueBoard}>
                <h1 className={styles.issueBoardTitle}>Bug Records</h1>
                {data.length !== 0 && data.map(data => (
                    <IssueItem title={data.title} severity={data.severity} />
                ))}
            </div>

        </div>
    );
}

export default IssueBoard