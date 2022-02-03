import React, { useEffect, useRef, useState } from 'react';
import type { Report } from '../../types/Report/Report';
import { validator } from '../../hooks/validator'
import axios from 'axios';

import * as styles from './index.module.css';

const BugReportForm: React.FC = () => {
    const [reportInput, setReportInput] = useState<Report>({
        title: '',
        description: '',
        severity: 'Low'
    });

    const [conditionsMet, setConditions] = useState<boolean>(true);

    const severityRef = useRef<HTMLInputElement>(null);

    const titleChangeHandler = (event: any) => {
        setReportInput(prevState => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }
    const descriptionChangeHandler = (event: any) => {
        setReportInput(prevState => {
            return {
                ...prevState,
                description: event.target.value
            }
        })
    }

    const rangeChangeHandler = () => {
        const severityValue: String = severityRef.current.value;
        let severity;
        switch (severityValue) {
            case '0':
                severity = 'Not provided'
                break;
            case '1':
                severity = 'Low'
                break;
            case '2':
                severity = 'Medium'
                break;
            case '3':
                severity = 'High'
                break;
            default:
                severity = 'Low'
        }
        setReportInput(prevState => {
            return {
                ...prevState,
                severity: severity
            }
        })
    }

    const formSubmitHandler = (event: any) => {
        event.preventDefault();

        if (severityRef.current.value === '0'
            || validator(reportInput.title)
            || validator(reportInput.description)
        ) {
            setConditions(false);
            return;
        }
        else {
            const bugReportData: Report = {
                title: reportInput.title,
                description: reportInput.description,
                severity: reportInput.severity

            }
            axios.post('http://localhost:3001/api/reports', bugReportData);
        }
    }

    return (
        <div className={styles.loginBoxWrapper}>
        <div className={styles.loginBox}>
            <h2>Add Bug Report</h2>
            <form method='post'>
                <div className={styles.userBox}>
                    <input id="title" name="title" type="text" onChange={titleChangeHandler} onBlur={()=> setConditions(true)} />
                    <label>Title</label>
                </div>
                <div className={styles.userBox}>
                    <textarea id="description" name="description" onChange={descriptionChangeHandler} onBlur={()=> setConditions(true)} />
                    <label>Description</label>
                </div>
                <div className={styles.userBox}>
                    <div className="grid grid-cols-3 gap-1 w-full text-right text-white">
                        <h3>Low</h3>
                        <h3>Medium</h3>
                        <h3>High</h3>
                    </div>
                    <input id="severity" name="severity" ref={severityRef} type="range" min="0" max="3" defaultValue="1" onChange={rangeChangeHandler} onBlur={()=> setConditions(true)} />
                    <label>Severity</label>
                    {
                        reportInput.severity === 'Not provided' &&
                        <p className="text-red-400">Please provide severity value.</p>
                    }
                    {
                        !conditionsMet &&
                        <p className="text-red-400">You have to fill in all the fields.</p>
                    }
                </div>
                <a
                    onClick={formSubmitHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
        </div>
    )
}

export default BugReportForm;