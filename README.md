# angular-google-maps-mock
Karma Mock for Unit Testing with Angular Google Maps Services

I created this mock based on frustration of not finding a more completely mocked google service out there.  If you are getting the error "Uncaught ReferenceError: google is not defined" or similar when running your Karma tests because you are utilizing angular google maps (https://github.com/angular-ui/angular-google-maps) to tap into Googles Map and Places Services, this should help.

(Credit: This is building upon the more simplified mock mentioned in this thread: https://github.com/angular-ui/angular-google-maps/issues/270)

First, add the maps.googleapis.com-maps-api.js mock file into your test directory.  Mine is located at {tests_folder}/mocks.

Then add the following dependencies in your karma config file within the "files" or "vendor" array:
```
    files: [
        'https://maps.googleapis.com/maps/api/js?sensor=false', //<--this one
        'mocks/maps.googleapis.com-maps-api.js', //<--and this one, changing path as necessary for the mock file you just added
        ....{all of your other file dependencies}...
    ]
```

That's it!  If you run into other errors where methods are undefined, add them as methods in the correct spot in the mock google object's tree.
