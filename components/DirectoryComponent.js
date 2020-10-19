import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
    };
};

class Directory extends Component {

    //JS keyword "STATIC" sets a method on the class itself rather than the object being instatiated from class
    //Used by react native to communicate this title to the Navigation Options
    static navigationOptions = {
        title: 'Directory'
    }
    //-------NAVIGATION PROPS-----
    //Each screen component in your app is provided with the navigation prop automatically
    //The prop contains various convenience functions that dispatch navigation actions on the route's router

    render(){
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile 
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            )
        }
        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default connect(mapStateToProps)(Directory);