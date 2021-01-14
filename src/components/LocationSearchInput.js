import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import uniqid from 'uniqid';

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = (address) => {
        this.setState({ address });
    };

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                this.props.getSearchBarLocation(latLng);
                this.setState({ address: '' });
            })
            .catch((error) => console.error('Error', error));
    };

    render() {
        const searchOptions = {
            types: ['(regions)'],
        };
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                searchOptions={searchOptions}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                }) => (
                    <div>
                        <input
                            style={{ height: '25px' }}
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div style={{ position: 'absolute' }}>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                const style = suggestion.active
                                    ? {
                                          backgroundColor: '#dbd7d7',
                                          cursor: 'pointer',
                                      }
                                    : {
                                          backgroundColor: '#ffffff',
                                          cursor: 'pointer',
                                      };
                                return (
                                    <div
                                        key={uniqid()}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;
