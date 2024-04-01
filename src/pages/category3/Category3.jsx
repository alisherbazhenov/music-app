import SearchInput from '../../components/Centreblock/SearchInput'
import SEARCHDATA from '../../Data/SearchData'
import PlaylistTitle from '../../components/Centreblock/PlaylistTitle'
import PLAYLISTDATATITLE from '../../Data/PlaylistTitleData'
import PlaylistContent from '../../components/Centreblock/PlaylistContent'
import PLAYLISTITEMS from '../../Data/PlaylistItemsData'

function Category3() {
	return (
		<div className="main__centerblock centerblock">
			<SearchInput data={SEARCHDATA} />
			<h2 className="centerblock__h2">Инди заряд</h2>
			<div className="centerblock__content">
				<PlaylistTitle data={PLAYLISTDATATITLE} />
				<PlaylistContent items={PLAYLISTITEMS} />
			</div>
		</div>
	)
}

export default Category3
