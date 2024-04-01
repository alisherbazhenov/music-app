import SearchInput from './SearchInput'
import Filter from './Filter'
import PlaylistContent from './PlaylistContent'
import PlaylistTitle from './PlaylistTitle'
import FILTERDATA from '../../Data/FilterData'
import SEARCHDATA from '../../Data/SearchData'
import PLAYLISTDATATITLE from '../../Data/PlaylistTitleData'
import PLAYLISTITEMS from '../../Data/PlaylistItemsData'

function CentreBlock() {
	return (
		<div className="main__centerblock centerblock">
			<SearchInput data={SEARCHDATA} />
			<h2 className="centerblock__h2">Треки</h2>
			<Filter data={FILTERDATA} />
			<div className="centerblock__content">
				<PlaylistTitle data={PLAYLISTDATATITLE} />
				<PlaylistContent items={PLAYLISTITEMS} />
			</div>
		</div>
	)
}

export default CentreBlock
