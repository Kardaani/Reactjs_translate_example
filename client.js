'use strict';

var counterpart = require('counterpart');
var React       = require('react');
var ReactDOM    = require('react-dom');
var Translate   = require('react-translate-component');



class LocaleSwitcher extends React.Component {
  handleChange(e) {
    counterpart.setLocale(e.target.value);
  }

  render() {
    return (
      <p>
        <span>Switch Locale:</span>

        <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
          <option>en</option>
          <option>de</option>
        </select>
      </p>
    );
  }
}


class Greeter extends React.Component {
  render() {
    return <Translate {...this.props} content="example.greeting" />;
  }
}


counterpart.registerTranslations('en', {
  example: {
    greeting: 'Hello %(name)s! How are you today?'
  }
});

counterpart.registerTranslations('de', {
  example: {
    greeting: 'Hallo, %(name)s! Wie geht\'s dir heute so?'
  }
});




class MyApp extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>React Translate Quick-Start</title>
          <script src="/bundle.js" />
        </head>

        <body>
          <LocaleSwitcher />
	<Greeter with={{ name: "Kari" }} component="h1" />

        </body>
      </html>
    );
  }
}

if (typeof window !== 'undefined') {
  window.onload = function() {
    ReactDOM.render(<MyApp />, document);
  };
}

module.exports = MyApp;
