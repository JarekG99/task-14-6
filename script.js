
var CounterInc = React.createClass( {
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    render: function() {
        return (
            React.createElement('div', {onClick: this.increment, className: 'btn'},
              React.createElement('span', {className: 'counter'}, 'Counter no1: ' + this.state.counter)
            )
          );
      }
    });

    var CounterDec = React.createClass( {
        getInitialState: function() {
            return {
                counter: 100
            };
        },
        decrement: function() {
            this.setState({
                counter: this.state.counter - 1
            });
        },
        render: function() {
            return (
                React.createElement('div', {onClick: this.decrement, className: 'btn'},
                  React.createElement('span', {className: 'counter'}, 'Counter no2: ' + this.state.counter)
                )
              );
          }
        });

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(CounterInc, {}, ''),
        React.createElement(CounterDec, {}, '')
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));
