import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class Directory extends Component {

    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES
        }
    }

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
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg') }}
                />
            )
        }
        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default Directory;