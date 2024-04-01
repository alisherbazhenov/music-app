function SearchInput(props) {
	return (
		<div className="centerblock__search search">
			<svg className="search__svg">
				<use xlinkHref={props.data[0].image} />
			</svg>
			<input
				className="search__text"
				type={props.data[0].type}
				placeholder={props.data[0].placeholder}
				name="search"
			/>
		</div>
	)
}

export default SearchInput
