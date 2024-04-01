/* eslint-disable */
import AuthorList from './AuthorList'
import GenreList from './GenreList'
import YearList from './YearList'
import { useState } from 'react'
import styled from 'styled-components'

function Filter(props) {
	const prop = props.data
	const [activeFilter, setActiveFilter] = useState(null)

	const changeFilter = (valueFilter) => {
		if (activeFilter === valueFilter) {
			setActiveFilter(null)
			return
		}
		setActiveFilter(valueFilter)
	}

	return (
		<div className="centerblock__filter filter">
			<div className="filter__title">{prop.title}:</div>
			<div
				className="filter__wrap"
				onClick={() => {
					changeFilter('author')
				}}
			>
				<FilterBtn title={prop.author} isActive={activeFilter === 'author'} />
				{activeFilter === 'author' && <AuthorList />}
			</div>
			<div
				className="filter__wrap"
				onClick={() => {
					changeFilter('year')
				}}
			>
				<FilterBtn title={prop.year} isActive={activeFilter === 'year'} />
				{activeFilter === 'year' && <YearList />}
			</div>
			<div
				className="filter__wrap"
				onClick={() => {
					changeFilter('genre')
				}}
			>
				<FilterBtn title={prop.genre} isActive={activeFilter === 'genre'} />
				{activeFilter === 'genre' && <GenreList />}
			</div>
		</div>
	)
}

const StyledFilterBtn = styled.div`
	margin-right: 10px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid ${(props) => (props.$isActive ? '#ad61ff' : '#fff')};
	border-radius: 60px;
	padding: 6px 20px;
	color: ${(props) => (props.$isActive ? '#ad61ff' : '#fff')};
	&:hover {
		border-color: #d9b6ff;
		color: #d9b6ff;
		cursor: pointer;
	}
`

function FilterBtn(props) {
	return (
		<StyledFilterBtn $isActive={props.isActive}>{props.title}</StyledFilterBtn>
	)
}

export default Filter
