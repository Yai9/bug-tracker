import React from 'react';
import * as styles from './index.module.css';

const TaskBoard: React.FC = () => {
    return (
        <div className={styles.taskBoardWrapper}>
            <div className={styles.taskBoard}>
                TaskBoard
            </div>
        </div>
    )
}

export default TaskBoard;