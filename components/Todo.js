const Todo = ({onClick,completed,text}) =>(
		<li onClick={onClick}
			style={{textDecoration:completed?"lline-through":"none"}}>
		</li>
	)