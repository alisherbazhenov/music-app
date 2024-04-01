import SearchInput from './SearchInput'
import SEARCHDATA from '../../Data/SearchData'
import PlaylistTitle from './PlaylistTitle'
import PLAYLISTDATATITLE from '../../Data/PlaylistTitleData'
import PlaylistContent from './PlaylistContent'
import PLAYLISTITEMS from '../../Data/PlaylistItemsData'

function UserPlaylist() {
	return (
		<div className="main__centerblock">
			<SearchInput data={SEARCHDATA} />
			<h2 className="centerblock__h2">Мои треки</h2>
			<div className="centerblock__content">
				<PlaylistTitle data={PLAYLISTDATATITLE} />
				<PlaylistContent items={PLAYLISTITEMS} />
			</div>
		</div>
	)
}

export default UserPlaylist
