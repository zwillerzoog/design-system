// import React, { FunctionComponent, useEffect, useRef } from "react";
import React, { PureComponent, RefObject, createRef } from 'react';
import { Button, TextField, Autocomplete } from '@cmsgov/design-system';
import { LocationWidgetIcon } from '../Icons';

interface LocationWidgetProps {
  widgetHeader?: string;
  widgetContent?: string;
  widgetInputPlaceholder?: string;
  widgetInputLabel?: string;
  widgetButtonText?: string;
  onChange?: () => void;
  onSelect?: () => void;
}

interface LocationWidgetState {
  location: string;
  locationError: string;
  isDropdownOpen: boolean;
  isSearchDisabled: boolean;
  items: [];
}

class LocationWidget extends PureComponent<LocationWidgetProps, LocationWidgetState> {
  private menuRef: RefObject<HTMLDivElement>;

  constructor(props: LocationWidgetProps) {
    super(props);

    this.state = {
      location: '',
      locationError: '',
      isDropdownOpen: false,
      items: [],
      isSearchDisabled: true,
    };
    this.menuRef = createRef();
  }

  render() {
    return (
      <div
        className="ds-c-location ds-base"
        style={{
          border: '2px solid #e2e2e4',
          borderRadius: '20px',
          marginTop: '50px',
          padding: '20px 35px 35px',
          position: 'relative',
          textAlign: 'left',
        }}
      >
        <div className="ds-c-iw">
          <div className="semi-circle"></div>
          <i className="fas fa-map-marker-alt fa-3x"></i>
          <LocationWidgetIcon />
        </div>
        <h2>{this.props.widgetHeader}</h2>
        <p>{this.props.widgetContent}</p>
        <div className="form-wrapper">
          <Autocomplete
            className="ds-c-zip-input"
            isOpen={this.state.isDropdownOpen}
            onSelect={this.props.onSelect}
            items={this.state.items}
            inputValue={this.state.location}
            clearSearchButton={false}
          >
            <TextField
              onChange={this.props.onChange}
              errorMessage={this.state.locationError}
              className="location-input"
              placeholder={this.props.widgetInputPlaceholder}
              name="location"
              value={this.state.location}
              label={this.props.widgetInputLabel}
              aria-live="polite"
            />
          </Autocomplete>
          <Button
            id="submit-button"
            isAlternate
            type="submit"
            variation="solid"
            // onClick={this.submit}
            disabled={this.state.isSearchDisabled}
            className="ds-c-button--primary-alt"
          >
            {this.props.widgetButtonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default LocationWidget;
