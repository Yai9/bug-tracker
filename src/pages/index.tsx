import React, { useState } from 'react'
import Header from '../UI/Header/index'
import Sidebar from 'src/UI/Sidebar'
import CreateReport from '../components/CreateReport'
import IssueBoard from '../components/Issues/IssueBoard/index'
import 'tailwindcss/tailwind.css'

const App: React.FC = () => {
	const [sidebarToggled, setSidebarToggle] = useState<boolean>(false);
	const [issueBoardToggled, setIssueBoardToggle] = useState<boolean>(false);

	const sidebarToggleHandler = (): void => {
		setSidebarToggle(!sidebarToggled);
	}

	const issueBoardToggleHandler = (): void => {
		setIssueBoardToggle(!issueBoardToggled);
	}


	return (
		<div className="app">
			<div>
				<Header onSidebarToggle={sidebarToggleHandler} />
			</div>
			<div className={`${!sidebarToggled ? "sidebarClosed" : "sidebarOpened"} `}>
				<Sidebar onIssueBoardToggle={issueBoardToggleHandler}/>
			</div>
			<div className={`${!issueBoardToggled ? "issueBoardClosed" : "issueBoardOpened"} issueContainer`}>
				<IssueBoard />
			</div>
			<div>
				<CreateReport />
			</div>
		</div>
	)
}

export default App
