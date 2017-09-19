import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';
import {StyleSheet} from 'react-native';

interface SearchRequest {
  place_name?: string
  centre_point?: string
}

interface Props {
  request: SearchRequest
  isLoading: boolean
  errorMessage?: string
  search: (request: string) => void
}

interface State {
  placeName: string
  isLoading: boolean
  message: string
  search: (request: string) => void
}

export default class SearchPage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      placeName: props.request ? props.request.place_name : 'XX',
      isLoading: props.isLoading,
      message: props.errorMessage || '',
      search: props.search
    };
  }

  onSearchTextChanged(event) {
    this.setState({placeName: event.nativeEvent.text});
  }

  onLocationPressed() {
    navigator.geolocation.getCurrentPosition(
      location => {
        let search = `${location.coords.latitude},${location.coords.longitude}`;
        // this.setState({request: search});
        this.executeQuery({centre_point: search});
      },
      error => {
        this.setState({
          message: `There was a problem with obtaining your location: ${error}`
        });
      });
  }

  executeQuery(request) {
    this.props.search(request);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      message: nextProps.errorMessage,
      // request: nextProps.request,
      placeName: nextProps.request.place_name,
      isLoading: nextProps.isLoading
    })
  }

  onSearchPressed() {
    this.executeQuery({place_name: this.state.placeName});
  }

  render() {
    const spinner = this.state.isLoading ? ( <ActivityIndicator size='large'/> ) : undefined;

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            accessible={true}
            accessibilityLabel='CityName'
            value={this.state.placeName}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={styles.button}
                              underlayColor='#99d9f4'
                              testID='SearchButton'
                              onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button}
                              onPress={this.onLocationPressed.bind(this)}
                              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Location</Text>
          </TouchableHighlight>
        </View>

        <Image source={require('../../shared/assets/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});
