var google = {
	maps: {
		Animation: function () {
			return {
				DROP: function () {
				}
			};
		},
		OverlayView: function () {
		},
		Marker: function () {
			return {
				setMap: function () {

				}
			};
		},
		InfoWindow: function () {
			return {
				setContent: function (string) {

				}
			};
		},
		LatLng: function (lat, lng) {
			return [lat, lng];
		},
		LatLngBounds: function () {
			return {
				extend(lat, lng) {
				}
			};
		},
		event: {
			addListener: function () {
			}
		},
		Map: function (obj) {
			return {
				setCenter: function () {

				},
				fitBounds: function () {

				}
			};
		},
		MapTypeId: { ROADMAP: true },
		places: {
			AutocompleteService: function () {

			},
			PlacesService: function (obj) {
				return {
					PlacesServiceStatus: {
						OK: true
					},
					textSearch: function (query) {
						return [];
					},
					nearbySearch: function (query) {
						return [];
					}
				};
			}
		}
	}
};
