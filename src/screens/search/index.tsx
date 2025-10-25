import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovie } from '../../store/actions/moviesActions'
import { ScreenStyle } from '../../styles/defaultScreenStyle'
import SearchCard from '../../components/movies/searchCard'
import { clearSearchResults } from '../../store/slice/moviesSlice'


const SearchHeader = ({ searchText, setSearchText, onSearch }: any) => {
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 6 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholder="Search"
          style={{
            backgroundColor: 'gray',
            paddingVertical: 18,
            padding: 8,
            borderRadius: 8,
            fontSize: 18,
            flex: 1,
          }}
          placeholderTextColor={'black'}
        />

        <TouchableOpacity
          onPress={onSearch}
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Search</Text>
        </TouchableOpacity>
      </View>

      {searchText.trim().length === 0 && (
        <Text style={{ color: 'gray', fontSize: 16, marginTop: 10 }}>
          Lütfen bir film ismi yazınız
        </Text>
      )}
    </View>
  )
}

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch: AppDispatch = useDispatch()
  const { searchList } = useSelector((state: RootState) => state.movies)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length > 2) {
        dispatch(
          searchMovie({
            query: searchText,
            include_adult: false,
          })
        )
      } else if (searchText.trim().length === 0) {
        dispatch(clearSearchResults())
      }
    }, 400)

    return () => clearTimeout(timeout)
  }, [searchText, dispatch])

  const handleSearch = () => {
    if (searchText.trim().length > 2) {
      dispatch(
        searchMovie({
          query: searchText,
          include_adult: false,
        })
      )
    }
  }

  return (
    <View style={[ScreenStyle.container, { flex: 1 }]}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Search</Text>

      <FlatList
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <SearchHeader
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={handleSearch}
          />
        }
        data={searchList}
        renderItem={({ item }) => <SearchCard movie={item} />}
        keyExtractor={item => item.id?.toString() ?? Math.random().toString()}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
